
// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }, {
            type: 'input',
            message: 'Describe the application.',
            name: 'description',
        },{
            type: 'input',
            message: 'What would this site be used for?',
            name: 'usage',
        }, {
            type: 'input',
            message: 'How do you install the application?',
            name: 'install',
        }, {
            type: 'input',
            message: 'List the collaborators.',
            name: 'collaborators',
        }, { 
            type: 'checkbox',
            message: 'Which licenses were used?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'none'],
        }, {
            type:'input',
            message:'What are the contribution guidelines?',
            name:'contribution'
        }, {
            type: 'input',
            message: 'How do you test the application?',
            name: 'test',
            default: 'npm test',
        },{
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        }, {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }, 
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Creating ReadMe...✔️');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });

};
// Function call to initialize app
init();
