const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/staff', require('./routes/staff'));
app.use('/api/dashboard', require('./routes/dashboard'));

module.exports = app;
