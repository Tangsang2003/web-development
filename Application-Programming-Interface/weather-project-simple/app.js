const express = require("express");
const port = 3000;

const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.city;
  const apiKey = "USE_YOUR_OWN_API_KEY_HERE";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appId=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (d) {
      const weatherData = JSON.parse(d);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const iconURL = "https://openweathermap.org/img/wn/";
      const icon = iconURL + weatherData.weather[0].icon + "@2x.png";
      console.log(temp);
      console.log(weatherDescription);
      res.write(
        "<p>The weather is currently: " + weatherDescription + "</p>"
      );
      res.write("<h1>The temperature in " + query + "is: " + temp + " degrees Celsius.</h1>");
      res.write("<img src='" + icon + "'>");
      res.send();
    });
  });
});

app.listen(port, function () {
  console.log("Server is running on port 3000.");
});
