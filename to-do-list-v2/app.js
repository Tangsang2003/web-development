const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


mongoose.connect("mongodb://127.0.0.1:27017/toDoListDB")

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

app.get("/:customListName", function(req, res) {
  const customListName = req.params.customListName;
  List.find({name: customListName}).then((documents)=>{
    if (documents.length === 0) {
      const list = new List({
        name: customListName,
        items: defaultItems
      });
      list.save();
      res.redirect("/"+customListName);
    }
    else {
      res.render("list", { kindOfDay: documents[0].name, tasks: documents[0].items });
    }
  }).catch((err)=> {
    console.log(err);
  });

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

app.post("/delete", function(req, res) {
  const checkedItemId = req.body.checkbox;
  Item.deleteOne({_id: checkedItemId}).then(()=>{
    res.redirect("/");
  }).catch((err)=> {
    console.log(err);
  });
});


app.post("/reset", function(req, res) {
    tasksToDo = [];
    res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
