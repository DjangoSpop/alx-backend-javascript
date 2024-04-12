import initializeRooms from './1-make_classrooms';
import ClassRoom from './0-classroom';

describe('initializeRooms', () => {
  it('should return an array of ClassRoom instances', () => {
    const rooms = initializeRooms();
    expect(Array.isArray(rooms)).toBe(true);
    rooms.forEach(room => {
      expect(room instanceof ClassRoom).toBe(true);
    });
  });

  it('should initialize the rooms with the correct properties', () => {
        const rooms = initializeRooms();
        rooms.forEach(room => {
            expect(room.name).toBeDefined();
            expect(room.capacity).toBeDefined();
            expect(room.students).toBeDefined();
            expect(Array.isArray(room.students)).toBe(true);
        });
    });
});
