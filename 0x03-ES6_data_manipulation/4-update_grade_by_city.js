import { getListStudents } from './1-get_list_students_id.js';

export default function updateStudentGradeByCity (students, city, newGrade) 
{
  return students.filter(student => student.location === city)
                 .map(student => student.grade = newGrade)
}
