import express from "express";

const blogs = express.Router();

blogs.get("/", async function (req, res) {
   return res.status(200).json({ title: "test 132" });
});

export default blogs;
