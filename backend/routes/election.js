//var express = require('express');
let router = require('express').Router();
const Election = require('../models/election');
const ElectionBody = require('../models/electionBody');
//var election = express.Router();

/*
Create an election
*/


router.post('/post/:electionBodyId', function(req,res){
    console.log("Received Post new election request...");

    ElectionBody.findById(req.params.electionBodyId, function(err, electionBody) {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else if (!electionBody) {
            console.log("Election Body ID not found");
            res.status(404).send()
        }
        else {


            var newElection = new Election();

            newElection.title = req.body.title;
            newElection.candidates = req.body.candidates;//List of candidates and their details
            newElection.startDate = req.body.startDate;
            newElection.expiryDate = req.body.expiryDate;
            newElection.image = req.body.image;
            newElection.meta = {description: req.body.description, electionBody: req.body.electionBody};


            newElection.save(function (err, election) {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                }
                else {
                    res.send(election);
                    console.log("Data saved to database");
                }

            });
        }
    });
});


/*
Get an election
*/

router.get('/getElection/:electionId', function(req,res){
    console.log("Received get specific election");

    Election.findById(req.params.electionId, function(err,foundDoc){
        if(err){
            console.log(err);
            res.status(500).send();
        }
        else if(!foundDoc){
            console.log("No election found");
            res.status(404).end();
        }
        else{
            res.status(200).json(foundDoc);
        }
    });
});


/*
List election
*/

router.get('/list', function(req,res){

    console.log("Received get all elections request...");

    Election.find({}, function(err,foundData){
        if(err){
            console.log(err);
            res.status(500).send();
        }
        else if(!foundData){
            console.log("No elections found");
            res.status(404).send();
        }
        else{
            res.status(200).json(foundData);
        }
    });
});

/*
Edit election
*/

router.put('/edit/:electionId', function(req,res){
    console.log("Received edit request...");

    Election.findById(req.params.electionId, function(err,foundDoc){
        if(err){
            console.log(err);
            res.status(500).send();
        }
        else if(!foundDoc){
            console.log("Election not found");
            res.status(404).end();
        }
        else{
            if(req.body.title){
                foundDoc.title = req.body.title;
            }

            if(req.body.candidates){
                foundDoc.candidates = req.body.candidates;
            }
            if(req.body.startDate){
                foundDoc.startDate = req.body.startDate;
            }
            if(req.body.expiryDate){  //Must test when elections routing has been implemented
                foundDoc.expiryDate = req.body.expiryDate;
            }
            if(req.body.image){  //Must test when elections routing has been implemented
                foundDoc.image = req.body.image;
            }
            if(req.body.meta){  //Must test when elections routing has been implemented
                foundDoc.meta = {description:req.body.description, electionBody:req.body.electionBody};
            }

            foundDoc.save(function(err, updatedDoc){
                if(err){
                    console.log(err);
                    res.status(500).send()
                }
                else{
                    console.log("Data saved to database");
                    res.send(updatedDoc);
                }
            });
        }
    });
});

/*
delete election
*/



module.exports = router;

//module.exports = election;
