const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Tasks lists
let tasksToDo = [];

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
