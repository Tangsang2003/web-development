require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const md5 = require("md5");

const app = express();
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const secret = process.env.SECRET;

// USER SCHEMA
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});


// USER MODEL
const User = mongoose.model("User", userSchema);

// ROUTES

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async(req, res)=> {
    const username = req.body.username;
    const password = md5(req.body.password);
    try {
        const user = await User.findOne({email: username});
        if (user) {
            if (user.password === password) {
                res.render("secrets");
            }
            else {
                res.status(401).json({error: "Username and Passwords do not match!"});
            }
        }
        else {
            res.status(401).json({error: "User not found! Please register first."});
        }

    }catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
});

app.route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(async (req, res) => {
    try {
      const newUser = new User({
        email: req.body.username,
        password: md5(req.body.password),
      });
      await newUser.save();
      res.render("secrets");

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error! "});
    }
  });

// app.get("/register", (req, res)=> {
//     res.render('register');
// });

app.listen(3000, function () {
  console.log("Server started at port 3000.");
});
