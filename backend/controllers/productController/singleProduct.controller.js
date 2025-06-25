import productModel from "../../models/product.model.js";

export const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);
    res.json({
      success: true,
      message: "Product retrieved successfully",
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
