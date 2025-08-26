import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes";
import dbConnect from "./utiles/db";
const app = express();
dotenv.config();

// CORS configuration - must be before other middleware
app.use(
  cors({
    origin: true, // Allow all origins for debugging - change back to specific origin in production
    credentials: true,
    // methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
(async () => {
  await dbConnect();
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
})();
