import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoutes";
import dbConnect from "./utiles/db";
const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // your frontend URL
    credentials: true,
  })
);

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
