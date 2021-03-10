const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const report = new Schema({
    reason: {
        type: String,
        required: false
    },
    reportedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reportedOnQuestion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    reportedOnAnswer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }

})


const Report = mongoose.model('Report', report)
module.exports = Report;