//var express = require('express');
let router = require('express').Router();
const Log = require('../models/log');
const User = require('../models/user');
const geoip = require('geo-from-ip')
//var election = express.Router();

/*
Create a log
*/


router.post('/post/:userId', function(req,res){
    console.log("Received Event...");

    User.findById(req.params.userId, function(err, user) {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else if (!user) {
            console.log("User ID not found");
            res.status(404).send()
        }
        else {


            var newLog = new Log();
            let ip = req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                (req.connection.socket ? req.connection.socket.remoteAddress : null);
            let ipInfo = geoip.allData(ip);

            newLog.event = req.body.event;
            newLog.actor_type = req.body.actor_type;
            newLog.message = req.body.message;
            newLog.failure_reason = req.body.failure_reason;
            newLog.meta = {ipAddress: ip, actor: req.params.userID};


            newLog.save(function (err, log) {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                }
                res.status(200).send(log);
                console.log("Data saved to database");


            });
        }
    });
});


/*
Get a log
*/

router.get('/getLog/:logId', function(req,res){
    console.log("Received get specific log");

    Log.findById(req.params.logId, function(err,foundDoc){
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
List logs
*/

router.get('/list', function(req,res){

    console.log("Received get all logs request...");

    Log.find({}, function(err,foundData){
        if(err){
            console.log(err);
            res.status(500).send();
        }
        else if(!foundData){
            console.log("No logs found");
            res.status(404).send();
        }
        else{
            res.status(200).json(foundData);
        }
    });
});

/*
delete election
*/
router.delete('/deleteLog/:logId', function (req, res) {
            res.send('Got a DELETE request')
            console.log("Received get all logs request...");

            Log.deleteOne({}, function(err){
                if(err){
                    console.log(err);
                    res.status(500).send();
                }
                else if(!foundData){
                    console.log("Does not exist");
                    res.status(404).send();
                }
                else{
                    res.send('success!!!');
                }
    });
});


module.exports = router;

//module.exports = election;
