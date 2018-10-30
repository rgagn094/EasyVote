const mongoose = require('mongoose');
<<<<<<< HEAD
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;
const AddressSchema = require("./subdocuments/address.js");
const PhoneSchema = require("./subdocuments/phone.js");
=======
const Schema = mongoose.Schema;
>>>>>>> c3a8293b4c5f3f6574fd62ef6a32b9f18bd87372
/*
Schema for User Model
*/

UserSchema = new Schema({
	firstName: {	//User's legal first name
		type: String,
		required: true,
		lowercase: true,
	},
	lastName: {	//User's legal last name
		type: String,
		required: true,
		lowercase: true,
	},
	otherNames: {	//Any other legal names
		type: String,
<<<<<<< HEAD
		lowercase: true,
	},
	email: { //unique field
=======
		required:false	//Set to false as some indivuals only have first and last names
	},
	email: {	//User's email address
>>>>>>> c3a8293b4c5f3f6574fd62ef6a32b9f18bd87372
		type: String,
		required: true,
		unique: true,
		//add regexp validator
	},
<<<<<<< HEAD
	password: {
		type:String,
		required:true,
		minLength: 8
	},
	phone: phoneSchema,
	electionBodies: [ObjectId],
	demographics: {
		gender: {
			type: String,
		},
		birthDate: {
			type: Date
		},
		address: [AddressSchema],

	},
	meta: {  //Nested object containing other useful information
		isActive: {
			type: Boolean,
			default: true
		},
		dateJoined: {
			type: Date,
			required: true
		},
		lastAccessTime:{
			type: Date,
		},
		lastAccessLocation: {
			type: String,
		},
		ipAddress; {
			type: String
		},
		tokenPasscode: {
			type: String,
		},
		tokenExpiry: {
			type: Date
		},
		role : {
			type: String,
			enum: ['superuser', 'siteAdmin', 'electionAdmin', 'user'],
			required: true
		}
})

const User = mongoose.model('User', UserSchema);
module.exports = User;


=======
	password: {	//User's password(hashed)
		type: String,
		required: true
	},
	electionBodies: {	//Array of election bodies that user is verified for
	 	type: [Schema.Types.ObjectId],	//Array of ElectionBody id's
		ref: 'ElectionBody',
		required: false
	},
	demographics: { //Map of demographic key-string pairs
		type: Map,
		of: String
 	},
	meta: {
		isActive: {	//status of user on application
			type: Boolean,
			default: true;
		},
		role: {		//Role/Privileges of the user
			type: String,
			enum: ['superUser', 'siteAdmin', 'electionAdmin', 'user'],
			default: 'user'
		},
		ipAddress: {	//last IP address user access application from
			type: String
		},
		tokenPasscode: {	//Field used for 2fa
			type: String
		},
		dateJoined: {	//Date user joined application
			type: Date,
			default: Date.now
		},
		lastAccess: {	//date user last access application
			type: Date
		}
>>>>>>> c3a8293b4c5f3f6574fd62ef6a32b9f18bd87372

	}


<<<<<<< HEAD
=======
const User = mongoose.model('User', UserSchema);
module.exports = User;
>>>>>>> c3a8293b4c5f3f6574fd62ef6a32b9f18bd87372
