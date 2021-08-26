const Engineer = require('../lib/Engineer');

describe('Employee Tests', () => {
  const engineer = new Engineer("John Smith", 100, "john.smith@company.com", "johnsmith");
  
  it('should verify the name is returned correctly', () => {
    expect(engineer.getName()).toEqual("John Smith");
  });

  it("verifies getID returns the correct id", () => {
    expect(engineer.getId()).toEqual(100);
  });

  it("verifies getEmail() returns the right email", () => {
    expect(engineer.getEmail()).toEqual('john.smith@company.com');
  });

  it('Verifies getGitHubUserName to return the correct value', () => {
    expect(engineer.getGitHubUserName()).toEqual('johnsmith');
  })

  it('verifies role', () => {
    expect(Engineer.getRole()).toEqual('Engineer');
  });
});