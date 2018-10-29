const express = require('express'); //import express
const app = express(); //initiale a new express application
const port = 8000; //port this app will listen on
const Test = require("./backend/models/test");
/*
Set up mongodb/mongoose
*/
const mongoose = require('mongoose');
let uri = "mongodb://easyvote:passw0rd@ds243963.mlab.com:43963/easyvote"
mongoose.connect(uri).then(()=>{
	console.log("Connected to Database");

}).catch((err)=>{
	console.log(`Error in connection to DB ${err}`);
})


//used to test if server is running
app.get('/', (req,res)=>{
	res.send("Hello world");
})

//used to test if database working. Should return a list of docs.
app.get('/test', (req,res)=>{
	return Test.find({}).exec().then((tests)=>{
		let response ={tests}
		res.json(response)
	}).catch((err)=>{
		let response = {err:err}
		res.json(response)
	})
	
})

app.listen(port, ()=> {
	console.log(`App is listening on port ${port}`);
})


//
//1. On your console/terminal redirect to easyvote folder.
//2 Install nodemon globally. npm install -g nodemon. 
//3. run nodemon server.js. Server should start
//on web browser redirect to http://localhost:8000 should return "Hello world" .
