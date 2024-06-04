const countStudents = require('../3-read_file_async');
const path = require('path');

test('should throw an error for invalid file path', async () => {
  await expect(countStudents('invalid/path')).rejects.toThrow('Cannot load the database');
});

test('should count students correctly', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const validPath = path.join(__dirname, '..', 'database.csv');

  await countStudents(validPath);

  expect(consoleSpy).toHaveBeenCalledWith('Number of students: 10');
  expect(consoleSpy).toHaveBeenCalledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
  expect(consoleSpy).toHaveBeenCalledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
  consoleSpy.mockRestore();
});
