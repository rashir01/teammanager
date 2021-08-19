const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, gitHubUserName) {
    super(name, id, email);
    this.gitHubUserName = gitHubUserName;
  }

  getGitHubUserName() {
    return this.gitHubUserName;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;