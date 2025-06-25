import validator from "validator";
import bcrypt from "bcrypt";

// Model
import userModel from "../../models/user.model.js";

// helper functions
import { createToken } from "../../helperFunctions/auth.helper.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email or Password is missing",
      });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    const user = await userModel.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: false,
        message: "Email or Password is incorrect",
      });
    }

    // create a token
    const token = createToken(user._id);

    res.json({
      status: true,
      message: "Successfully Logged In",
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
