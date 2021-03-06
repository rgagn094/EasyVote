const express = require('express'); //import express
const bodyParser = require("body-parser"); //used to extract information from forms
const app = express(); //initiale a new express application
const port = 8000; //port this app will listen on
const userRouter = require("./backend/routes/user"); //load routes for users
const electionBodyRouter = require("./backend/routes/electionbody");
const voteRouter = require("./backend/routes/vote");
const electionRouter = require("./backend/routes/election");
const analyticsRouter = require("./backend/routes/analytics");
const logRouter = require("./backend/routes/log");
/*
Set up mongodb/mongoose
*/
const mongoose = require('mongoose');
let uri = "mongodb://easyvote:passw0rd@ds243963.mlab.com:43963/easyvote"
mongoose.connect(uri, {useNewUrlParser: true}).then(()=>{
	console.log("Connected to Database");

}).catch((err)=>{
	console.log(`Error in connection to DB ${err}`);
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

/*
Configure routes
*/
app.use('/user', userRouter);
app.use('/electionBody', electionBodyRouter);
app.use('/vote', voteRouter);
app.use('/election', electionRouter);
app.use('/analytics', analyticsRouter);
app.use('/log', logRouter);

//used to test if server is running
app.get('/', (req,res)=>{
	res.send("Hello world"); //prints hello world
});

/*
Run server
*/
app.listen(port, ()=> {
	console.log(`App is listening on port ${port}`);
})
