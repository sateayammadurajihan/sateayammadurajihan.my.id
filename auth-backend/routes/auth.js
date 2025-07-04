const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('auth-backend/models/user');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  if (role && role !== 'admin' && role !== 'user') {
    return res.status(400).json({ message: 'Invalid role' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    User.create(username, hashedPassword, role || 'user', (err, results) => {
      if (err) return res.status(400).json({ message: err.message });
      res.status(201).json({ id: results.insertId, username, role: role || 'user' });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, async (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    if (results.length === 0) return res.status(401).json({ message: 'User  not found' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });
  });
});

module.exports = router;
