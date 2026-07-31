const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');
const Department = require('../models/Department');
const Activity = require('../models/Activity');
const { protect } = require('../middleware/authMiddleware');

// Get dashboard stats
router.get('/stats', protect, async (req, res) => {
    try {
        const totalStaff = await Staff.countDocuments();
        const totalDepartments = await Department.countDocuments();
        // Assuming 4892 as placeholder for Active Students as we don't have Student model yet
        const activeStudents = 4892;

        res.json({
            totalStaff,
            totalDepartments,
            activeStudents
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get recent activity
router.get('/activity', async (req, res) => {
    try {
        const activities = await Activity.find().sort({ createdAt: -1 }).limit(5);
        res.json(activities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
