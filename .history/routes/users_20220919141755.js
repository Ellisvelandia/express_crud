import { Express } from "express";

const router = express.Router();

router.get('/users', (req, res) => {
  res.send("hello")
})

export default router