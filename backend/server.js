import express from "express";
import cors from "cors";
import "dotenv/config";

// config
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// routers
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

// App config
const PORT = process.env.PORT || 4000;
const app = express();
connectDb();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.get("/", (req, res) => {
  res.json({ success: true, message: "API WORKING" });
});

app.use("/api/auth/", userRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () =>
  console.log(`Server Listening on http://localhost:${PORT}`)
);
