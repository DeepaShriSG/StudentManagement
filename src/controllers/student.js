import StudentModel from "../models/student.js";

const createStudent = async (req, res) => {
  try {
    let newstudent = {
      name: req.body.name,
      age: req.body.age,
      rollNumber: req.body.rollNumber,
    };
    let existingStd = await StudentModel.findOne({rollNumber:newstudent.rollNumber});

    if (!existingStd) {
      await StudentModel.create(req.body);
      res.status(201).send({
        message: `${newstudent.name} created successfully`,
      });
    } else {
      res.status(400).send({
        message: `${newstudent.name} with ${newstudent.rollNumber} already exists`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
    });
    console.log(error);
  }
};

const getStudent = async (req, res) => {
  try {
    let student = await StudentModel.find();
    res.status(200).send({
      message: "All student details",
      student,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
    });
    console.log(error);
  }
};

const editStudent = async (req, res) => {
  try {
    let params = req.body.id;
    let student = await StudentModel.findOne(params);
    if (student) {
      const { name, age, rollNumber } = req.body;

      if (name) student.name = name;
      if (age) student.age = age;
      if (rollNumber) student.rollNumber = rollNumber;

      await student.save();

      res.status(200).send({
        message: "All student details",
        student,
      });
    } else {
      res.status(400).send({
        message: "Invalid data",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
    });
    console.log(error);
  }
};

const deleteStudent = async (req, res) => {
  try {
    let params = req.body.id;
    let student = await StudentModel.findOne(params);
    if(!student){
      res.status(400).send({
        message:"Invalid data"
      })
    }else{
      await student.remove();
      res.status(200).send({
        message:"Student data deleted"
      })
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
    });
    console.log(error);
  }
};

export default {
  createStudent,
  getStudent,
  editStudent,
  deleteStudent
};
