const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTRO
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 🚫 evitar usuarios duplicados
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "Usuario registrado" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN (ARREGLADO)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 🔍 buscar solo por email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Usuario no existe" });
    }

    // 🔐 validar contraseña
    if (user.password !== password) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;