const fs = require('fs');
const Engineer = require('../lib/Engineer');
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
          <h1 class="display-4 ">Welcome to the team page </h1>
        </div>
      </div>
    
      ${this.addManagerToSkeleton(teamArray[0])}
        
      <div class="row card-row engineercards justify-content-center p0 m-3">

      ${this.addEngineerToSkeleton(teamArray)}
      </div>
      <div class="row card-row interncards justify-content-center p0 m-3">
      </div>
    </body>
    </html>`;

    fs.writeFileSync('index.html', htmlSkeleton, (err) =>
        err ? console.log(err) : ""
      );
  }

  static addManagerToSkeleton(manager) {
    console.log("add manager to skel")
    // manager = {name:"Manager Dude", 
    //             id:"1",
    //             email:"manager@manage.com",
    //             office:"ABC123"}
    return `<div class="row card-row manager-row justify-content-center p0 m-3">
        <div class="card managercard  p0 m-3">
          <!-- <img src="img_avatar1.png" alt="Avatar" style="width:100%"> -->
          <div class="container">
            <h4><b>${manager.name}</b></h4>
            <p>Manager</p>
            <hr>
            <p>ID: ${manager.id}</p>
            <p>Email: ${manager.email}</p>
            <p>office: ${manager.office}</p>
          </div>
        </div>
      </div>`
  }

  static addEngineerToSkeleton(teamArray) {
    const engArray = teamArray.filter(teamMember => teamMember instanceof Engineer)
    let toReturn = ""
    engArray.forEach(engineer => {
      toReturn = toReturn + `<div class="card managercard  p0 m-3">
      <!-- <img src="img_avatar1.png" alt="Avatar" style="width:100%"> -->
      <div class="container">
        <h4><b>${engineer.name}</b></h4>
        <p>${Engineer.getRole()}</p>
        <hr>
        <p>ID: ${engineer.id}</p>
        <p>Email: ${engineer.email}</p>
        <p>office: ${engineer.gitHubUserName}</p>
      </div>
    </div>
    `
  
    });
    

    console.log(engArray);
    return toReturn;
  }

  static addInternToSkeleton() {}

  filterArray(employee, type) {
    return employee instanceof type; 
  }
}
module.exports = Utils

/*
`<!DOCTYPE html>
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
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
*/