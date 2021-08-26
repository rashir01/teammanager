
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
    //TODO: add email validation
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


function askQuestions(questions) {
  console.log(`Enter ${currentEmployeeType} data`);
  inquirer
  .prompt(COMMON_QUESTIONS.concat(questions).concat(MENU_QUESTION))
  .then((response) => {
    processResponse(response);
  })
}

askQuestions(MANAGER_QUESTIONS);



/*



User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
Acceptance Criteria





WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address


WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab





DONE
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
*/


