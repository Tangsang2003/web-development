const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require("lodash");
const mongoose = require("mongoose");

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// CONNECTION

mongoose.connect("mongodb://127.0.0.1:27017/blogDB");


// DATABASE SCHEMAS

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
});

// DATABASE MODELS

const Post = mongoose.model("Post", postSchema);

// ROUTES

app.get("/", async function (req, res) {
  try {
    let documents = await Post.find({});
    res.render("home", {
      homeStartingContent: homeStartingContent,
      posts: documents,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", async function (req, res) {
  const postTitle = req.body.postTitle;
  const post = new Post({
    title: req.body.postTitle,
    body: req.body.postContent,
  });

  await post.save();
  res.redirect("/");
});

app.get("/posts/:postId", async function (req, res) {

  try {
    const postId = req.params.postId;

    if(!mongoose.Types.ObjectId.isValid(postId)){
      return res.status(400).send("Invalid Post Id!");
    }
    let post = await Post.findOne({_id: postId});
    if (!post) {
      console.error("No post found!");
      return res.status(404).send("No post found!");
    }
    res.render("post", {postTitle: post.title, postContent: post.body});
  } catch(err) {
    console.error(err);
    res.status(500).send("Internal Server Error!");
  }
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
