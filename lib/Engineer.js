/*
  Engieer class used to represent an Engineer and extends employee. Adds a gitHubUserName to the class variables
*/
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, gitHubUserName) {
    super(name, id, email);
    this.gitHubUserName = gitHubUserName;
  }

  getGitHubUserName() {
    return this.gitHubUserName;
  }

  static getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;