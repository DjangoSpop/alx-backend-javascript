// 3-read_file_async.js
const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);

const countStudents = async (path) => {
  try {
    const data = await readFilePromise(path, 'utf-8');
    const students = data.trim().split('\n').filter((item) => item);
    const studentsByField = students.reduce((obj, student) => {
      const [firstName, field] = student.split(',');
      const newObj = { ...obj };
      if (!newObj[field]) newObj[field] = [];
      newObj[field].push(firstName);
      return newObj;
    }, {});

    console.log(`Number of students: ${students.length}`);
    Object.keys(studentsByField)
      .sort()
      .forEach((field) => {
        console.log(
          `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`,
        );
      });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
