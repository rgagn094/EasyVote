const mongoose = require('mongoose');
const Schema = mongoose.Schema
/*
Schema for User Model
*/

UserSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	otherNames: {
		type: String,
		required:true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type:String,
		required:true
	},
	// electionBodies: {
	// 	type: 
	// },
	// demographics: {

	// },
	// meta: {
		
	// }



})

const User = mongoose.model('User', UserSchema);
module.exports = User;