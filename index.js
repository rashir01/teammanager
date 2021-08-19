//get the required inqierer
//prompt for the manager name 
//prompt for the id
//prompt for the email address 
//prompt for the office number
const inquirer = require('inquirer');
const Manager = require ('./lib/Manager');

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
]

const employeeObjects = [];

function init() {
  console.log("Enter Manager Data");
  inquirer
  .prompt(COMMON_QUESTIONS.concat(MANAGER_QUESTIONS))
  .then((response) => {
    console.log(response);
    console.log(`Name ${response.employeeName} id ${response.employeeID} email ${response.employeeEmail}`);
    employeeObjects.push(new Manager(response.employeeName, response.employeeID, response.employeeEmail, response.officeNumber));
    console.log(employeeObjects);
  });
}

init();
/*
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number


User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input



WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address


WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab




WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu


WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/


