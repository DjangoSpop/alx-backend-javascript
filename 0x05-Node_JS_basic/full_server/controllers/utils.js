const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);

const readDatabase = async (path) => {
  try {
    const data = await readFilePromise(path, 'utf-8');
    const students = data.trim().split('\n').filter((item) => item);
    const studentsByField = students.reduce((obj, student) => {
      const [firstName, field] = student.split(',');
      const newObj = { ...obj };
      if (!newObj[field]) newObj[field] = [];
      obj[field].push(firstName);
      return newObj;
    }, {});
    return studentsByField;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
