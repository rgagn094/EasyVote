const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
Constructor to create a phone number as a subdocument

*/

let PhoneSchema = new Schema({
	number: {
		type: Number
	},
	areaCode: {
		type: Number
	}
})

module.exports = PhoneSchema