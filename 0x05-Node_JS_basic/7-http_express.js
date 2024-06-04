const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const database = process.argv[2];
    fs.readFile(database, 'utf-8', (err, data) => {
        if (err) {
            res.send('Error reading file');
        } else {
            const lines = data.split('\n');
            const students = lines.filter(line => line !== '');
            const numStudents = students.length;
            const numCSStudents = students.filter(student => student.includes('CS')).length;
            const numSWEStudents = students.filter(student => student.includes('SWE')).length;
            const csStudents = students.filter(student => student.includes('CS')).map(student => student.split(',')[0]);
            const sweStudents = students.filter(student => student.includes('SWE')).map(student => student.split(',')[0]);
            const response = `This is the list of our students\nNumber of students: ${numStudents}\nNumber of students in CS: ${numCSStudents}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${numSWEStudents}. List: ${sweStudents.join(', ')}`;
            res.send(response);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
