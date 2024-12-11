import mongoose from "../models/index.js";
import Student from "../models/student.js"
import Subject from "../models/subject.js"

const marksSchema = new mongoose.Schema({

    marks: {
        type: Number,
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "student",
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "subject",
        required: true
    },
})

const Marks = mongoose.model("marks", marksSchema);
export default Marks;