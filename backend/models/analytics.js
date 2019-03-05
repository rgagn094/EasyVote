const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Schema for analytics data
*/

AnalyticsSchema = new Schema({
  description: {    // Short string describing data
    type: String,
    required: true
  },
  electionID: {     // Reference to the election which the data represents
    type: Schema.Types.ObjectId,
    ref: 'election',
    required: true
  },
  dataPoints: {   // Array of numbers to be plotted in chart
    type: [Number],
    required: true
  },
  dataLabels: {
    type: [String],
    required: true
  },
  tag: {        // Short tag to identify type of analytic
    type: String,
    enum: ['count', 'gender', 'avgAge', 'ageGroup', 'province'],
    required: true
  }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
