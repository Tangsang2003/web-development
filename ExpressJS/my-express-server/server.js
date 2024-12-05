const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: example@gmail.com");
});

app.get("/about", function (req, res) {
  res.send(
    "Hello! My name is Tangsang Chongbang. I like food, and doing exercise and stuffs. Hehe. Bye!"
  );
});

app.get("/hobbies", function (req, res) {
  res.send("Hey Jude! I like biking and guitar. I also like raising chickens.");
});

app.listen(port, function () {
  console.log("Server started on port 3000!");
});
