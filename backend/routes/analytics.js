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
Get the count of all the votes for each candidate
*/
router.get('/:electionID/:tag', async function(req,res){
  console.log("Request recevied for count analytic");
  // Check if election is closed ie: all votes submitted
  try{
    var election = await Election.findById(req.params.electionID).exec();
    if(!election){
      console.log("Election ID not found");
      res.status(404).send();
      return;
    }
    else{
      if(election.endDate.getTime() > Date.now()){
        console.log("Cannot provide analytics until end of voting:", election.endDate);
        res.status(400).send();
        return;
      }
    }
  } catch(err){
    console.log(err);
    res.status(500).send();
    return;
  }

  // Check if analytics object already exists for this election
  try{
    let analytic = await Analytics.findOne({electionID: req.params.electionID, tag: req.params.tag}).exec();
    if(analytic){
      res.status(200).json(analytic);
      console.log("Analytic object already exists. Returning...");
      return;
    }
  } catch(err){
    console.log(err);
    res.status(500).send();
    return;
  }

  console.log("Creating new analytic object");
  let newAnalytic = new Analytics();
  newAnalytic.electionID = req.params.electionID;
  newAnalytic.tag = req.params.tag;
  var data = [];

  switch(req.params.tag){
    case "count":
      newAnalytic.description = "Total number of votes received by each candidate";
      // For all candidates
      await asyncForEach(election.candidates,async function(candidate){
        // Get all votes for each candidate
        var name = candidate.firstName + ' ' + candidate.lastName;
        try{
          // TODO: Make sure all votes have been authenticated
          let votes = await Vote.find({electionID: req.params.electionID, candidate: name}).exec();
          console.log("Total number of votes found: %d", votes.length);
          data.push(votes.length);
        } catch(err){
          console.log(err);
          res.status(500).send();
          return;
        }
      });
      break;

    case "gender":
      newAnalytic.description = "Number of votes received by each candidate by gender";
      await asyncForEach(election.candidates,async function(candidate){
        // Get all votes for each candidate
        var name = candidate.firstName + ' ' + candidate.lastName;
        try{
          // TODO: Make sure all votes have been authenticated
          let maleCount = 0, femaleCount = 0, otherCount = 0;
          let votes = await Vote.find({electionID: req.params.electionID, candidate: name}).exec();
          for (let index = 0; index < votes.length; index++) {
            if(votes[index].demographics.gender == "male")  maleCount++;
            else if(votes[index].demographics.gender == "female") femaleCount++;
            else if(votes[index].demographics.gender == "other")  otherCount++;
          }
          console.log("Total number of gender votes found [male,female,other]: %d,%d,%d", maleCount, femaleCount, otherCount);
          data.push(maleCount);
          data.push(femaleCount);
          data.push(otherCount);
        } catch(err){
          console.log(err);
          res.status(500).send();
          return;
        }
      });
      break;

    case "avgAge":
      newAnalytic.description = "Average age of voters for each candidate";
      await asyncForEach(election.candidates,async function(candidate){
        // Get all votes for each candidate
        var name = candidate.firstName + ' ' + candidate.lastName;
        try{
          // TODO: Make sure all votes have been authenticated
          let sum = 0, avgAge = 0;
          let votes = await Vote.find({electionID: req.params.electionID, candidate: name}).exec();
          for (let index = 0; index < votes.length; index++) {
            sum += votes[index].demographics.age;
          }
          avgAge = sum/votes.length;
          console.log("Average age found: %f", avgAge);
          data.push(avgAge);
        } catch(err){
          console.log(err);
          res.status(500).send();
          return;
        }
      });
      break;

    case "location":
  }

  newAnalytic.dataPoints = data;
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

/*
Get the number of votes for each candidate for a given city
*/
router.get('/:electionID/:city/count', async function(req,res){

  // Check if election is closed ie: all votes submitted
  // Check if analytics object already exists for this election

  // For all candidates
  // Get all votes for electionID, current candidate, city
  // Push total num and info to analytics ObjectId

  // Save and return analytics object
});

module.exports = router;
