const mongoose = require("mongoose")
const User = mongoose.model("User")


module.exports = {

    get_all: (req, res) => {
        User.find({})
            .then(users => res.json(users))
            .catch(err => {
                console.log("User.find ERROR", err)
                res.status(500).json(err)
            })
    },

    login: (req, res) => {
        User.findOne({ name: req.body.name })
            .then(user => {
                if (user) {
                    req.session.user = user
                    res.json(true)
                } else {
                    let new_user = new User(req.body)

                    new_user.save()
                        .then(() => {
                            req.session.user = new_user
                            res.json(true)
                        })
                        .catch(err => {
                            console.log("User save ERROR", err)
                            res.status(500).json(err)
                        })
                }
            })
    },

    am_i_logged_in: (req, res) => {
        if (req.session.user) {
            res.json(req.session.user)
        } else {
            res.status(401).json(false)
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.redirect("/")
    },

    add: (req, res) => {
        res.redirect("/add")
    },

    add_question: (req, res) => {
        // Question.findOne({ question: req.body.question, answer: req.body.answwer, fake1: req.body.fake1, fake2: req.body.fake2 })
        //     .then(question => {
        //         if (question) {
        //             req.session.question = question
        //             res.json(true)
        //         } else {
        let new_question = new Question({ question: req.body.question, answer: req.body.answwer, fake1: req.body.fake1, fake2: req.body.fake2 })

        new_question.save()
            .then(() => {
                req.session.question = new_question
                res.json(true)
            })
            .catch(err => {
                console.log("Question save ERROR", err)
                res.status(500).json(err)
            })
            // }
            // })
    },
}