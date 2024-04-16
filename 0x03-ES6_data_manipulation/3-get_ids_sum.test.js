import getStudentIdsSum from './3-get_ids_sum';

describe('getStudentIdsSum', () => {
    it('should return the sum of student IDs', () => {
        const students = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' },
        ];
        const result = getStudentIdsSum(students);
        expect(result).toBe(6);
    });

    it('should return 0 if students array is empty', () => {
        const students = [];
        const result = getStudentIdsSum(students);
        expect(result).toBe(0);
    });

    it('should return the ID of the only student if there is only one student', () => {
        const students = [{ id: 4, name: 'David' }];
        const result = getStudentIdsSum(students);
        expect(result).toBe(4);
    });
});
