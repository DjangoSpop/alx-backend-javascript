import ClassRoom from './0-classroom';

describe('ClassRoom', () => {
    it('should create a class room with the given maxStudentsSize', () => {
        const maxStudentsSize = 30;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom.maxStudentsSize).toBe(maxStudentsSize);
    });

    it('should create a class room with the given maxStudentsSize', () => {
        const maxStudentsSize = 50;
        const classroom = new ClassRoom(maxStudentsSize);
        expect(classroom.maxStudentsSize).toBe(maxStudentsSize);
    });
});
