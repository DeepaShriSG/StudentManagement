import express from "express"
import SubjectController from "../controllers/subject.js"


const router = express.Router();

router.get("/",SubjectController.getSubject);
router.post("/create",SubjectController.createSubject);


export default router;

