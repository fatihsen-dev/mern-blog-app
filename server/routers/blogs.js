import express from "express";
import Blog from "../models/blogs.js";

const blogs = express.Router();

blogs.get("/", async function (req, res) {
   return res.status(200).json({ title: "test 132" });
});

blogs.post("/add", async function (req, res) {
   let { title, img, text, desc, tags, owner } = req.body;

   if (title.length < 15) return res.status(404).json({ message: "Başlık 15 karakterden az olamaz." });
   if (title.length > 100) return res.status(404).json({ message: "Başlık 100 karakterden fazla olamaz." });
   if (text.length < 50) return res.status(404).json({ message: "Yazı 50 karakterden az olamaz." });
   if (text.length > 250) return res.status(404).json({ message: "Yazı 250 karakterden fazla olamaz."} );
   if (desc.length < 50) return res.status(404).json({ message: "Açıklama 50 karakterden az olamaz." });
   if (desc.length > 250) return res.status(404).json({ message: "Açıklama 250 karakterden fazla olamaz." });

   const data = new Blog({
      title,
      img,
      text,
      desc,
      tags,
      owner,
   });
   data.save();
})

export default blogs;
