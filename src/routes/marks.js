import express from "express"
import marksController from "../controllers/marks.js"
import reportGeneration from "../common/reportGeneration.js"


const router = express.Router();

router.get("/",marksController.getMarks);
router.post("/create",marksController.createMarks);
router.post("/:id",reportGeneration.reportCardGenerator);

export default router;

