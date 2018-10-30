const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;
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
	electionBodies: [ObjectId],
	// demographics: {

	// },
	// meta: {

	// }



})

const User = mongoose.model('User', UserSchema);
module.exports = User;