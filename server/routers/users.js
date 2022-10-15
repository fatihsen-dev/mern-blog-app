import express from "express";

const users = express.Router();

users.get("/", function (req, res) {
   res.send("Hello from APIv1 root route.");
});

export default users;
