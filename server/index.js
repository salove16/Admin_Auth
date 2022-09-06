const express = require("express");
require("dotenv").config();
const connect = require("./src/config/db");
const userController=require("./src/controllers/user.Controller")


const {
    register,
    login,
    generateToken,
  } = require("./src/controllers/auth.controller");

const cors = require("cors");

const app = express();

app.use(express.json());



app.use(cors());

app.use("/users", userController);

app.post("/signup", register);

app.post("/login", login);

// app.use("/url", UrlRouter);




app.listen(process.env.PORT || 4000, async () => {
  try {
    await connect();
    console.log("Listening to port 4000");
  } catch (err) {
    console.log(err);
  }
});
