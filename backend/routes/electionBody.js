const router = require('express').Router();
const ElectionBody = require('../models/electionBody');

/*
Create an election body
*/

router.post('/register', function(req,res){
  console.log("Received Post new election body request...");

  var newElectionBody = new ElectionBody();

  newElectionBody.name = req.body.name;
  newElectionBody.country = req.body.country;
  newElectionBody.logo = req.body.logo;
  newElectionBody.description = req.body.description;

  newElectionBody.save(function(err, electionBody){
    if(err){
      console.log(err);
      res.status(500).send();
    }
    res.status(200).send(electionBody);
    console.log("Data saved to database");
  });
});


/*
Get an election body
*/

router.get('/find/:electionBodyId', function(req,res){
  console.log("Received get by ID request");

  ElectionBody.findById(req.params.electionBodyId, function(err,foundDoc){
    if(err){
      console.log(err);
      res.status(500).send();
    }
    else if(!foundDoc){
      console.log("No election body found");
      res.status(404).end();
    }
    else{
      res.status(200).json(foundDoc);
    }
  });
});

/*
List elections hosted by election body
*/

router.get('/list/:electionBodyId/elections', function(req,res){
  console.log("Received list users of election body request");

  ElectionBody.findById(req.params.electionBodyId, function(err,foundDoc){
    if(err){
      console.log(err);
      res.status(500).send();
    }else if(!foundDoc){
      console.log("No election body found");
      res.status(404).send();
    }else{
      res.status(200).json(foundDoc.elections);
    }
  });
});

/*
List election bodies
*/

router.get('/list', function(req,res){

  console.log("Received get all election body request...");

  ElectionBody.find({}, function(err,foundData){
    if(err){
      console.log(err);
      res.status(500).send();
    }
    else if(!foundData){
      console.log("No data found");
      res.status(404).send();
    }
    else{
      res.status(200).json(foundData);
    }
  });
});

/*
Edit election body
*/

router.put('/edit/:electionBodyId', function(req,res){
  console.log("Received edit request...");

  ElectionBody.findById(req.params.electionBodyId, function(err,foundDoc){
    if(err){
      console.log(err);
      res.status(500).send();
    }
    else if(!foundDoc){
      console.log("Election body not found");
      res.status(404).end();
    }
    else{
      if(req.body.name){
        foundDoc.name = req.body.name;
      }
      if(req.body.country){
        foundDoc.country = req.body.country;
      }
      if(req.body.logo){
        foundDoc.logo = req.body.logo;
      }
      if(req.body.description){
        foundDoc.description = req.body.description;
      }
      if(req.body.elections){  //Must test when elections routing has been implemented
        foundDoc.elections.push(req.body.elections);
      }

      foundDoc.save(function(err, updatedDoc){
        if(err){
          console.log(err);
          res.status(500).send()
        }
        else{
          console.log("Data save to database");
          res.send(updatedDoc);
        }
      });
    }
  });
});


module.exports = router;
