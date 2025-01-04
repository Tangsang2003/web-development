const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


mongoose.connect("mongodb+srv://admin-Tangsang:kb6iOHQTjFVUDnmG@cluster0.xdir0.mongodb.net/toDoListDB");

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

const listSchema = mongoose.Schema({
  name: String,
  items: [itemSchema]
});

const List = new mongoose.model('List', listSchema);

// Item.insertMany(defaultItems).catch((err)=> {
//   console.log(err);
// })

app.get("/", function (req, res) {

  let kindOfDay = date.getDate();
  let tasksToDo = [];
  Item.find().then((documents)=> {
    if (documents.length === 0) {
      return Item.insertMany(defaultItems).catch((err)=> {
        console.log(err);
      }).then(()=> {
        res.redirect("/");
      })
      
    }
    documents.forEach((document)=> {
      tasksToDo.push(document);
      // console.log(document)
    });
    res.render("list", { kindOfDay: kindOfDay, tasks: tasksToDo });
    
  }).catch((err)=> {
    console.error(err);
  });
  // res.render("list", { kindOfDay: kindOfDay, tasks: tasksToDo });
});

app.get("/:customListName", async function(req, res) {
  try {
    const customListName = _.capitalize(req.params.customListName);

    if (customListName === "Favicon.ico") {
      return res.redirect("/");
    }

    let document = await List.findOne({name: customListName});

    if(!document) {
      const list = new List({
        name: customListName,
        items: defaultItems
      });
      await list.save();
      return res.redirect("/"+ customListName);
    } else {
      res.render("list", {kindOfDay: document.name, tasks: document.items});
    }
  } catch(err) {
    console.error("Error fetching/creating list:", err);
    res.status(500).send("An error occurred.");
  }
    
});

app.post("/", async function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item ({
    name: itemName,
  });
  let kindOfDay = date.getDate();
  if (listName === kindOfDay) {
    try {
      await item.save(); // Wait for the save operation to complete
      res.redirect("/"); // Redirect after successful save
  } catch (err) {
      console.log(err); // Handle errors
  }
  } else {
    List.findOne({name: listName}).then(function(doc) {
      doc.items.push(item);
      return doc.save();
    }).then(function(){
      res.redirect("/"+listName);
    }).catch((err)=> {
      console.log(err);
    });
  }
  // item.save();
  // res.redirect("/");

});


app.post("/delete", async function(req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;
  let kindOfDay = date.getDate();
  if (listName === kindOfDay) {
    Item.deleteOne({_id: checkedItemId}).then(()=>{
      res.redirect("/");
    }).catch((err)=> {
      console.log(err);
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}).then(()=>{
      res.redirect("/" + listName);
    }).catch((err)=> {
      console.log(err);
    });
  }

});


app.post("/reset", async function(req, res) {

  try{
    const listName = req.body.listName;
    let kindOfDay = date.getDate();
    
    if (listName === kindOfDay) {
      await Item.deleteMany({});
      res.redirect("/");
    } else {
      await List.updateOne(
        {name: listName}, 
        {$set: {items: []}}
      );
      res.redirect("/" + listName);
    }
  } catch(err) {
      console.error("Error in /reset route:", err);
      res.status(500).send("An error occurred while resetting the list.");
  }

});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
