import express from "express";
const router = express.Router();

import {
    loginUser,
    registerUser
} from '../controllers/user.js';

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
// http://localhost:7000/api/v1/admin/product/create

export default router;