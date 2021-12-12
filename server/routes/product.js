import express from "express";
const router = express.Router();

import { getAllProducts } from '../controllers/product.js';

router.get("/", getAllProducts);

export default router;