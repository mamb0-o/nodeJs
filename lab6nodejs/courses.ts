interface Courses{
    courseName: string;
    courseNumber: number;
    courseDate: string;
}

let course1: Courses ={
    courseName: "advanced web applications",
    courseNumber:4669,
    courseDate: "Monday 6:00pm",
};

let course2: Courses ={
    courseName: "web development with Node.js",
    courseNumber:3012,
    courseDate: "Saturday 3:00pm",
};

let course3: Courses ={
    courseName: "stats for Data Analysis",
    courseNumber:1060,
    courseDate: "Thursday 6:30pm",
};

document.getElementById("C1name").innerHTML=course1.courseName;
document.getElementById("C1number").innerHTML=course1.courseNumber.toString();
document.getElementById("C1date").innerHTML=course1.courseDate;

document.getElementById("C2name").innerHTML=course2.courseName;
document.getElementById("C2number").innerHTML=course2.courseNumber.toString();
document.getElementById("C2date").innerHTML=course2.courseDate;

document.getElementById("C3name").innerHTML=course3.courseName;
document.getElementById("C3number").innerHTML=course3.courseNumber.toString();
document.getElementById("C3date").innerHTML=course3.courseDate;
