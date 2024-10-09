import express from "express";
import { addVenture, getVentures } from "../controllers/venture.controller.js";

const router = express.Router();

router.get("/", getVentures);
router.post("/", addVenture);

export default router;