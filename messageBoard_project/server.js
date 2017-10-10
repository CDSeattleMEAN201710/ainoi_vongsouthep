const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(express.static(path.join(__dirname, "./node_modules")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/messageBoard_project');

const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    message: { type: String, required: true, maxlength: 255 },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
}, { timestamps: true });

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    comment: { type: String, required: true, maxlength: 255 },
}, { timestamps: true });

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

mongoose.Promise = global.Promise;


const Comment = mongoose.model("Comment");
const Message = mongoose.model('Message');


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
    }).populate("comments")
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})