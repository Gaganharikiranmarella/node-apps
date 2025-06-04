import express from "express";
import registerHandler from "../register.js";
import loginHandler from "../login.js";

const router = express.Router();

router.post("/register", registerHandler);
router.post("/login", loginHandler);

export default router;
