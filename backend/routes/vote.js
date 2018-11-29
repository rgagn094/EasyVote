const router = require('express').Router();
const Vote = require('../models/vote');
const User = require('../models/user');
const expressip = require('express-ip');
const bcrypt = require('bcrypt');


function calculateAge(birthDate){
  var diff = Date.now() - birthDate.getTime();
  var age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}

/*
Create a vote
*/

router.post('/cast/:electionBodyID/:userID', function(req,res){
  console.log("Received request to cast a vote");

  //Get user document that cast vote to obtain its information
  User.findById(req.params.userID, function(err, user){
    if(err){
      console.log(err);
      res.status(500).send();
    }
    else if(!user){
      console.log("User ID not found");
      res.status(404).send()
    }
    else{
      //Check voter's age
      let age = calculateAge(user.demographics.birthDate);
      if(age < 18){
        res.status(403).send("Unfortunately you have not reached the required voting age");
      }

      //Create new vote object
      var newVote = new Vote();

      //hash userID of voter
      const saltRounds = 11;
      let hashID = bcrypt.hashSync(req.params.userID,saltRounds)

      newVote.hashedID = hashID;
      newVote.candidate = req.body.candidate;
      newVote.geoLocation = [45.00303, 75.0202] //req.ipInfo.ll; - Use once on remote server
      newVote.country = "Canada" //req.ipInfo.country; - Use once on remote server
      newVote.ipAddress = req.ip;
      newVote.electionID = req.params.electionBodyID;
      newVote.demographics.city = "Ottawa" //req.ipInfo.city; - Use once on remote server
      newVote.demographics.age = age;
      newVote.demographics.gender =  user.demographics.gender;

      //Save new vote to the databse
      newVote.save(function(err, vote){
        if(err){
          console.log(err);
          res.status(500).send();
        }
        else{
          console.log("Vote saved to database");
          res.status(200).json(newVote)
        }
      });
    }
  });
});

/*
Get all votes from a specific election
*/

router.get('/listElection/:electionID', function(req,res){
  console.log("Received request to list votes from an election");

  Vote.find({electionID: req.params.electionID}, function(err,foundData){
    if(err){
      console.log(err);
      res.status(500).send();
    }else if (!foundData) {
      console.log("No votes found");
      res.status(404).send();
    }else {
      res.status(200).json(foundData);
    }
  });
});

/*
Get all votes
*/

router.get('/listAll', function(req,res){
  console.log("Reveived request to list all votes");

  Vote.find({}, function(err, foundData){
    if(err){
      console.log(err);
      res.status(500).send();
    }else if (!foundData) {
      console.log("No Votes found");
      res.status(404).send();
    }else {
      res.status(200).json(foundData);
    }
  })
});


module.exports = router;
