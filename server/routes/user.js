import express from "express";
const router = express.Router();

import {
    loginUser,
    registerUser
} from '../controllers/user.js';

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

export default router;