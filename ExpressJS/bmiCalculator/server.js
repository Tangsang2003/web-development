const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight / Math.pow(height, 2);
  res.send("Your BMI is: " + bmi.toFixed(2));
});

app.listen(port, function () {
  console.log("Started server on port 3000.");
});
