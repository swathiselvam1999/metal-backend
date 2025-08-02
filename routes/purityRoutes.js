import express from "express";
import { addPurity, deletePurity, getAllPurities, getPurity, updatepurity } from "../controllers/purityController.js";

const router = express.Router();

router.post("/", addPurity);
router.get("/", getAllPurities);
router.get("/:id", getPurity);
router.put("/:id", updatepurity);
router.delete("/:id", deletePurity)

export default router;

