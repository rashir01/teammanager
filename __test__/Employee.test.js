const Employee = require('../lib/Employee');

describe('Employee Tests', () => {
  const employee = new Employee("John Smith", 100, "john.smith@company.com");
  
  it('should verify the name is returned correctly', () => {
    expect(employee.getName()).toEqual("John Smith");
  });

  it("verifies getID returns the correct id", () => {
    expect(employee.getId()).toEqual(100);
  });

  it("verifies getEmail() returns the right email", () => {
    expect(employee.getEmail()).toEqual('john.smith@company.com');
  });

  it('verifies role', () => {
    expect(employee.getRole()).toEqual('Employee');
  });
});