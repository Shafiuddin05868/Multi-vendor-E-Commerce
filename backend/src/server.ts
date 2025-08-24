import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes";
import dbConnect from "./utiles/db";
const app = express();
dotenv.config();
app.use(express.json());

app.use("/api", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
})

;(async () => {
  await dbConnect();
  app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
  });
})();
