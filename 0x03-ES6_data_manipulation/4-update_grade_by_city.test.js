import updateStudentGradeByCity from './4-update_grade_by_city.js';
import { getListStudents } from './1-get_list_students_id.js';

// Test case 1: Update grade for students in the given city
const students1 = getListStudents();
const city1 = 'New York';
const newGrade1 = 90;
const updatedStudents1 = updateStudentGradeByCity(students1, city1, newGrade1);
console.log(updatedStudents1);
// Expected output: An array of students with their grades updated to 90 for students in New York

// Test case 2: Update grade for students in a different city
const students2 = getListStudents();
const city2 = 'San Francisco';
const newGrade2 = 85;
const updatedStudents2 = updateStudentGradeByCity(students2, city2, newGrade2);
console.log(updatedStudents2);
// Expected output: An array of students with their grades updated to 85 for students in San Francisco

// Test case 3: Update grade for students in a city with no matching students
const students3 = getListStudents();
const city3 = 'Chicago';
const newGrade3 = 95;
const updatedStudents3 = updateStudentGradeByCity(students3, city3, newGrade3);
console.log(updatedStudents3);
// Expected output: An empty array since there are no students in Chicago

// Test case 4: Update grade for students in an empty array
const students4 = [];
const city4 = 'Los Angeles';
const newGrade4 = 80;
const updatedStudents4 = updateStudentGradeByCity(students4, city4, newGrade4);
console.log(updatedStudents4);
// Expected output: An empty array since there are no students in the empty array

// Test case 5: Update grade for students in a city with multiple matching students
const students5 = getListStudents();
const city5 = 'Boston';
const newGrade5 = 95;
const updatedStudents5 = updateStudentGradeByCity(students5, city5, newGrade5);
console.log(updatedStudents5);
// Expected output: An array of students with their grades updated to 95 for students in Boston
