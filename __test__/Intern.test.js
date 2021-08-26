const Intern = require('../lib/Intern');

describe('Employee Tests', () => {
  const intern = new Intern("John Smith", 100, "john.smith@company.com", 'Harvard');
  
  it('should verify the name is returned correctly', () => {
    expect(intern.getName()).toEqual("John Smith");
  });

  it("verifies getID returns the correct id", () => {
    expect(intern.getId()).toEqual(100);
  });

  it("verifies getEmail() returns the right email", () => {
    expect(intern.getEmail()).toEqual('john.smith@company.com');
  });

  it('verifies school name', () => {
    expect(intern.getSchool()).toEqual('Harvard');
  });

  it('verifies role', () => {
    expect(Intern.getRole()).toEqual('Intern');
  });
});