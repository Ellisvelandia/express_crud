import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Hello from homepage."));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

{
  "Name": "Fergal Devitt",	
  "Preferred" "Finn Balor",	
  "Place Of Birth": "Republic of Ireland Dublin, Leinster, Republic Of Ireland",
  "Nationality": "IRE",
   "img": "http://www.profightdb.com/img/wrestlers/thumbs-600/8c398cda3cfinnbalor.jpg", 
  }