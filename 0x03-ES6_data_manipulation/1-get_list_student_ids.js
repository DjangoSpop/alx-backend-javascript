import { getListStudent } from './0-get_list_students.js';
export default function getListStudentIds(students) {
    return students.map(student => student.id);
}
