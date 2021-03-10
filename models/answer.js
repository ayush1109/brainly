const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answer = new Schema({
    statement: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    stars: {
        type: Number,
        default: 0,
        required: false
    },
    whatIsQuestion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    answeredBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

})


const Answer = mongoose.model('Answer', answer)
module.exports = Answer;