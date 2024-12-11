import subjectModel from "../models/subject.js"

const createSubject = async (req,res) => {
    try {
        let sub = await subjectModel.findOne({name:req.body.name});
        if(!sub){
           await subjectModel.create(req.body);
           res.status(201).send({
            message:"subject created"
           })
        }else{
            res.status(400).send({
                message:"Subject exists"
            })
        }
    } catch (error) {

        res.status(500).send({
            message:"Internal server error",
            error:error.message
        })
    }
}

const getSubject = async(req,res)=>{
    try {
         let sub = await subjectModel.find();
         if(sub){
            res.status(200).send({
                message:"subject data",
                data:sub
            })
         }else{
            res.status(400).send({
                message:"Invalid data"
            })
         }
    } catch (error) {
        res.status(500).send({
            message:"Internal server error",
            error:error.message
        }) 
    }
}


export default {
    createSubject,
    getSubject
}