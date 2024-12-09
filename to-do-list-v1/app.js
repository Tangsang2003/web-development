const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Tasks lists
tasksToDo = [];

app.get("/", function (req, res) {
  //   const dayNames = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  //   var today = new Date();
  //   var todayNum = today.getDay();

  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const kindOfDay = today.toLocaleDateString("en-EN", options);

  //   var day = dayNames[todayNum];
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
