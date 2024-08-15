const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;



