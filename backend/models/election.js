const mongoose = require('mongoose');
const Schema = mongoose.Schema;

ElectionSchema = new Schema({
  title: {  //Title of the election e.g. 2016 Presidential Election
    type: String,
    required: true
  },
  candidates: [{//List of candidate documents participating in election
      candidateID: {  //Reference to the user that cast the vote
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true
      },
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
          //TODO
      },
      decription: {
          type: String,
      },
      party: {
          type: String
      }

  }],
  active: { //refuse delete if election is active
      type: Boolean,
      default: true
  },
  startDate: {  //start date of voting for election
    type: Date,
    required: true
  },
  expiryDate: { //end date of voting for election
    type: Date,
    required: true,
    validate: [
      function(value){  //Function to check if end date is later than start date
        return this.startDate <= value;
      }]
  },
  meta: {
    description: {  //Description of election
      type: String
    },
    electionBody: { //Reference to the election body hosting election
      type: Schema.Types.ObjectId,
      ref: 'ElectionBody',
      required: true
    },
  },
});

const Election = mongoose.model('Election', ElectionSchema);
module.exports = Election;
