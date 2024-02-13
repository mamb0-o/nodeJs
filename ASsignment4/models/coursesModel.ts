const mongoose = require("mongoose");

const { Schema } = mongoose;

const coursesModel = new Schema({
    courseName: { type: String },
    courseNumber: { type: Number },
    Description: { type: String },
    Credits: { type: Number },
    PreRequisites: { type: String },
});

module.exports = mongoose.model("Course", coursesModel);