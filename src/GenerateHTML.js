const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
class Utils {
  static generateSkeletonHTML(teamArray) {
    let htmlSkeleton = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Welcome to the team page </h1>
        </div>
      </div>
    
      ${this.addManagerToSkeleton(teamArray[0])}
        
      <div class="row card-row engineercards justify-content-center p0 m-3">

      ${this.addEngineerToSkeleton(teamArray)}
      </div>
      <div class="row card-row interncards justify-content-center p0 m-3">
      ${this.addInternToSkeleton(teamArray)}
      </div>
    </body>
    </html>`;

    fs.writeFileSync('SAMPLE_INDEX.html', htmlSkeleton, (err) =>
        err ? console.log(err) : ""
      );
  }

  static addManagerToSkeleton(manager) {
    return `<div class="row card-row manager-row justify-content-center p0 m-3">
        <div class="card managercard  p0 m-3">
          <div class="container">
            <h4><b>${manager.getName()}</b></h4>
            <p>Manager</p>
            <hr>
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>office: ${manager.getOfficeNumber()}</p>
          </div>
        </div>
      </div>`
  }

  static addEngineerToSkeleton(teamArray) {
    const engArray = teamArray.filter(teamMember => teamMember instanceof Engineer)
    let toReturn = ""
    engArray.forEach(engineer => {
      toReturn = toReturn + `<div class="card engineercard  p0 m-3">
      <div class="container">
        <h4><b>${engineer.getName()}</b></h4>
        <p>${Engineer.getRole()}</p>
        <hr>
        <p>ID: ${engineer.getId()}</p>
        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p>github: <a href="https://github.com/${engineer.getGitHubUserName()}">${engineer.getGitHubUserName()}</a></p>
      </div>
    </div>
    `
    });
   
    return toReturn;
  }

  static addInternToSkeleton(teamArray) {
    const engArray = teamArray.filter(teamMember => teamMember instanceof Intern)
    let toReturn = ""
    engArray.forEach(intern => {
      toReturn = toReturn + `<div class="card interncard p0 m-3">
      <div class="container">
        <h4><b>${intern.getName()}</b></h4>
        <p>${Intern.getRole()}</p>
        <hr>
        <p>ID: ${intern.getId()}</p>
        <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>school: ${intern.getSchool()}</p>
      </div>
    </div>
    `
    });
   
    return toReturn;
  }

}
module.exports = Utils