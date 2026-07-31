const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
require('./setup');

describe('Department API', () => {
    it('should fetch empty departments initially', async () => {
        const res = await request(app).get('/api/departments');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });

    it('should create a new department', async () => {
        const res = await request(app)
            .post('/api/departments')
            .send({
                name: 'Computer Science',
                head: 'Dr. John Doe',
                totalStaff: 40
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('Computer Science');
        expect(res.body.head).toEqual('Dr. John Doe');
        
        // Activity log should have been created
        const Activity = require('../models/Activity');
        const count = await Activity.countDocuments();
        expect(count).toEqual(1);
    });
});
