const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please specify a name!"]
    },
    rating: {
        type: Number,
        required: [true],
        min: 0,
        max: 5
    },
    review: {
        type: String,
        required: false
    }
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const peach = new Fruit({
    name: "Peach",
    rating: 4,
    review: "Good"

});

peach.save().then(()=>{
    mongoose.connection.close();
});