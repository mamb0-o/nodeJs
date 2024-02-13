const infoData=require('./courses-data.json');

interface Course{
    courseName: string;
    courseNumber: number;
    Description: string;
    Credits: number;
    PreRequisites: string;
}

export const courses: Array<Course> =  infoData ;