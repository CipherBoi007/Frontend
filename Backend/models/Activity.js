const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    message: { type: String, required: true },
    type: { type: String, enum: ['staff', 'department', 'system'], default: 'system' }
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
