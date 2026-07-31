const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
    status: { type: String, required: true, enum: ['Active', 'On Leave', 'Inactive'], default: 'Active' },
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
