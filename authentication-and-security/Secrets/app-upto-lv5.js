require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const secret = process.env.SECRET;

// USER SCHEMA
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

// USER MODEL
const User = mongoose.model("User", userSchema);

// Since we are using passport-local-mongoose
// serializeUser and deserializeUser is for creating and destroying the session cookies

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    if (!user) {
      return res.redirect('/login?error=Invalid credentials');
    }

    req.login(user, (err) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      return res.redirect("/secrets");
    });  
  })(req, res, next);
});

app
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(async (req, res) => {
    try {
      const user = await User.register(
        {
          username: req.body.username,
        },
        req.body.password
      );

      req.login(user, (err) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "Internal Server Error", message: err.message });
        }
        res.redirect("/secrets");
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: "Registration failed!",
        message: err.message,
      });
    }
  });

app.get("/secrets", async (req, res) => {
  if (req.isAuthenticated()) {
    res.render("secrets");
  }
  else {
    res.redirect("/login");
  }
})
app.get("/logout", function(req, res, next) {
  req.logout( (err) => {
    if(err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("Server started at port 3000.");
});
