const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const generateTokens = (id) => {
    const accessToken = jwt.sign({ id }, process.env.JWT_ACCESS_SECRET || 'fallback_access_secret', { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_SECRET || 'fallback_refresh_secret', { expiresIn: '7d' });
    return { accessToken, refreshToken };
};

// @route   POST /api/auth/register
// @desc    Register a new Admin
router.post('/register', async (req, res) => {
    try {
        const { email, phone, password } = req.body;

        const adminExists = await Admin.findOne({ email });
        if (adminExists) {
            return res.status(400).json({ message: 'Admin with this email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = await Admin.create({
            email,
            phone,
            password: hashedPassword
        });

        if (admin) {
            res.status(201).json({ message: 'Admin registered successfully' });
        } else {
            res.status(400).json({ message: 'Invalid admin data' });
        }
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/auth/login
// @desc    Authenticate admin & get tokens
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (admin && (await bcrypt.compare(password, admin.password))) {
            const { accessToken, refreshToken } = generateTokens(admin._id);

            res.cookie('jwt', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            res.json({
                message: 'Login successful',
                accessToken,
                user: { email: admin.email, phone: admin.phone }
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/auth/refresh
// @desc    Refresh access token
router.post('/refresh', async (req, res) => {
    try {
        const refreshToken = req.cookies.jwt;
        if (!refreshToken) return res.status(401).json({ message: 'Not authorized, no refresh token' });

        jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || 'fallback_refresh_secret', (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Refresh token expired or invalid' });
            
            const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_ACCESS_SECRET || 'fallback_access_secret', { expiresIn: '15m' });
            res.json({ accessToken });
        });
    } catch (error) {
        console.error('Refresh Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/auth/logout
// @desc    Logout admin & clear cookie
router.post('/logout', (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.json({ message: 'Logged out successfully' });
});

module.exports = router;
