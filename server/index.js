import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routers/users.js";
import blogRouter from "./routers/blogs.js";

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());
app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.listen(process.env.PORT, () => {
   mongoose
      .connect(process.env.DB)
      .then(() => {
         console.log(`Connected DB | URL: http://localhost:${process.env.PORT}`);
      })
      .catch((err) => console.error(err));
});
