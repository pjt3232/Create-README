// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }

    return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-yellow.svg)`;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }

    return `* [License](#license)`;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `
## License
This project is licensed under the ${license} license. Click [info](${renderLicenseLink(license)}) for more information.
${renderLicenseBadge(license)}
`
}

// Creates a function to generate markdown for README.md file to be used in index.js
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${response.description}
  
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
      
## Installation
${response.installation}
  
## Usage
${response.usage}
  
${renderLicenseSection(data.license)}
  
## Contributions
${response.contribution}
  
## Tests
${response.testing}
  
## Questions
If you have any questions or issues, feel free to reach out to me on [GitHub](https://github.com/${response.github}) or contact me at ${response.email}.
`;
}

// Allows this JS file to be exported to the index.js file
module.exports = generateMarkdown;