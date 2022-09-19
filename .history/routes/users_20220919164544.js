import express from "express";

const router = express.Router();
const users = [
  {
    name: "ellis",
    lastname: "Caicedo",
    age: 25
  }
  {
    firstName: "Jane"
  }
]


router.get("/", (req, res) => { 
  console.log(users);

res.send(users)
});

export default router;
