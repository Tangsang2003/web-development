const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const fs = require("fs");

const apiVarJSONData = fs.readFileSync(
  __dirname + "/../../VARIABLES.json",
  "utf-8"
);
const apiVarData = JSON.parse(apiVarJSONData);

app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
  //   console.log(apiVarData.mailChimpApi);
});

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.inputEmail;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const url =
    "https://us10.api.mailchimp.com/3.0/lists/" + apiVarData.mailChimpListId;
  const options = {
    method: "post",
    auth: "anyString:" + apiVarData.mailChimpApi,
  };
  const jsonData = JSON.stringify(data);
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000.");
});
