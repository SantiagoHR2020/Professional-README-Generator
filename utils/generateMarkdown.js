// function to generate markdown for README
function renderLi(license){
  return license.split(" ").join("%20")
}

function generateMarkdown(data) {
  var liName = renderLi(data.license);

  return `# ${data.projectTitle}
  ![gitHub License](https://img.shields.io/badge/License-${liName}-blue)

  ## Discription
  ${data.discription}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage Information](#Usage-Information)
  * [Contribution Guidelines](#Contribution-Guidelines)
  * [Test Instructions](#Test-Instructions)

  ## Installation
  ${data.installationInstructions}

  ## Usage-Information
  ${data.usageInformation}

  ## Contribution-Guidelines
  ${data.contributionGuidelines}

  ## Test-Instructions
  ${data.testInstructions}
`;
}

module.exports = generateMarkdown;
