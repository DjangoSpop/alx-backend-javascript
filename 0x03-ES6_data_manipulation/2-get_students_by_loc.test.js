const getStudentsByLocation = require('./2-get_students_by_loc');

const students = [
    { name: 'Alice', location: 'New York' },
    { name: 'Bob', location: 'London' },
    { name: 'Charlie', location: 'New York' },
    { name: 'David', location: 'Paris' },
];

// Test case 1: Students in New York
test('Get students in New York', () => {
    const result = getStudentsByLocation(students, 'New York');
    expect(result).toEqual([
        { name: 'Alice', location: 'New York' },
        { name: 'Charlie', location: 'New York' },
    ]);
});

// Test case 2: Students in London
test('Get students in London', () => {
    const result = getStudentsByLocation(students, 'London');
    expect(result).toEqual([
        { name: 'Bob', location: 'London' },
    ]);
});

// Test case 3: Students in Paris
test('Get students in Paris', () => {
    const result = getStudentsByLocation(students, 'Paris');
    expect(result).toEqual([
        { name: 'David', location: 'Paris' },
    ]);
});

// Test case 4: Students in an unknown location
test('Get students in an unknown location', () => {
    const result = getStudentsByLocation(students, 'Tokyo');
    expect(result).toEqual([]);
});
