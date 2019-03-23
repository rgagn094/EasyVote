let router = require('express').Router(); //router instance to create modular route handlers for user
let User = require('../models/user');
const {check, validationResult} = require('express-validator/check'); //used for validation
const bcrypt = require('bcrypt'); //used for password hashing and comparison with DB
const ObjectID =require('mongoose').mongo.ObjectID;
const Nexmo = require('nexmo'); //used for 2FA
const nodemailer = require("nodemailer")

//easyvoteapp@gmail.com
//easyvote1
//Instantiate nexmo client
//Instantiate Nexmo client for 2FA
const nexmo = new Nexmo({
    apiKey: "56bed6af", //TODO hide
    apiSecret: "easyvoteTps5vbxglO" //TODO hide
});
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
		user: "easyvoteapp@gmail.com",
		pass: "easyvote1"
    }
});

/*
Login
*/
router.post('/login', async (req,res)=>{ //use of javascript async/await for synchronous login process
    try{
		//verificationMethod is used for 2FA value is either 0 for email or 1 for phone
        let {email,password, verificationMethod} = req.body; //get password and email from form
		email = email.toLowerCase();
		console.log(password,email);
        //check if email exist.
        let user = await User.findOne({email}).exec();
        if (!user) {
        	console.log("error no user");
            return res.send({error: 'User authentication failed'}) //return if user does not exist
        }
        console.log("User found");
        user.meta.lastLoginAttempt = Date.now(); //updates last login attempt
        //check if user's password matches stored hash using bcrypt
        let hash = user.password; //get hash from database
        let passwordMatch = bcrypt.compareSync(password, hash) //compare
        if (!passwordMatch){
            return res.send({error:"User authentication failed"})
        }
        console.log("Password matched");
        console.log(verificationMethod)
        //Verify user with 2FA via email or phone
		if (verificationMethod === 0){ //send pin through email

		}else if(verificationMethod == 1){ //send pin through phone
			//check if phone number exist
			if (!(user.phone.number && user.phone.areaCode)) {
            	return res.send({error:"User does not have a valid phone"})
			}
			console.log("trying to send verification")
			//Format phoneNumber
            let phoneNumber = "+" + user.phone.areaCode.toString() + user.phone.number.toString(); //e.146 standard format

			//Create and send pin to user
			nexmo.verify.request({number: phoneNumber, brand:"EasyVote", code_length:4},(err,result)=>{ //sets pin expiry to 240 . User has 2 tries before pin is changed
				//pin_expiry:240
				if(err){
					console.log(err);
					return res.send({error: "Please try again."})
				}else{
					if(result.status == '0'){
						console.log("sent code")
						//store verification in user . return userid
						user.meta.tokenPasscode = result.request_id; //updates token
						return res.send({message:"PIN sent", userID: user._id, verificationMethod})
					}else{
						console.log(result.error_text)
						return res.send({error: result.error_text, verificationMethod});
					}
				}
			})
		}else{
			return res.send({error:"could not send verification."})
		}

    }
    catch(err) {
    	console.log(err)
		return {error:err}
    }
});

// 2FA Verification
router.post('/verify', async (req,res)=>{
	let pin = req.body.pin;
	let userID = req.body.userID;
	let verificationMethod = req.body.verificationMethod;  //0 for Phone and 1 for Email

	let user = await User.findById(userID).exec();
	if(!user) {
		return res.end({error: "User account does not exist"})
	}
	let requestID = user.meta.tokenPasscode;
	//verify PIN
	if(verificationMethod === '1'){

	}
	else if (verificationMethod === "0"){ //phoneVerification
		nexmo.verify.check({requestID, pin}, (err,result)=>{
			if (err){
				//error
				console.log(err);
				res.send({error:err, errorCode: 0})
			}
			else {
				if (result && result.status === '0'){
					res.send({message:"Account Verified"})
				}
				else {
					//wrong pin
					res.send({error:"Wrong PIN", errorCode: 100})
				}
			}
		})
	}


	//ToDo: store user session
});


/*
Get a user by iD
*/
router.get('/find/:userID', (req,res)=>{
	User.findById(req.params.userID).exec().then((user)=>{ //toDO: use .select() to return a relevant information not everything from a user.
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
});



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
	.custom((value,{req})=>{ //custom validator checks if passwords match
		if(value !== req.body.password2){
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
	if(!errors.isEmpty() ){
		return res.send({errors:errors.array()});
	}

	//for development
	electionBodyID = new ObjectID(); //generates random id for electionbody
	birthDate = new Date(); //generate random birthdate for user

	//Hash password
	const saltRounds = 13;
	let hash = bcrypt.hashSync(password,saltRounds);


	//TODO: get meta data for user

	/*
		Format information to DB schema
	*/
	let address = {addressLine, city, state, postalCode,country,stateCode,countryCode};
	let phone = {number,areaCode};
	let demographics = {gender,birthDate,address};
	let electionBody = electionBodyID;


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
		//TODO : store user's session
		//send email to user
		console.log(user.email)
        let mailOptions = {
            from :'Chizoba Amadi',
			to:user.email,
			subject:'Welcome to EasyVote',
			text:"Easyvote is a secure online voting platform"
        }
        transporter.sendMail(mailOptions, (error, info)=>{
            if (error){
            	console.log(error)
            }
            console.log("Message sent")
        })

        res.send({user});
	}).catch((err)=>{
		console.log(err);
		res.send({error:err});
	})
});

/*
list all users in the system
*/
router.get('/list', (req,res)=>{
	User.find({}).exec().then((users)=>{
		res.send({users}) //return users from database

	}).catch((err)=>{ //catch errors
		console.log({error: err}) //print errors to console
	})
});


/*
Edit a  user. A user can only change his email field and Phone Number
*/
router.post('/edit/:userID',[
	check('email')
		.isEmail()
		.withMessage("Email format is not valid")
], (req,res)=>{

	//get fields from request body
	let {email,areaCode,number} = req.body;
	let phone = {areaCode,number};

    //validate the fields
    const errors = validationResult(req); //return validation object with errors
    if(!errors.isEmpty() ){
        return res.send({errors:errors.array()});
    }

    //update user
	User.findByIdAndUpdate(req.params.userID,{$set:{email,phone}}).exec().then((user)=>{
		return res.send({message:"Update Successful", error: ""});
	}).catch((err)=>{
		return res.send({error: err, message:"Update Failed"})
	})

});


/*
Activate a user account
*/
router.get('/deactivate/:userID', (req,res)=>{
    //Find user from database and set active flag to true.
    User.findById(req.params.userID).exec().then((user)=>{
        user.active = true;
        user.save();
        res.send({message: "Account has been deactivated"})
    }).catch((err)=>{
        console.log(err);
        res.send({message: "Could not Activate account", error: err})
    })
});

/*
Deactivate a user account
*/
router.get('/deactivate/:userID', (req,res)=>{
	//Find user from database and set active flag to false.
	User.findById(req.params.userID).exec().then((user)=>{
		user.active = false;
		user.save();
		res.send({message: "Account has been deactivated"})
	}).catch((err)=>{
		console.log(err);
		res.send({message: "Could not deactivate account", error: err})
	})
});

/*
logout
ToDo:
*/

/*
Change Password
ToDo:
*/


module.exports = router;
