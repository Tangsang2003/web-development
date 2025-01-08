const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);


app.get("/articles", async (req, res) => {
    try{
        let articles = await Article.find({});
        res.send(articles);
    } catch(error) {
        console.error(error);
        res.status(500).send("Internal Server Error!");
    }
});


app.post("/articles", async(req, res)=> {
    try {
        let article = new Article({
            title: req.body.title,
            content: req.body.content
        })
        await article.save();
        res.send("Post saved successfully!");
    } catch(error){
        console.error(error);
        res.status(500).send("Internal Server Error!");
    }
});


app.listen(3000, ()=> {
    console.log("Server is running on port 3000.");
});



