import express from "express";

const router = express.Router();
const users = [
  {
    name: "ellis",
    lastname: "Caicedo",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  user.push(user);

  res.send(`User with the same $`);
});

export default router;
