import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoute from "./routes/payment.js"
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const app = express();

dotenv.config();

app.get("/api/profile", ClerkExpressRequireAuth(), (req, res) => {
  res.json({
    message: "You are authenticated 🎉",
    userId: req.auth.userId,
  });
});

app.use(express.json());
app.use(cors());

app.use("/api/payment", paymentRoute);
app.use("/api/products", productRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
});
