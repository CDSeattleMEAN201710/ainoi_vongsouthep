const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'codingdojorocks', resave: true, saveUninitialized: true }));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// app.get("/", function(req, res) {
//     // console.log("YO!!")
//     res.render("index")
// });

app.get("/", function(req, res) {
    if (!req.session.results) {
        req.session.results = 0;
    }
    if (!req.session.number) {
        req.session.number = Math.floor(Math.random() * 100 + 1)
    }
    res.render("index", req.session)
});

app.post("/results", function(req, res) {
    let guess = req.body.guess
    if (guess == req.session.number) {
        req.session.results = "Oh wee! We got a WINNER!"
    } else if (guess < req.session.number) {
        req.session.results = "Too Low Joe!"
    } else if (guess > req.session.number) {
        req.session.results = "Too High Afro Jack!"
    }
    res.redirect("/")
});

app.get("/refresh", function(req, res) {
    req.session.number = 0;
    req.session.results = 0;
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})