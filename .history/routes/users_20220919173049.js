import express from "express";

const router = express.Router();
const users = [
  {
    name: "ellis",
    lastname: "Caicedo",
    age: 25
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24
  }
]


router.get("/", (req, res) => { 
  console.log(users);

res.send(users)
});

router.post('/', (req, res) => {
  console.log('POST ROUTE REACHED')

  console.log(req.body)

  user.push(u)

  res.send('POST ROUTE REACHED');
});

export default router;
