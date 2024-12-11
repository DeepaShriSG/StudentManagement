import marksModel from "../models/mark.js"
import studentModel from "../models/student.js"
import subjectModel from "../models/subject.js"

const createMarks = async (req,res) => {
    try {
         let marks = new marksModel(req.body);
         await marks.save();
         res.status(201).json({ message: "Marks created successfully", data: marks });
    } catch (error) {
        res.status(400).send({
            message:error.message
        })
    }
}

const getMarks = async(req,res)=>{
    try {
        const marks = await marksModel.find()
        .populate("student", "name") 
        .populate("subject", "name");   
        res.status(200).json({ message: "Marks fetched successfully", data: marks });
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(typeof path, path);

    }
}



export default {
    createMarks,
    getMarks
}