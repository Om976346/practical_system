import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "../config/database.js";

// Load environment variables
dotenv.config();


const app = express();
app.use(json());

// Connect to MongoDB
connectDB();

// Routes
import userRoutes from "../Routes/userRoutes.js";
import subjectRoutes from "../Routes/subjectRoutes.js";
import practicalRoutes from "../Routes/practicalRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/practicals", practicalRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
