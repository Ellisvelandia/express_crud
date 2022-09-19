import express from "express";

const router = express.Router();
 
router.get("/", (req, res) => {
  <res className="send"></res>('Hello');
});

export default router;
