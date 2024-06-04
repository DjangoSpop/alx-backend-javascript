// 2-read_file.js
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim().split('\n');
    const students = data.filter((item) => item);
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
