const mongoose = require("mongoose");
const Schema = require("schema");

/*
Constructor to create an address as a subdocument

*/

let AddressSchema = new Schema({
	addressLine: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true
	},
	postalCode: {
		type: String,
	},
	country: {
		type: String,
		required: true
	},
	stateCode: {. //for faster lookup
		type: String,
		required: true
	}.
	countryCode: { //for faster lookup
		type: String,
		required: true,
	}

})

