import express from "express";
import { getDestinations, getDestination, createDestination } from "../controllers/destination.js";
const router = express.Router();

router.get("/", getDestinations);
router.get("/:id", getDestination);

router.post("/", createDestination);

export default router;