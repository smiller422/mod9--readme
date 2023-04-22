// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//licensebadge is an object that links licence names to badgeurl,
// console.log(licenseBadge),
//renderlisbadge function checks if user responce is in licbadge object and if it is returns the url

function renderLicenseBadge(license) {
  const licenseBadge = [
    // require('inquirer'); removing thisbc its a list of badges not questions for user, but dont they pick?
    "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  ];
  if (license in licenseBadge) {
    return licenseBadge[license];
  } else {
    return "";
    //
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string   use switch???????????????   switch(license) / case "mit": lis link /break;
function renderLicenseLink(license){
let link = ""
switch(license) {
  case "MIT":
    return "[MIT](https://opensource.org/licenses/MIT)";
    break;
  case "Apache":
    return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    break;
    case "Boost":
    return "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
    break;
  default:
    link = ""
}
   return link;
}

// function renderLicenseLink(license) {
//   // license = license.toLowerCase()
//   const link = "";
//   if (!license) {
//     return "";
//   } else if (license === "MIT" || license ==="mit") {
//     //return the lisences link
//     link = "[MIT]()";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const licenseSection = [];

function renderLicenseSection(license) {
if (!license) {
  return "";
} else {
  //return the lisences sectionk- whicj is basically linking the badge and link together
  const licenseBadge = `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  const licenseLink = renderLicenseLink(license);
  return `## License\n${licenseBadge}\n\n${licenseLink}`;
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n

  ## Description
  #${data.description}\n

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)\n
      

  ## Installation
  #${data.install}\n

  ## Usage
  #${data.usage}\n

   ## License
   ${renderLicenseSection(data.license)}

  ## Contributing
  #${data.contributing}\n

  ## Tests
  #${data.tests}\n

  ## Confirm
  #${data.confirm}\n
 `;
}

module.exports = generateMarkdown;
