const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// To parse data that comes from the HTML form,  we use urlencoded.
// also setting extended options to be true, we allow to post nested objects.
// Always use the code below while using body-parser.
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
  res.send("The result of the calculation is: " + result);
});

app.listen(port, () => {
  console.log("Started server on port 3000. ");
});
