const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;
const AddressSchema = require("./subdocuments/address.js");
const PhoneSchema = require("./subdocuments/phone.js");


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
		lowercase: true,
	},
	email: {	//User's email address
		type: String,
		required: true,
		unique: true,
		//add regexp validator
	},
	password: {
		type:String,
		required:true,
		minLength: 8
	},
	phone: PhoneSchema,
	electionBody: {	//Array of election bodies that user is verified for
	 	type: ObjectId,	//Array of ElectionBody id's
		ref: 'ElectionBody',
		required: false
	},
	demographics: {
		gender: {
			type: String,
		},
		birthDate: {
			type: Date
		},
		address: AddressSchema,

	},
	meta: {  //Nested object containing other useful information
		isActive: {
			type: Boolean,
			default: true
		},
		dateJoined: {
			type: Date,
			required: true,
			default: Date.now()
		},
		lastAccessTime:{    //Last Date and time the user successfully logged onto the system
			type: Date,
			default: Date.now()
		},
		lastLoginAttempt: { //Last date and time the user attempted to Login (Login may not be successful due to failed password/token)
			type: Date
		},
		lastAccessLocation: {
			type: String,
		},
		ipAddress: {
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
			required: true,
			default: 'user'
		}
}
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
