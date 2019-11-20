//All the npm packages
const fs = require("fs");
const pdfmake = require("pdfmake");
const inquirer = require("inquirer");
const axios = require("axios");

//github object
function gitHubProfile(username) {
  username = username;
  image = '';
  locationLink = '';
  gitHubLink = '';
  userBlog = '';
  userBio = 'Here goes the bio';
  repositoryNum = 0;
  followerCount = 0;
  following = 0;
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

    const config = answers.username;

    axios.get('https://api.github.com/users/', config)
      .then(function (res) {

        //Creating new user  
        const userProfile = new gitHubProfile(config);
        userProfile.image = res.avatar_url;
        userProfile.gitHubLink = res.url;
        userProfile.userBlog = res.blog;
        userProfile.userBio = res.bio;
        userProfile.repositoryNum = res.public_repos;
        userProfile.followerCount = res.followers;
        userProfile.following = res.following;

        console.log(userProfile)

       /* fs.writeFile("userInfo.pdf", userProfile, function(err) {

          if (err) {
            return console.log(err);
          }
        
          console.log("File Created!");
        
        }); */
        
      })
  })