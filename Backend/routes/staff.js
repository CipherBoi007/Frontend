const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');
const Activity = require('../models/Activity');

// Get all staff
router.get('/', async (req, res) => {
    try {
        const staff = await Staff.find();
        res.json(staff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a staff member
router.post('/', async (req, res) => {
    const staff = new Staff(req.body);
    try {
        const newStaff = await staff.save();
        await new Activity({ message: `New staff member added: ${newStaff.name}`, type: 'staff' }).save();
        res.status(201).json(newStaff);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a staff member
router.put('/:id', async (req, res) => {
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedStaff);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a staff member
router.delete('/:id', async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);
        if (staff) {
            await Staff.findByIdAndDelete(req.params.id);
            await new Activity({ message: `Staff member removed: ${staff.name}`, type: 'staff' }).save();
        }
        res.json({ message: 'Staff member deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
