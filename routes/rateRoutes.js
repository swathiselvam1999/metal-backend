import express from "express";
import { addRate, getRates, getLatestRate } from "../controllers/rateController.js";
const router = express.Router();

router.get("/latest", getLatestRate)
router.post("/", addRate);
router.get("/", getRates);

export default router;