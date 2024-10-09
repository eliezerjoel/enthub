import express from "express";
import { addOrganisation, getOrganisation } from "../controllers/organisations.controller.js";

const router = express.Router();

router.get("/", getOrganisation);
router.post("/", addOrganisation);

export default router;