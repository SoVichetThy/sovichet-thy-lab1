const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /', () => {
it('should return Hello, GitHub Actions!', async () => {
const res = await request(app).get('/');

expect(res.status).to.equal(200);
expect(res.text).to.equal('Hello, GitHub Actions!');
});
});
// import request from 'supertest';
// import { expect } from 'chai';
// import app from '../app.js'; // ⚠️ Note the .js extension!

// describe('GET /', () => {
//   it('should return Hello, GitHub Actions!', async () => {
//     const res = await request(app).get('/');
//     expect(res.status).to.equal(200);
//     expect(res.text).to.equal('Hello, GitHub Actions!');
//   });
// });
