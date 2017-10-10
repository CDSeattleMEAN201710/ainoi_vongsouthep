const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/quotingDojo');
const QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    date: { "type": Date, "default": Date.now }
})
mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote')

mongoose.Promise = global.Promise;

app.get("/", function(req, res) {
    res.render("index");
})

app.post('/add', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({ name: req.body.name, quote: req.body.quote });
    quote.save(function(err) {
        if (err) {
            console.log("Something went wrong with quote");
        } else {
            console.log("Successfully added a quote!");
            res.redirect("/");
        }
    })
})
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if (err) {
            console.log("Quote not found");
        } else {
            console.log("Quote successfully found!");
            res.render("quotes", { quotes: quotes })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})