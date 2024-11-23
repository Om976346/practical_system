import { Router } from "express";
import { createSubject, getSubjects } from "../Controllers/subjectController.js";
const router = Router();

router.post("/create", createSubject);
router.get("/", getSubjects);

export default router;
