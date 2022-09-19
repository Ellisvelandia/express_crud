import express from "express";
import { v4 as uuidv4 } from "uuid";

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

  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);

  res.send(`User with the same name ${user.firstName} added to the database!`);
});

export default router;
