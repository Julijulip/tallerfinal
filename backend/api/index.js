const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err));

app.use("/api/auth", require("../routes/auth"));

app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

module.exports = app;