let router = require('express').Router(); //router instance to create modular route handlers for user
let User = require('../models/user');


/*
Login
*/





/*
Register/Create a user
*/
// router.get('/create', (req,res)=>{
	
// 	User.create({
// 		firstName,lastName,otherNames,email,hashedPassword,electionBodies
// 		,demographics,meta}).then((user))
// })

/*
Edit a  user
*/




/*
Delete a  user
*/


/*

list users 

*/
router.get('/list', (req,res)=>{
	User.find({}).exec().then((users)=>{
		res.json({users}) //return users from database
	}).catch((err)=>{ //catch errors
		console.log({error: err}) //print errors to console
	})
})


module.exports = router