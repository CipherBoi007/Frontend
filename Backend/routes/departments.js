const express = require('express');
const router = express.Router();
const Department = require('../models/Department');
const Activity = require('../models/Activity');

// Get all departments
router.get('/', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a department
router.post('/', async (req, res) => {
    const department = new Department(req.body);
    try {
        const newDepartment = await department.save();
        await new Activity({ message: `New department created: ${newDepartment.name}`, type: 'department' }).save();
        res.status(201).json(newDepartment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a department
router.put('/:id', async (req, res) => {
    try {
        const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedDepartment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a department
router.delete('/:id', async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department) {
            await Department.findByIdAndDelete(req.params.id);
            await new Activity({ message: `Department deleted: ${department.name}`, type: 'department' }).save();
        }
        res.json({ message: 'Department deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
