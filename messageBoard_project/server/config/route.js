const mongoose = require("mongoose");
const Message = mongoose.model('Message');



module.exports = app => {
    app.get("/:id", function(req, res) {
        Message.findOne({ _id: req.params.id })
            .populate("comments")
            .exec(function(err, post) {
                res.render("message", { messages: messages });
            });
    });

    app.post("/comment_post/:id", function(req, res) {
        Message.findOne({ _id: req.params.id }, function(err, message) {
            var comment = new Comment(req.body);
            comment._message = message._id;
            message.comments.push(comment);
            comment.save(function(err) {
                message.save(function(err) {
                    if (err) { console.log("Error"); } else { res.redirect("/"); }
                })
            })
        })
    })

    app.post('/create', function(req, res) {
        console.log("POST DATA", req.body);
        var message = new Message({ name: req.body.name, message: req.body.message });
        message.save(function(err) {
            if (err) {
                console.log("Error");
            } else {
                console.log("Successfully added message");
                res.redirect('/');

            }
        })
    });

    app.get("/", function(req, res) {
        Message.find({}, function(err, messages) {
            if (err) {
                console.log("Message not found");
            } else {
                console.log("Message successfully found.");
                res.render("index", { messages: messages })
            }
        })
    })
}