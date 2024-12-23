const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

// The commented code below is for update.

// Fruit.updateOne({
//     name: 'Peach'
// },
// {
//     rating: 10
// }).then(()=>{
//     console.log("Updated successfully!");
//     mongoose.connection.close();
// }).catch(function(err){
//     if(err) {
//         console.log("Error Updating the document: ", err);
//     }
// });

Fruit.deleteOne({_id: '67671a368fd9a1a418284b4f'}).then(()=> {
    console.log("Deleted successfully!");
}).catch((error)=>{
    console.error("Couldn't delete the document!", error);
});
