// Schema/courseSchema.js

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    semesters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Semesters"   // Model name as string
    }]
});

const Courses = mongoose.model("Courses", courseSchema);
module.exports = Courses;
