import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./db/index.js";
import express from "express";
const app = express();
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running at port," );
    });
  })
  .catch((error) => {
    console.log("MONGODB error is ", error);
  });