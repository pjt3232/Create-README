// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${response.description}
  
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
      
## Installation
${response.installation}
  
## Usage
${response.usage}
  
## License
[![License: ${response.license}](https://img.shields.io/badge/License-${encodeURIComponent(response.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(response.license)});
This application is covered under the ${response.license} license.
  
## Contributions
${response.contribution}
  
## Tests
${response.testing}
  
## Questions
If you have any questions or issues, feel free to reach out to me on [GitHub](https://github.com/${response.github}) or contact me at ${response.email}.
`;
}

module.exports = generateMarkdown;