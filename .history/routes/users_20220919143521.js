import express from "express";

const router = express.Router();

router.get("/cars", (req, res) => {
  res.send("Hello");
});

export default router;
