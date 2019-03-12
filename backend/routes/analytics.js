const router = require('express').Router();
const Vote = require('../models/vote');
const Election = require('../models/election');
const Analytics = require('../models/analytics');


/*
Asynchronous method to iterate through objects of an Array
*/
async function asyncForEach(array, callback){
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

/*
Get analytics for a particular election
tags:
  count:    Returns the total number of votes for each candidate
  gender:   Returns the votes by gender for each candidate
  avgAge:   Returns the average age of the voters for each candidate
  ageGroup: Returns the number of voters for each age group (18-24, 25-44, 45-64, 65+)
  province: Returns the number of voters of the top 5 most voted from provinces or territory
*/
router.get('/:electionID/:tag', async function(req,res){
  console.log("Request recevied for count analytic");
  // Check if election is closed ie: all votes submitted

  if(req.tag == "count" || req.tag == "gender" || req.tag == "avgAge"){
    try{
      var election = await Election.findById(req.params.electionID).exec();
      if(!election){
        console.log("Election ID not found");
        res.status(404).send();
        return;
      }
      else{
        if(election.endDate.getTime() > Date.now()){
          console.log("Cannot provide this analytic until end of voting:", election.endDate);
          res.status(400).send();
          return;
        }
      }
    } catch(err){
      console.log(err);
      res.status(500).send();
      return;
    }
  }


  // Check if analytics object already exists for this election
  try{
    let analytic = await Analytics.findOneAndDelete({electionID: req.params.electionID, tag: req.params.tag}).exec();
    if(analytic){
      console.log("Deleted old analytic object.");
    }
  } catch(err){
    console.log(err);
    res.status(500).send();
    return;
  }

  console.log("Creating new analytic object");
  let newAnalytic = new Analytics();
  newAnalytic.electionID = req.params.electionID;
  var data = [];
  var labels = [];

  switch(req.params.tag){
    case "count":
      newAnalytic.tag = req.params.tag;
      newAnalytic.description = "Total number of votes received by each candidate";
      // For all candidates
      await asyncForEach(election.candidates,async function(candidate){
        // Get all votes for each candidate
        var name = candidate.firstName + ' ' + candidate.lastName;
        try{
          let votes = await Vote.find({electionID: req.params.electionID, candidate: name, authenticated: true}).exec();
          console.log("Total number of votes found: %d", votes.length);
          data.push(votes.length);
          labels.push(name);
        } catch(err){
          console.log(err);
          res.status(500).send();
          return;
        }
      });
      break;

    case "gender":
      newAnalytic.description = "Number of votes received by each candidate by gender";
      newAnalytic.tag = req.params.tag;
      await asyncForEach(election.candidates,async function(candidate){
        // Get all votes for each candidate
        var name = candidate.firstName + ' ' + candidate.lastName;
        try{
          let maleCount = 0, femaleCount = 0, otherCount = 0;
          let votes = await Vote.find({electionID: req.params.electionID, candidate: name, authenticated: true}).exec();
          for (let index = 0; index < votes.length; index++) {
            if(votes[index].demographics.gender == "male")  maleCount++;
            else if(votes[index].demographics.gender == "female") femaleCount++;
            else if(votes[index].demographics.gender == "other")  otherCount++;
          }
          console.log("Total number of gender votes found [male,female,other]: %d,%d,%d", maleCount, femaleCount, otherCount);
          data.push(maleCount);
          labels.push("Male - "+name);
          data.push(femaleCount);
          labels.push("Female - "+name);
          data.push(otherCount);
          labels.push("Other - "+name);
        } catch(err){
          console.log(err);
          res.status(500).send();
          return;
        }
      });
      break;

    case "avgAge":
      newAnalytic.description = "Average age of voters for each candidate";
      newAnalytic.tag = req.params.tag;
      await asyncForEach(election.candidates,async function(candidate){
        // Get all votes for each candidate
        var name = candidate.firstName + ' ' + candidate.lastName;
        try{
          let sum = 0, avgAge = 0;
          let votes = await Vote.find({electionID: req.params.electionID, candidate: name, authenticated: true}).exec();
          for (let index = 0; index < votes.length; index++) {
            sum += votes[index].demographics.age;
          }
          avgAge = sum/votes.length;
          console.log("Average age found: %f", avgAge);
          data.push(avgAge);
          labels.push(name);
        } catch(err){
          console.log(err);
          res.status(500).send();
          return;
        }
      });
      break;

    case "ageGroup":
      newAnalytic.description = "Number of voters per age group";
      newAnalytic.tag = req.params.tag;
      let age18To24 = 0, age25To44 = 0, age45To64 = 0, age65Plus = 0;
      try{
        let votes = await Vote.find({electionID: req.params.electionID, authenticated: true}).exec();
        for (let index = 0; index < votes.length; index++){
          if(votes[index].demographics.age <= 24) age18To24++;
          else if(votes[index].demographics.age <= 44) age25To44++;
          else if(votes[index].demographics.age <= 64) age45To64++;
          else age65Plus++;
        }
        console.log("Age groups found [18-24,25-44,45-64,65+]: %d, %d, %d, %d",age18To24,age25To44,age45To64,age65Plus);
        data.push(age18To24);
        data.push(age25To44);
        data.push(age45To64);
        data.push(age65Plus);
        labels.push("18-24");
        labels.push("25-44");
        labels.push("45-64");
        labels.push("65+");
      } catch(err){
        console.log(err);
        res.status(500).send();
        return;
      }
      break;

    case "province":
      let provinceMap = new Map();
      provinceMap.set("BC",0);
      provinceMap.set("AB",0);
      provinceMap.set("SK",0);
      provinceMap.set("MB",0);
      provinceMap.set("ON",0);
      provinceMap.set("QC",0);
      provinceMap.set("NB",0);
      provinceMap.set("NS",0);
      provinceMap.set("PE",0);
      provinceMap.set("NL",0);
      provinceMap.set("YT",0);
      provinceMap.set("NT",0);
      provinceMap.set("NU",0);

      newAnalytic.description = "Number of voters from top 5 most voted from provinces and territories";
      newAnalytic.tag = req.params.tag;
      try{
        let votes = await Vote.find({electionID: req.params.electionID, authenticated: true}).exec();
        for (let index = 0; index < votes.length; index++){   // Count votes for each province
          let code = votes[index].locationCode.state;
          provinceMap.set(code,(provinceMap.get(code)+1));
        }
        for (let count = 0; count < 5; count++){
          var highestKey = "";
          var highestValue = -1;
          for (var [key, value] of provinceMap.entries()){
            if(value > highestValue){
              highestValue = value;
              highestKey = key;
            }
          }
          data.push(highestValue);
          labels.push(highestKey);
          provinceMap.delete(highestKey);
        }
        console.log(data);
        console.log(labels);
      } catch(err){
        console.log(err);
        res.status(500).send();
        return;
      }
      break;

    default:
      console.log("Unknown analytic tag");
      res.status(400).send("Unknown analytic tag");
      return;
  }

  newAnalytic.dataPoints = data;
  newAnalytic.dataLabels = labels;
  // Save and return analytics object
  newAnalytic.save(function(err, doc){
    if(err){
      console.log(err);
      res.status(500).send();
    } else{
      res.status(200).json(newAnalytic);
    }
  });

});

module.exports = router;
