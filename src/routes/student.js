import express from "express"
import StudentController from "../controllers/student.js"


const router = express.Router();

router.get("/",StudentController.getStudent);
router.post("/create",StudentController.createStudent);
router.put("/edit/:id",StudentController.editStudent);
router.delete("/:id",StudentController.deleteStudent);


export default router;

