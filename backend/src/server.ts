import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes";
const app = express();
dotenv.config();
app.use(express.json());

app.use("/api", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});
