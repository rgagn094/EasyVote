let router = require('express').Router(); //router instance to create modular route handlers for user
let User = require('../models/user');

//list users 
router.get('/list', (req,res)=>{
	User.find({}).exec().then((users)=>{
		res.json({users}) //return users from database
	}).catch((err)=>{ //catch errors
		console.log({error: err}) //print errors to console
	})
})

module.exports = router