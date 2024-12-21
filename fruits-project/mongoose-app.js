const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 5,
    review: "An apple a day keeps a doctor away."
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model('person', personSchema);

const person = new Person({
    name: "Jane Doe",
    age: 30
});

// person.save().then(function(){
//     console.log(`Person named ${person.name} has beeen saved to the database.`);
// });

const ram = {
    name: 'Ram', 
    age: 19
};

const hari = {
    name: 'Hari', 
    age: 24
};

const geeta = {
    name: 'Geeta',
    age: 23
};

// Person.insertMany([ram, hari, geeta]).then(()=>{
//     console.log("Successfully saved!");
//     mongoose.connection.close();
// });

// Find and log all documents
Person.find()
  .then((people) => {
    console.log('All people names:');
    people.forEach(function(person){
        console.log(person.name);
    }) // Logs the array of documents
    mongoose.connection.close(); // Close the connection
  })
  .catch((err) => {
    console.error('Error finding documents:', err);
    mongoose.connection.close();
  });