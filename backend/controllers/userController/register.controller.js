import bcrypt from "bcrypt";
import validator from "validator";

// Models
import userModel from "../../models/user.model.js";

// helper functions
import { createToken } from "../../helperFunctions/auth.helper.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Required fields are not provided.",
      });
    }

    // Check whether the user with the given email already exists
    const emailExists = await userModel.findOne({ email });

    if (emailExists) {
      return res
        .status(400)
        .json({ success: false, message: "Email already in use" });
    }

    // Validating email format & strong password
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Minimum password length is 8 characters!",
      });
    }

    // Hasing user password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store in the database
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      createdAt: Date.now(),
    });

    const user = await newUser.save();

    // create jwt token for the user
    const token = createToken(user._id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
