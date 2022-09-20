import express from "express";

import { createUser ,getUsers, getUser , deleteUser } from "../controllers/users.js";

const router = express.Router();
let users = [];

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id",getUser )


router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id == id);

  res.send(`User with the id ${id} deleted from the database.`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
});

export default router;
