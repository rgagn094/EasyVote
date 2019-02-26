const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var candidateSchema = new Schema({

    firstName: {//Candidate's legal first name
        type: String,
        required: true,
        lowercase: true,
    },
    lastName: {//Candidate's legal last name
        type: String,
        required: true,
        lowercase: true,
    },
    image: {	//Any other legal names
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    party: {
        type: String
    }
}, {
    timestamps: true
});

ElectionSchema = new Schema({
    title: {  //Title of the election e.g. 2016 Presidential Election
        type: String,
        required: true
    },
    candidates: [candidateSchema],
    active: { //refuse delete if election is active
        type: Boolean,
        default: true
    },
    startDate: {  //start date of voting for election
        type: Date,
        //required: true,
        default: Date.now()
    },
    endDate: { //end date of voting for election
        type: Date,
        //required: true,
        default: Date.now(),
        validate: [
            function (value) {  //Function to check if end date is later than start date
                return this.startDate < value;
            }]
    },
    meta: {
        description: {  //Description of election
            type: String
        },
        electionBody: { //Reference to the election body hosting election
            type: Schema.Types.ObjectId,
            ref: 'ElectionBody',
            required: false
        },
    }
},{
        timestamps: true
});

const Election = mongoose.model('election', ElectionSchema);
module.exports = Election;
