import { Router } from "express";
import { getProducts, createProduct } from "../controllers/ProductControllers.js";
import { upload } from "../middleware/uploads.js";

const router = Router();

router.get("/", getProducts);
router.post("/products", upload.single("image"), createProduct);

export default router;