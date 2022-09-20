import express from "express";

import { createUser ,getUsers, getUser , deleteUser } from "../controllers/users.js";

const router = express.Router();
let users = [];

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", 