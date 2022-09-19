import express from "EX";

const router = express.Router();


router.get("/", (req, res) => { 
res.send("Hello")
});

export default router;
