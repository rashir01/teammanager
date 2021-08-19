const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, officeNumber);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  
  getRole() {
    return 'Manager';
  }
}