export default function iterateThroughObject(reportWithIterator) {
    let employeeNames = '';
  
    for (const employee of reportWithIterator) {
      employeeNames += employee;
      if (employee !== reportWithIterator[reportWithIterator.length - 1]) {
        employeeNames += ' | ';
      }
    }
  
    return employeeNames;
  }
  