const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const user = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    noOfQuestions: {
        type: Number,
        default: 0,
        required: false
    },
    noOfAnswers: {
        type: Number,
        default: 0,
        required: false
    },
    questionsAsked: [
        {
            type: mongoose.Schema.Types.ObjectId,
                ref: 'Question'
        }
    ],
    answersGiven: [
        {
            type: mongoose.Schema.Types.ObjectId,
                ref: 'Answer'
        }
    ]

})

user.plugin(passportLocalMongoose);

const User = mongoose.model('User', user)
module.exports = User;