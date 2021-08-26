
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require ('./lib/Manager');
const GenerateHTML = require('./src/GenerateHTML.js');

const COMMON_QUESTIONS = [
  {
    type: 'input', 
    message: 'Enter the employee name',
    name: 'employeeName'
  }, 
  {
    type: 'input', 
    message: 'Enter the employee id',
    name: 'employeeID'
  },
  {
    type: 'input', 
    message: 'Enter the email address',
    name: 'employeeEmail'
  }
];

const MANAGER_QUESTIONS = [
  {
    type: 'input', 
    message: 'Enter office number',
    name: 'officeNumber'
  }
];

const ENGINEER_QUESTIONS = [
  {
    type: 'input', 
    message: 'Enter github id', 
    name: 'gitHubUserName'
  }
];

const INTERN_QUESTIONS = [
  {
    type: 'input', 
    message: 'Enter school name', 
    name: 'schoolName'
  }
];

const MENU_QUESTION = [ 
  {
    type: 'list', 
    message: 'What would you like to do?',
    name: 'userSelection', 
    choices: ['Add Engineer', 'Add Intern', 'Exit']
  }
];

const teamArray = [];
let currentEmployeeType = Manager.getRole();

/*
  function: processes user response. Decides on what type of employee to create and adds it to the teamArray
  input: the users response to multiple questions
  return: none
*/
function processResponse(response) {
  switch (currentEmployeeType) {
    case Manager.getRole():
      teamArray.push(new Manager(response.employeeName, response.employeeID, response.employeeEmail, response.officeNumber));
      break;
    case Engineer.getRole(): 
      teamArray.push(new Engineer(response.employeeName, response.employeeID,
        response.employeeEmail, response.gitHubUserName));
      break;
    case Intern.getRole(): 
      teamArray.push(new Intern(response.employeeName, response.employeeID, response.employeeEmail, response.schoolName));
      break;
  }
  determineNextAction(response.userSelection);
}

/*
  purpose: determines the next action on which type of questions to ask based on the user selection
  input: the user option can to add engineer, intern, or exit
  return: none
*/
function determineNextAction(option) {
  switch(option.toString()) {
    case "Add Engineer": 
      currentEmployeeType = Engineer.getRole();
      askQuestions(ENGINEER_QUESTIONS);
      break;
    case 'Add Intern':
      currentEmployeeType = Intern.getRole();
      askQuestions(INTERN_QUESTIONS)
      break;
    case 'Exit':
      console.log("generate html");
      GenerateHTML.generateSkeletonHTML(teamArray);
      console.log("exiting....");
      break;
  }
}

/*
  purpose: present the user with questions about an employee
  input: questions specific to employee type
  return: none
*/
function askQuestions(questions) {
  console.log(`Enter ${currentEmployeeType} data`);
  inquirer
  .prompt(COMMON_QUESTIONS.concat(questions).concat(MENU_QUESTION))
  .then((response) => {
    processResponse(response);
  })
}

askQuestions(MANAGER_QUESTIONS);