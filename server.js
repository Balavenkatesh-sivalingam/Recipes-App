const express = require("express");

const connectDB = require("./config/db");

const recipeRoutes = require("./router/recipeRouter");

const app = express();

require("dotenv").config()
const PORT = process.env.PORT;

connectDB();

app.use(express.json());

app.use("/api/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log("server is running at port 5000");
});
