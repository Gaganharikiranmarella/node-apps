import express from "express";
import registerHandler from "../controllers/register.js";
import loginHandler from "../controllers/login.js";

const router = express.Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);

export default router;
