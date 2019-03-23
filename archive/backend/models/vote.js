const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Schema for a vote
*/
VoteSchema = new Schema({
  hashedID: {  //hashed user ID of voter
    type: String,
    required: true,
    unique: true
  },
  authenticated: {
    type: Boolean,
    required: true,
    default: false
  },
  candidate: { //Candidate the voter has chosen
    type: String,
    required: true
  },
  geoLocation: {  //Physical coordinates vote was made (security)
    type: [Number],
    required: true
  },
  country: {
    type: String,
    required: true
  },
  ipAddress: { //IP address at the point of vote (security)
    type: String,
    required: true
  },
  electionID: {  //Reference to the election that the vote was cast for
    type: Schema.Types.ObjectId,
    ref: 'election',
    required: true
  },
  demographics: {
    city: { //province of the user at the time of vote
      type: String,
      required: true
    },
    age: {  //Age of voter at time of vote
      type: Number,
      required: true
    },
    gender:{  //Geneder of voter
      type: String,
      enum: ['male', 'female', 'other'],
      required: true
    }
  }

});

const Vote = mongoose.model('Vote', VoteSchema);
module.exports = Vote;
