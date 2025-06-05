import express from "express";
import { getCart, updateCart } from "../controllers/cart.js";

const router = express.Router();

router.get("/:userId", getCart);
router.post("/", updateCart);

export default router;
