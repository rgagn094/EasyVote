const router = require('express').Router();
const Vote = require('../models/vote');
const Election = require('../models/election');
const Analytics = require('../models/analytics');

/*
Get the count of all the votes for each candidate
*/
router.get('/:electionID/count', async function(req,res){

  // Check if election is closed ie: all votes submitted
  let election = await Election.findById(req.params.electionID).exec();
  if(err){
    console.log(err);
    res.status(500).send();
  }
  else if(!election){
    console.log("Election ID not found");
    res.status(404).send();
  }
  else{
    if(election.expiryDate > Date.now()){
      console.log("Cannot provide analytics until end of voting");
      res.status(400).send();
    }
  }

  // Check if analytics object already exists for this election
  await Analytics.find({electionID: req.params.electionID, tag: 'count'}, function(err,analytic){
    if(analytic){
      res.status(200).json(analytic);
    }
  });

  let newAnalytic = new Analytics();
  newAnalytic.description = "Total number of votes received by each candidate";
  newAnalytic.electionID = req.params.electionID;
  newAnalytic.tag = 'count';
  
  // For all candidates
  election.candidates.forEach(async function(candidate){
    // Get all votes for each candidate
    var name = candidate.firstName + ' ' + candidate.lastName;
    let votes = await Votes.find({electionID: req.params.electionID, candidate: name}).exec();
    // Push total num and info to analytics ObjectId
  });

  // Save and return analytics object
});

/*
Get the gender of all the voters for each candidate
*/
router.get('/:electionID/gender', function(req,res){

  // Check if election is closed ie: all votes submitted
  // Check if analytics object already exists for this election

  // For all candidates
  // Get all votes for electionID, current candidate, male
  // Get all votes for electionID, current candidate, female
  // Get all votes for electionID, current candidate, other
  // Push total num and info to analytics ObjectId

  // Save and return analytics object
});

/*
Get the average voter age for each candidate
*/
router.get('/:electionID/avgAge', function(req,res){

  // Check if election is closed ie: all votes submitted
  // Check if analytics object already exists for this election

  // For all candidates
  // Get all votes for electionID, current candidate
  // Compute average of age of all VoteSchema
  // Push total num and info to analytics ObjectId

  // Save and return analytics object
});

/*
Get the number of votes for each candidate for a given city
*/
router.get('/:electionID/:city/count', function(req,res){

  // Check if election is closed ie: all votes submitted
  // Check if analytics object already exists for this election

  // For all candidates
  // Get all votes for electionID, current candidate, city
  // Push total num and info to analytics ObjectId

  // Save and return analytics object
});

module.exports = router;
