const request = require('supertest');
const app = require('./6-http_express');

describe('HTTP server with Express', () => {
  test('should respond with "Hello Holberton School!" for the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Hello Holberton School!');
  });

  test('should respond with 404 for non-existing endpoints', async () => {
    const response = await request(app).get('/non-existing');
    expect(response.statusCode).toBe(404);
  });
});
