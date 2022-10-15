import express from "express";

const blogs = express.Router();

blogs.get("/", async function (req, res) {
   res.send("hello");
   console.log(req.body);
});

blogs.post("/", async function (req, res) {
   console.log('BASARILI');
   await res.status(200).json(req.body);
});

export default blogs;