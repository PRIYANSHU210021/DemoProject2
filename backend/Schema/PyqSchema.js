// Schema/PyqSchema.js

const mongoose = require("mongoose");

const PyqSchema = new mongoose.Schema({
    year: String,
    sub: String,
    type: String,
    pdfLink: String
});

const Pyqs = mongoose.model("Pyqs", PyqSchema);
module.exports = Pyqs;
