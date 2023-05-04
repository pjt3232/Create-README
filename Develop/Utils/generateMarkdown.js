// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license ==='No license') {
        return '';
    }

    return `
![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-yellow.svg)
`;
}

// Creates a function that returns the license link
// If there is no license, returns a License in the table of contents with no link
function renderLicenseLink(license) {
    if (license ==='No license') {
        return '* [License]';
    }

    return `* [License](#license)`;
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license ==='No license') {
        return '';
    }

    return `
## License
This project is licensed under the ${license} license.
${renderLicenseBadge(license)}
`
}

// Creates a function to generate markdown for README.md file to be used in index.js
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
  
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
      
## Installation
${data.installation}
  
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributions
${data.contribution}
  
## Tests
${data.testing}
  
## Questions
If you have any questions or issues, feel free to reach out to me on [GitHub](https://github.com/${data.github}) or contact me at ${data.email}.
`;
}

// Allows this JS file to be exported to the index.js file
module.exports = generateMarkdown;