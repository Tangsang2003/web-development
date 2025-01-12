const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", articleSchema);

// REQUESTS TARGETING ALL ARTICLES

app.route("/articles")
  .get(async (req, res) => {
    try {
      let articles = await Article.find({});
      res.send(articles);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error!");
    }
  })
  .post(async (req, res) => {
    try {
      let article = new Article({
        title: req.body.title,
        content: req.body.content,
      });
      await article.save();
      res.send("Post saved successfully!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error!");
    }
  })
  .delete(async function (req, res) {
    try {
      await Article.deleteMany({});
      res.status(200).send("All articles deleted successfully!");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error!");
    }
  });


// REQUESTS TARGETING SPECIFIC ARTICLES

app.route("/articles/:title")
  .get( async (req, res)=> {
    try {
        const article = await Article.findOne({title: req.params.title});
        if (article) {
            res.send(article);
        } else {
            res.send("No article found with that title!");
        }
    } catch(err) {
        console.error(err);
        res.status(500).send("Internal Server Error!");
    }
    
  })
  .put( async (req, res) => {
    try {
        const updatedArticle = await Article.findOneAndReplace(
            {title: req.params.title},
            {
                title: req.body.title,
                content: req.body.content
            },
            { new: true}
        );
        if (!updatedArticle) {
            return res.status(404).json({ error: "Article Not Found! "});
        }
        else {
            res.status(200).json({message: "Successfully updated!", updatedArticle});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Internal Server Error!"});
    }
  })
  .patch( async(req, res) => {
    try{
        const updatedArticle = await Article.findOneAndUpdate(
            { title: req.params.title },
            { $set: req.body }, 
            { new: true, runValidators: true }
        );
        if (!updatedArticle) {
            return res.status(404).json({ message: "No article found"});
        }
        else {
            res.status(200).json({ message: "Article Updated Successfully! ", updatedArticle });
        }

    }catch(err) {
        console.error(err);
        res.status(500).json({error: "Internal Server Error!", message: err.message});
    }
  })
  .delete( async (req, res) => {
    try {
        const article = await Article.findOneAndDelete({title: req.params.title});
        if (!article) {
            return res.status(400).json({error: "Article not found!"});
        }
        res.status(200).json({ message: "Post deleted successfully! "}); 
    } catch (err) {
        console.error(err);
        res.status(500).json(
            { 
                error: "Internal Server Error!",
                message: err.message   
            }
        )
    }
  });


app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
