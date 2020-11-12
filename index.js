const inquirer = require("inquirer")
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user


const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title?',
        validate: answer => {
            if(answer !== "") {
                return true
            } "please enter a project title"
        }
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
 
      {
        type: 'input',
        name: 'discription',
        message: 'What is the project discription?',
      },
      {
        type: 'input',
        name: 'installationInstructions',
        message: 'What is the project installation instructions?',
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: 'What is the project discription?',
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What is the project contribution guidelines?',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'What is the project test instructions?',
      },
      {
        type: "list",
        message: "What type of license does your project uses?",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "NA",
        ],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubUsername",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
   .then(answers => {
       writeToFile("README.md", generateMarkdown(answers)) 
   })

    
}

// function call to initialize program
init();
