import { getListStudents } from './0-get_list_students';

describe('getListStudents', () => {
    it('should return an array of students', () => {
        const students = getListStudents();
        expect(Array.isArray(students)).toBe(true);
    });

    it('should return an array with the correct length', () => {
        const students = getListStudents();
        expect(students.length).toBe(3);
    });

    it('should return an array of objects with the correct properties', () => {
        const students = getListStudents();
        expect(students[0]).toHaveProperty('id');
        expect(students[0]).toHaveProperty('name');
        expect(students[0]).toHaveProperty('location');
    });

    it('should return an array with the correct student data', () => {
        const students = getListStudents();
        expect(students[0]).toEqual({
            id: 1,
            name: 'Guillaume',
            location: 'San Francisco'
        });
        expect(students[1]).toEqual({
            id: 2,
            name: 'James',
            location: 'Columbia'
        });
        expect(students[2]).toEqual({
            id: 3,
            name: 'Serena',
            location: 'San Francisco'
        });
    });
});
