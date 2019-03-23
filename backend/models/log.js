const mongoose = require('mongoose');
const Schema = mongoose.Schema;

LogSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    actor_type : {
        type: String,
        required: true,
        default: 'user'
    },

    message: { //end date of voting for election
        type: String,
        required: true,
    },
    failure_resaon: {
        type: String,
        //required: true
    },

    meta: {
        ipAddress: {
            type: String
        },
        actor: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            //required: true
        },
    }
},{
    timestamps: true
});

const Log = mongoose.model('log', LogSchema);
module.exports = Log;
