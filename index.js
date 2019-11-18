//All the npm packages
const fs = require("fs");
const pdfmake = require("pdfmake");
const inquirer = require("inquirer");

//github object
function gitHubProfile(username) {
    image = '';
    username = username;
    locationLink = '';
    gitHubLink = '';
    userBlock = '';
    userBio = 'Here goes the bio';
    repositoryNum = 0;
    followerCount = 0;
    gitHubStars = 0;
    followers = 0;
};

//inquirer questions
inquirer
  .prompt([
    {
      name: 'username',
      message: 'What is your github username?',
      default: 'type here!',
    },
    {
      type: 'rawlist',
      name: 'color',
      message: 'What is your favorite color on this list?',
      choices: ['blue', 'yellow', 'green', 'orange', 'pink', 'beige', 'eggshell'],
    },
  ])
  .then(answers => {
    const user = answers.username;

      const url = 'https://api.github.com/users/' + user;
    
      const userJSON = JSON.parse(url);
      console.logu(url);
  
  });

//Creating new user  
const userProfile = new gitHubProfile();


function writeToFile(fileName, data) {
 
}

function init() {

init();

}