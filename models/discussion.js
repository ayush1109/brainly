const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussion = new Schema({
    statement: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    answer: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Answer'
        }

})


const Discussion = mongoose.model('Discussion', discussion)
module.exports = Discussion;