const mysql = require('mysql2');
const db = require('../db');

const User = {
  create: (username, password, role, callback) => {
    db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, role], callback);
  },
  findByUsername: (username, callback) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], callback);
  }
};

module.exports = User;
