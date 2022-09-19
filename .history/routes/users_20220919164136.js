import express from "express";

const router = express.Router();
const users = [
  {
    "name: "ellis",
    "lastname": "Caicedo",
    "age": 25
  }
]


router.get("/", (req, res) => { 
res.send("Hello")
});

export default router;
