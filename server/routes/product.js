import express from "express";
const router = express.Router();

import {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.js';

router.get("/products", getAllProducts);
router.get("/product/:id",getProduct);
router.post("/admin/product/create",createProduct);
router.put("/admin/product/:id",updateProduct);
router.delete("/admin/product/:id",deleteProduct);

export default router;