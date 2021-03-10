const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const question = new Schema({
    statement: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    tags: [
        {
        type: String,
        required: false
        }
    ],
    isAnswered: {
        type: Boolean,
        default: false,
    },
    askedBy: {
            type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
        }

})


const Question = mongoose.model('Question', question)
module.exports = Question;