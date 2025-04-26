// server.js

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Courses = require("./Schema/courseSchema"); 
const Semesters = require("./Schema/semesterSchema");
const Pyqs = require("./Schema/PyqSchema");

const url = "mongodb+srv://coderArmy9:12345%40abcde@codercluster.wrccohi.mongodb.net/pyqDB"; 

async function init() {
    try {
        await mongoose.connect(url);
        console.log("DB connected ✅");

        app.listen(5000, () => {
            console.log("Server running at 5000 🚀");
        });
    } catch (err) {
        console.error("Could not connect ❌", err);
    }
}

init();

// Route to insert data
app.get('/', async (req, res) => {
    console.log("This is a GET request");
    try {
        // Step 1: Create Pyq
        const newPyq = new Pyqs({
            year: "2023",
            sub: "PS",
            type: "Mid",
            pdfLink: "https://example.com/sample.pdf"  // optional if you want
        } ,
    {

    });
        await newPyq.save();
        console.log("Pyq saved ✅");

        // Step 2: Create Semester and connect Pyq
        const newSemester = new Semesters({
            semester: "Semester2",
            pyqs: [newPyq._id]
        });
        await newSemester.save();
        console.log("Semester saved ✅");

        // Step 3: Create Course and connect Semester
        const newCourse = new Courses({
            course: "MCA",
            semesters: [newSemester._id]
        });
        await newCourse.save();
        console.log("Course saved ✅");

        res.json({
            success: true,
            message: "Data inserted successfully!",
            data: newCourse
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        });
    }
});
