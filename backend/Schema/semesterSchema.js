// Schema/semesterSchema.js

const mongoose = require("mongoose");

const semestersSchema = new mongoose.Schema({
    semester: {
        type: String,
        required: true
    },
    pyqs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pyqs"   // Model name as string
    }]
});

const Semesters = mongoose.model("Semesters", semestersSchema);
module.exports = Semesters;
