// function to generate markdown for README
function renderLi(license){
  return license.split(" ").join("%20")
}

function generateMarkdown(data) {
  var liName = renderLi(data.license);

  return `
  # ${data.projectTitle}

  ## Author
  ${data.name}

  ![gitHub License](https://img.shields.io/badge/License-${liName}-blue)

---

  ## Description
  ${data.discription}

---

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage Information](#Usage-Information)
  * [Contribution Guidelines](#Contribution-Guidelines)
  * [Test Instructions](#Test-Instructions)
  * [Questions](#Questions)

---

  ## Installation
  ${data.installationInstructions}

---

  ## Usage-Information
  ${data.usageInformation}
  
---

  ## Contribution-Guidelines
  ${data.contributionGuidelines}
  
---

  ## Test-Instructions
  ${data.testInstructions}

---

  ## Questions
  * GibHub user name: ${data.githubUsername} 
  * GibHub link: https://github.com/${data.githubUsername}
  * E-mail: ${data.email}
`;
}

module.exports = generateMarkdown;
