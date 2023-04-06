// TODO: Include packages needed for this application

const generateMarkdown = require("./generateMarkdown") // .. is like the cd .. in bash
const inquirer = require('inquirer');
const fs = require('fs');

// var prompt = require('prompt');
// TODO: Create an array of questions for user input

//         Key- The 'name' property of the 'question' object
//prompt method?
// inquirer.prompt(questions) //adding this made the terminal clean up (not throwing errors)

const questions  = [
    {
      type: 'input',
      message: 'Project Title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'A Readme description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Table of Content:',
      name: 'content',
    },
    {
      type: 'input',
      message: 'Installation:',
      name: 'instal',
    },
    {
      type: 'input',
      message: 'Usage:',
      name: 'usage',
    },
  {
      type: 'input', //4 lic. keys- none + mit ect...
      message: 'License: MIT, BSL',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Contributing:',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Tests:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Questions:',
      name: 'confirm',
    },
]

// TODO: Create a function to write README file
let fileName = 'readMe.md'; //creating a variable , the readme.md is being generated 

function writeToFile(fileName, data) {
  fs.appendFile(fileName, data,  (err) => {
    err ? console.error(err) : console.log('Success!');
});
}
  
// .then((response) =>  {
//   console.log(response)
//   writeToFile("./readMe.md", response.title.toUpperCase())
//   fs.appendFile('./readMe.md', response.description, err => {
//     if (err) {
//       console.error(err);
//     } else {
//       response.confirm === response.password //pulled in from code, password?
//         ? console.log('Success!')
//         : console.log('Thank you!!')
//     }
//   });
// });
// TODO: Create a function to initialize app
function init() {
  //propmpt user for questions in array above
inquirer.prompt(questions)
//.then function creating response
.then((response) => 
  // generate markdownfile with the users responce
  //const markdown = generateMarkdown(response); why is this here??????????????
  // then write the read me file with that info
writeToFile(fileName, generateMarkdown (response)));  //generate markdown is being 
// console.log('data saved to file.');


// .catch((error) => {
//   console.error('Error:', error);
// });
}
// Function call to initialize app
init();


























// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```