import { Router } from "express";
import { createPractical, getPracticals } from "../Controllers/practicalController.js";
const router = Router();

router.post("/create", createPractical);
router.get("/", getPracticals);

export default router;
