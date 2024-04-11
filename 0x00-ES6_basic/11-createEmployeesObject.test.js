import createEmployeesObject from './11-createEmployeesObject';

describe('createEmployeesObject', () => {
    it('should return an object with the department name and employees', () => {
        const departmentName = 'Engineering';
        const employees = ['John', 'Jane', 'Mike'];

        const result = createEmployeesObject(departmentName, employees);

        expect(result).toEqual({
            department: departmentName,
            employees: employees,
        });
    });

    it('should return an empty object if no employees are provided', () => {
        const departmentName = 'Sales';
        const employees = [];

        const result = createEmployeesObject(departmentName, employees);

        expect(result).toEqual({
            department: departmentName,
            employees: [],
        });
    });
});
