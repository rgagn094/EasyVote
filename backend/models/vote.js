const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Schema for a vote
*/
VoteSchema = new Schema({
  voter: {  //Full legal name of voter, I'm worried this may present anonymity concerns
    type: String,
    required: true
  },
  geoLocation: {  //Physical geo location vote was made (security)
    type: String,
    required: true
  },
  ipAddress: { //IP address at the point of vote (security)
    type: String,
    required: true
  },
  voterID: {  //Reference to the user that cast the vote
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  demographics: {
    province: { //province of the user at the time of vote
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

})

const Vote = mongoose.model('Vote', VoteSchema);
module.exports = Vote;
