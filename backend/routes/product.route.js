import express from "express";

// controllers
import { addProduct } from "../controllers/productController/addProduct.controller.js";
import { listProducts } from "../controllers/productController/listProducts.controller.js";
import { removeProduct } from "../controllers/productController/removeProduct.controller.js";
import { singleProduct } from "../controllers/productController/singleProduct.controller.js";

// middleware
import upload from "../middleware/multer.middleware.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);

export default productRouter;
