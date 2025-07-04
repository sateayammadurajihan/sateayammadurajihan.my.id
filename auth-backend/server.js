const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const menuRoutes = require('./routes/menu');
const authRoutes = require('./routes/auth');
const { authenticateToken } = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/menus', authenticateToken, menuRoutes); // Protect menu routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
