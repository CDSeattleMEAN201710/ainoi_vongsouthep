const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
}, { timestamp: true })

mongoose.model("User", UserSchema)

// const QuestionSchema = mongoose.Schema({
//     question: { type: String, required: true, minlength: 15 },
//     answer: { type: String, required: true, minlength: 15 },
//     fake1: { type: String, required: true, minlength: 15 },
//     fake2: { type: String, required: true, minleng: 15 },
// }, { timestamp: true })

// mongoose.model("Question", QuestionSchema)