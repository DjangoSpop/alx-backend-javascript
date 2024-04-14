import createEmployeesObject from './11-createEmployeesObject';

// Test case 1: Department name is "HR" and employees is an empty array
test('Test case 1', () => {
    const departmentName = 'HR';
    const employees = [];
    const expected = {
        HR: [],
    };
    const result = createEmployeesObject(departmentName, employees);
    expect(result).toEqual(expected);
});

// Test case 2: Department name is "IT" and employees has 3 elements
test('Test case 2', () => {
    const departmentName = 'IT';
    const employees = ['John', 'Jane', 'Mike'];
    const expected = {
        IT: ['John', 'Jane', 'Mike'],
    };
    const result = createEmployeesObject(departmentName, employees);
    expect(result).toEqual(expected);
});

// Test case 3: Department name is "Sales" and employees has 1 element
test('Test case 3', () => {
    const departmentName = 'Sales';
    const employees = ['Alice'];
    const expected = {
        Sales: ['Alice'],
    };
    const result = createEmployeesObject(departmentName, employees);
    expect(result).toEqual(expected);
});
