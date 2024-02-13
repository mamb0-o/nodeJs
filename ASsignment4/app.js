const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = mongoose.connect("mongodb://127.0.0.1/scheduleAPI");
const ScheduleRouter = express.Router();
const port = process.env.PORT || 3000;
const Course = require("./models/coursesModel");

ScheduleRouter.route("/courses").get((req, res) => {
    Course.find((err, course) => {
        if (err) {
            return res.send(err);
        }
        return res.json(course);
    });
});

app.use("/api", ScheduleRouter);

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});