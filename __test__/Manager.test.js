const Manager = require('../lib/Manager');

describe('Employee Tests', () => {
  const manager = new Manager("John Smith", 100, "john.smith@company.com", 'ABC123');
  
  it('should verify the name is returned correctly', () => {
    expect(manager.getName()).toEqual("John Smith");
  });

  it("verifies getID returns the correct id", () => {
    expect(manager.getId()).toEqual(100);
  });

  it("verifies getEmail() returns the right email", () => {
    expect(manager.getEmail()).toEqual('john.smith@company.com');
  });

  it('verifies office building', () => {
    expect(manager.getOfficeNumber()).toEqual('ABC123');
  });

  it('verifies role', () => {
    expect(Manager.getRole()).toEqual('Manager');
  });
});