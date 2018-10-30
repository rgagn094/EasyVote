const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;
const AddressSchema = require("./subdocuments/address.js");
const PhoneSchema = require("./subdocuments/phone.js");
/*
Schema for User Model
*/

UserSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		lowercase: true,
	},
	lastName: {
		type: String,
		required: true,
		lowercase: true,
	},
	otherNames: {
		type: String,
		lowercase: true,
	},
	email: { //unique field
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





