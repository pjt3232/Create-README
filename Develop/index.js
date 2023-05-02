// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const markdown = require("./Utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Provide installation instructions for your project:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide usage instructions for your project:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Provide contribution guidelines for your project:',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Provide test instructions for your project:',
      name: 'testing',
    },
    {
      type: 'list',
      message: 'Choose a license for your project:',
      choices: ['N/A','MIT', 'GPLv3', 'Apache', 'BSD'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();