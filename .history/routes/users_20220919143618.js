import express from "express";

const router = express.Router();

.get("/", (req, res) => res.send("Hello from homepage"));

export default router;
