const request = require('supertest');
const app = require('./full_server/server');
const path = require('path');

describe('HTTP server with Express (advanced)', () => {
  const validPath = path.join(__dirname, '..', 'database.csv');

  test('should respond with "Hello Holberton School!" for the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Hello Holberton School!');
  });

  test('should respond with the list of students for the /students endpoint', async () => {
    const response = await request(app).get('/students').query({ path: validPath });
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('This is the list of our students');
    expect(response.text).toContain('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
    expect(response.text).toContain('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
  });

  test('should respond with the list of students for a specific major', async () => {
    const response = await request(app).get('/students/SWE').query({ path: validPath });
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('List: Guillaume, Joseph, Paul, Tommy');
  });

  test('should respond with an error for an invalid major', async () => {
    const response = await request(app).get('/students/INVALID').query({ path: validPath });
    expect(response.statusCode).toBe(500);
    expect(response.text).toEqual('Major parameter must be CS or SWE');
  });
});
