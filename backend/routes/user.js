let router = require('express').Router(); //router instance to create modular route handlers for user
let User = require('../models/user');
const {check, validationResult} = require('express-validator/check') //used for validation
const bcrypt = require('bcrypt'); //used for password hashing and comparison with DB
const ObjectID =require('mongoose').mongo.ObjectID
/*
Login
*/



/*
logout
*/



/*
Get a user by iD
*/
router.get('/find/:userID', (req,res)=>{
	User.findByID(userID).exec().then((user)=>{ //toDO: use .select() to return a relevant information not everything from a user.
		if (user) {
			res.send({user})
		}
		else {
			res.send({error: "No user found"})
		}
		
	}).catch((err)=>{
		console.log(err); 
		res.send({error:err});
	})
})



/*
Register/Create a user 
*/
router.post('/register', [
	check('email')
	.isEmail()
	.withMessage('Email format not valid'),
	check('password')
	.isLength({min: 8})
	.withMessage('Password must be at least 8 characters')
	.custom((value,{req})=>{ //custom validator checks if passwors match
		if(value!= req.body.password2){
			throw new Error("Passwords do not match")
		}else {
			return true
		}
	})
	],(req,res)=>{
	/*
		Get information from form
	*/
	let {	
		firstName,
		lastName,
		otherNames,
		email,
		password,
		password2,
		electionBodyID, //The election body that validated the User. The user will be able to participate in elections created by this body
		gender,
		birthDate,
		addressLine,
		city,
		state,
		postalCode,
		country,
		stateCode,
		countryCode,
		number,
		areaCode 
		} = req.body; 


	//Validation Check
	const errors = validationResult(req); //return validation object with errors
	console.log(errors.array())
	if(!errors.isEmpty() ){
		return res.send({errors:errors.array()})
	}


	//for development 
	electionBodyID = new ObjectID() //generates random id for electionbody 
	birthDate = new Date() //generate random birthdate for user
	

	/*
		Hash password
	*/
	const saltRounds = 13;
	let hash = bcrypt.hashSync(password,saltRounds) 


	//TODO: get meta data for user

	/*
		Format information to DB schema
	*/
	let address = {addressLine, city, state, postalCode,country,stateCode,countryCode};
	let phone = {number,areaCode};
	let demographics = {gender,birthDate,address};
	let electionBody = electionBodyID
	

	//create new instance of user
	let newUser = User({
		firstName,
		lastName,
		otherNames,
		email,
		password:hash, //store hash in password field
		phone,
		electionBody,
		demographics,
	})

	//Add user to database
	newUser.save().then((user)=>{
		//TODO : store user session
		res.send({user});
	}).catch((err)=>{
		console.log(err);
		res.send({error:err});
	})



})

/*

list all users in the system 

*/
router.get('/list', (req,res)=>{
	User.find({}).exec().then((users)=>{
		console.log(Object.keys(req))
		res.send({users}) //return users from database
		
	}).catch((err)=>{ //catch errors
		console.log({error: err}) //print errors to console
	})
})


/*
Edit a  user
*/


/*
Deactive a user account

*/




module.exports = router