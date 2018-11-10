const router = require('express').Router();
const Vote = require('../models/vote');

/*
Create a vote
*/

router.post('/cast', function(req,res){
  console.log("Received request to cast a vote");
})

/*
Get all votes from a specific election
*/

/*
Get all votes
*/



module.exports = router;
