/*
  Manager class. Adds office number. 
*/
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  static getRole() {
    return 'Manager';
  }
}

module.exports = Manager;