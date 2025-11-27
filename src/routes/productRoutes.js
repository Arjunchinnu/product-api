import express from "express";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";
const router = express.Router();

router.post("/", auth, role(["admin"]), createProduct);
router.get("/", auth, getProducts);
router.put("/:id", auth, role(["admin"]), updateProduct);
router.delete("/:id", auth, role(["admin"]), deleteProduct);

export default router;
