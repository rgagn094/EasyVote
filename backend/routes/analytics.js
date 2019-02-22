const router = require('express').Router();
const Vote = require('../models/vote');
const Analytics = require('../models/analytics');

/*
Get the count of all the votes for each candidate
*/
router.get('/:electionID/count', function(req,res){

  // Check if election is closed ie: all votes submitted
  // Check if analytics object already exists for this election

  // For all candidates
  // Get all votes for electionID and current candidate
  // Push total num and info to analytics ObjectId

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
