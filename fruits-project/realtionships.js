const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const newFruit = new Fruit({
    name: 'StrawBerry',
    rating: 10,
    review: "Awesome Fruit!"
});

// newFruit.save().then(()=>{
//     console.log("Strawberry saved!");
//     mongoose.connection.close();
// });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    fav_fruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

// john = new Person({
//     name: 'John Doe',
//     age: 37,
//     fav_fruit: newFruit
// });

// john.save().then(()=>{
//     mongoose.connection.close();
// });
Fruit.findOne({name: 'Apple'}).then((apple)=>{
    return Person.updateOne({name: 'Geeta'}, {fav_fruit: apple}).then(()=>{
        console.log("Added Successfully!");
    }).catch((error)=> {
        console.log(error);
    });
}).catch((error)=> {
    console.log(error);
}).finally(()=>{
    mongoose.connection.close();
});

