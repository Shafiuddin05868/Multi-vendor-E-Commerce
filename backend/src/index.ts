import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import pool from "./lib/db.ts";

configDotenv();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Welcome to VendorVerse");
});

const port = process.env.PORT || 5001;

pool.connect().then(() => {
  console.log("Database Connection Successfull");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((err)=>{
    console.error("Database Connection Failed", err.message);
    process.exit(1);
})
