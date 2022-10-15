import express from "express";
import User from "../models/users.js";
import bcrypt from "bcryptjs";

const users = express.Router();

users.post("/register", async function (req, res) {
   const fullname = req.body.fullname,
      email = req.body.email,
      password = await bcrypt.hash(`${req.body.password}`, 10);

   if (fullname.length < 3)
      return res.status(404).send("fullname 3 karakterden az olamaz.");
   if (!isNaN(fullname)) return res.status(404).send("fullname sayı içeremez");
   if (email.length < 3) return res.status(404).send("email 3 karakterden az olamaz.");
   if (req.body.password.length < 8)
      return res.status(404).send("şifre 8 karakterden az olamaz.");

   if (await User.findOne({ email: email }))
      return res.status(404).send("email kullanılıyor");

   const data = new User({
      fullname,
      email,
      password,
   });
   data.save();

   return res.status(200).json(req.body);
});

users.post("/login", async function (req, res) {
   const email = req.body.email,
      password = req.body.password;
   
   const user = await User.findOne({ email });
   if (!user) return res.status(404).send("email bulunamadı");

   if (!bcrypt.compareSync(password, user.password))
      return res.status(404).send("şifre hatalı");

   return res.status(200).json(user);
});

users.post("/userControl", async function (req, res) {
   const _id = req.body.id;

   const user = await User.findById(_id);
   if (!user) return res.status(404).send("id bulunamadı");

   return res.status(200).json(user);
})

export default users;
