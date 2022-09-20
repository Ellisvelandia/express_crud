import { v4 as uuidv4 } from "uuid";
m n 

export const getUser = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the same name ${user.firstName} added to the database!`);
};
