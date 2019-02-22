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
  dataPoints: {   // Array of numbers to be plotted in chart
    type: [Number],
    required: true
  }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
