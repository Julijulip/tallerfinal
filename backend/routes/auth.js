const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTRO
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: "Usuario registrado" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (user) {
    res.json(user);
  } else {
    res.status(400).json({ message: "Credenciales incorrectas" });
  }
});

module.exports = router;