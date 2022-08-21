// Write your solution in this file!
const employee = { name: 'Zablon', streetAddress: '50504 Makongeni' };
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = { ...employee };
    newEmployee.name = 'Sam';
    newEmployee.streetAddress = '11 Broadway';
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newEmployee = delete employee.name;
    return employee;
}