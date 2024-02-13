const express = require('express');
const { courses } = require('./courses');

let app = express();

function createTable() {
    const courseListItems = courses.map(c => (`
    <tr style="background-color:grey;">
    <th>  Course Name-ID <th>
    <th>  Description-Credits <th>
    <th>  Prerequisites <th>
    </tr>
    <tr style="background-color:purple;">
    <td>${c.courseName}</td>
    <td>${c.courseNumber}</td>
    <td>${c.Description}</td>
    <td>${c.Credits}</td>
    <td>${c.PreRequisites}</td></tr>`));

    return courseListItems;
}

app.get('/', (req, res) => {
    res.send('<table>' + createTable() + '</table>');
});

app.listen(8081);