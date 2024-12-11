import express from "express"
import studentRoute from "./student.js"
import subjectRoute from "./subject.js"
import marksRoute from "./marks.js"


const route = express.Router();

route.use("/student",studentRoute);
route.use("/subject",subjectRoute);
route.use("/marks",marksRoute)



export default route;

