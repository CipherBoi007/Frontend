const express = require('express');
const router = express.Router();

// Hardcoded Admin login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Check credentials
    if (username === 'Admin' && password === 'Admin@123') {
        res.json({ message: 'Login successful', token: 'fake-jwt-token-for-admin' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
