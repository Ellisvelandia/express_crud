import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  users.push({ ...user, id: uuidv4() });

  res.send(`User with the same name ${user.firstName} added to the database!`);
});

router.get('/:id', (req, res) => {
  console.log(  )
  res.send('THE GET ID ROUTE');
});

export default router;
