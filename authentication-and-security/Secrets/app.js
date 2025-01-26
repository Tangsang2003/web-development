require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

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
  googleId: String, 
  secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// USER MODEL
const User = mongoose.model("User", userSchema);

// Since we are using passport-local-mongoose
// serializeUser and deserializeUser is for creating and destroying the session cookies

passport.use(User.createStrategy());
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

// GOOGLE OAUTH

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
    },
    function (accessToken, refreshToken, profile, cb) {
    //   console.log(profile);
      User.findOrCreate({ googleId: profile.id, username: profile.displayName }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

// ROUTES

app.get("/", (req, res) => {
  res.render("home");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  }
);

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
      return res.redirect("/login?error=Invalid credentials");
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
app.get("/submit", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("login");
  }
});

app.post("/submit", async (req, res) => {
  const submittedSecret = req.body.secret;
  // console.log(req.user)  Passport saves the logged user in the req.
  try{
    if(!req.user) {
      return res.redirect("/login");
    }
    const user = await User.findById(req.user.id);
    if(user) {
      user.secret = submittedSecret;
      await user.save();
      res.redirect("/secrets");
    }
    else {
      return res.status(404).send("User not found!");
    }
  } catch(err) {
    console.error(err);
    res.status(500).json({message: err.message});
  }

});

app.get("/secrets", async (req, res) => {
  const users = await User.find({"secret": {$ne:null}});
  try {
    if(users) {
      return res.render("secrets", {usersWithSecrets: users});
    }
  }catch(err) {
    console.error(err);
    res.status(500).json({message: err.message});
  }
  
});
app.get("/logout", function (req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("Server started at port 3000.");
});
