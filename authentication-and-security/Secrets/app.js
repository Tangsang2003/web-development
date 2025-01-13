const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res)=> {
    res.render("login");
});

app.get("/register", (req, res)=> {
    res.render('register');
});


app.listen(3000, function(){
    console.log("Server started at port 3000.");
});