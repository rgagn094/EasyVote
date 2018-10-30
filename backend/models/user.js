const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*
Schema for User Model
*/

UserSchema = new Schema({
	firstName: {	//User's legal first name
		type: String,
		required: true
	},
	lastName: {	//User's legal last name
		type: String,
		required: true
	},
	otherNames: {	//Any other legal names
		type: String,
		required:false	//Set to false as some indivuals only have first and last names
	},
	email: {	//User's email address
		type: String,
		required: true
	},
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

	}

})

const User = mongoose.model('User', UserSchema);
module.exports = User;
