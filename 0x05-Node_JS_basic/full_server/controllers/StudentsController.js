const readDatabase = require('./utils');

const StudentsController = {
  getAllStudents: async (req, res) => {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      const fields = Object.keys(studentsByField).sort();
      res.status(200).send(`This is the list of our students\n${fields.map((field) => `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`).join('\n')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  getAllStudentsByMajor: async (req, res) => {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(process.argv[2]);
      const students = studentsByField[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};

module.exports = StudentsController;
