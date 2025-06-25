import { v2 as cloudinary } from "cloudinary";

// Modes
import productModel from "../../models/product.model.js";

export const addProduct = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message:
          "Cannot destructure property 'name' of 'req.body' as it is undefined.",
      });
    }
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      image: imagesUrl,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: Boolean === "true" ? true : false,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    console.log(productData);

    res.json({ success: true, message: "Product Added Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
