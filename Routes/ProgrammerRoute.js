import express from "express";
import { CreateProgrammer, deleteProgrammer, getAProgrammer, getAllProgrammers, updateProgrammer } from "../Controllers/programmerController.js";

const router = express.Router();

//routes
router.post("/", CreateProgrammer)
router.get("/", getAllProgrammers)
router.get("/:id", getAProgrammer)
router.patch("/:id", updateProgrammer)
router.delete("/:id", deleteProgrammer)
export default router