import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, requried: true },
    email: { type: String, requried: true, unique: true },
    password: { type: String, requried: true },
    cartItems: { type: Object, default: {} },
    createdAt: { type: String, required: true },
  },
  { minimize: false }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
