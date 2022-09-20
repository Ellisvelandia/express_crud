import express from "express";

import { createUser ,getUsers, getUser , deleteUser } from "../controllers/users.js";

const router = express.Router();
let users = [];

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);


router.delete("/:id", deleteUser) (

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
