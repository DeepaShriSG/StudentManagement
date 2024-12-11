import mongoose from "../models/index.js";

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Subject = mongoose.model("subject", subjectSchema);   
export default Subject;