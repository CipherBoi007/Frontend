const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    head: { type: String, required: true },
    totalStaff: { type: Number, required: true, default: 0 },
    status: { type: String, required: true, enum: ['Active', 'Inactive'], default: 'Active' },
}, { timestamps: true });

module.exports = mongoose.model('Department', departmentSchema);
