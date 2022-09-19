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

  const user = req.body

  user.push(user)

  res.send('POST ROUTE REACHED');
});

export default router;
