const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


mongoose.connect("mongodb://127.0.0.1:27017/toDoListDB")

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry. No name has been specified."]
  }
});

const Item = mongoose.model("Item", itemSchema);
const study = new Item({
  name: "Study"
});

const exercise = new Item({
  name: "Exercise"
})

const dishes = new Item({
  name: "Dishes"
})

const defaultItems = [study, exercise, dishes]

Item.insertMany(defaultItems).catch((err)=> {
  console.log(err);
})

app.get("/", function (req, res) {

  let kindOfDay = date.getDate();
  res.render("list", { kindOfDay: kindOfDay, tasks: tasksToDo });
});

app.post("/", function (req, res) {
  task = req.body.newItem;
  tasksToDo.push(task);

  res.redirect("/");
});


app.post("/reset", function(req, res) {
    tasksToDo = [];
    res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
