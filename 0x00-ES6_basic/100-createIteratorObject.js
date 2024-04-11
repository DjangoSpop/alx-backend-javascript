export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees ? Object.values(report.allEmployees).flat() : [];
  
    return {
      [Symbol.iterator]() {
        return {
          next() {
            if (index < allEmployees.length) {
              return { value: allEmployees[index++], done: false };
            } else {
              return { value: undefined, done: true };
            }
          }
        };
      }
    };
  }
  