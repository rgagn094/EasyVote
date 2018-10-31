const mongoose = require("mongoose");
const Schema = mongoose.Schema

/*
Constructor to create an address as a subdocument

*/

let AddressSchema = new Schema({
	addressLine: {
		type: String
	},
	city: {
		type: String,
	},
	state: {
		type: String,
	},
	postalCode: {
		type: String,
	},
	country: {
		type: String
	},
	stateCode: { //for faster lookup
		type: String,
	},
	countryCode: { //for faster lookup
		type: String
	}

})
module.exports = AddressSchema
