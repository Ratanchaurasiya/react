import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/registration";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));