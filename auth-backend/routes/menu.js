const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all menus
router.get('/', (req, res) => {
  db.query('SELECT * FROM menus', (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
});

// Create a new menu
router.post('/', (req, res) => {
  const { name, price, image } = req.body;
  db.query('INSERT INTO menus (name, price, image) VALUES (?, ?, ?)', [name, price, image], (err, results) => {
    if (err) return res.status(400).json({ message: err.message });
    res.status(201).json({ id: results.insertId, name, price, image });
  });
});

// Update a menu
router.put('/:id', (req, res) => {
  const { name, price, image } = req.body;
  db.query('UPDATE menus SET name = ?, price = ?, image = ? WHERE id = ?', [name, price, image, req.params.id], (err, results) => {
    if (err) return res.status(400).json({ message: err.message });
    res.json({ id: req.params.id, name, price, image });
  });
});

// Delete a menu
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM menus WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Menu deleted' });
  });
});

module.exports = router;
