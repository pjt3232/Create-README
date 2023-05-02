//Grabs the inquirer, file system, and generateMarkdown.js file to use in this JS file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown.js');

// Questions to determine what the user is going to include in their README.md file
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
      type: 'list',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache', 'BSD'],
      name: 'license',
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

// Creates a function to write README.md file and shows if its successful or not in the console
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Succesfully created README.md file!')
    );
}

// Creates a function to initialize app and create README.md file
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();