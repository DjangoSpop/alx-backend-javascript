import createReportObject from './12-createReportObject';

describe('createReportObject', () => {
    it('should return an object with the correct report', () => {
        const employeesList = [
            { name: 'John Doe', position: 'Manager', salary: 5000 },
            { name: 'Jane Smith', position: 'Developer', salary: 4000 },
            { name: 'Mark Johnson', position: 'Designer', salary: 3000 },
        ];

        const expectedReport = {
            totalEmployees: 3,
            averageSalary: 4000,
            highestPaidEmployee: 'John Doe',
        };

        const report = createReportObject(employeesList);

        expect(report).toEqual(expectedReport);
    });

    it('should return an object with default values if employeesList is empty', () => {
        const employeesList = [];

        const expectedReport = {
            totalEmployees: 0,
            averageSalary: 0,
            highestPaidEmployee: null,
        };

        const report = createReportObject(employeesList);

        expect(report).toEqual(expectedReport);
    });
});
