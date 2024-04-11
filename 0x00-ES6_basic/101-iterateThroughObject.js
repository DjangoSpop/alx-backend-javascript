export default function iterateThroughObject(reportWithIterator) {
  if (!reportWithIterator || typeof reportWithIterator[Symbol.iterator] !== 'function') {
    return '';
  }

  let employeeNames = '';
  
  for (const employee of reportWithIterator) {
    employeeNames += employee;
    if (employee !== reportWithIterator[reportWithIterator.length - 1]) {
      employeeNames += ' | ';
    }
  }
  
  return employeeNames;
}
  