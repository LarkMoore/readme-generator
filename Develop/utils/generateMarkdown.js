// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC))`
  }
  else if (license === "MIT") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else {
    return `no license available`
  }
}

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) { 
    if (license === "APACHE 2.0") {
      return `[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (license === "ISC") {
      return `[ISC](https://opensource.org/licenses/ISC))`
    }
    else if (license === "MIT") {
      return `[MIT](https://opensource.org/licenses/MPL-2.0)`
    }
    else if (license === "Mozilla") {
      return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`
    }
    else {
      return ``
    }
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "none") {
      return `##License

  This application is currently using the ${license} license`
    }
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Menu

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Test](#test)

* [Questions](#questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseLink(data.license)}

## Contributing

${data.contribute}

## Test

To start the test, Please run the command below:

\`\`\`
${data.test}
\`\`\`

## Questions

For any questions please reach out to: ${data.email}

`
  }

  module.exports = generateMarkdown;