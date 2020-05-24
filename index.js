const inquirer = require('inquirer');
const buildTeam = require('./src/page-template.js');

const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')

const teamArr = [];

const addMember = () => {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'addMember',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any other members']
        }
    ]).then(data => {
        switch(data.addMember) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'I don\'t want to add any other members':
                buildTeam(teamArr);
                break;
            default: 
                buildTeam(teamArr);
        }
    });
}
const promptUser = () => {
    console.log(`
    Let\'s build your team!
    `); 
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter manager\'s name!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s employee ID? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter manager\'s employee ID!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email address? (Required)',
        validate: nameInput => {
            //validate email address is in correct format of _@_._
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nameInput)) {
                return true;
                } else {
                console.log('Please enter a valid email address!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number? (Required)',
        validate: nameInput => {
            if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(nameInput)) {
                return true;
                } else {
                console.log('Please enter a valid phone number!');
                return false;
                }
            }
        },
    ]).then(data => {
        const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
        teamArr.push(manager);
        addMember();
    });  
};

const addEngineer = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter engineer\'s name!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s employee ID? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter engineer\'s employee ID!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email address? (Required)',
        validate: nameInput => {
            //validate email address is in correct format of _@_._
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nameInput)) {
                return true;
                } else {
                console.log('Please enter a valid email address!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub username? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter engineer\'s GitHub username!');
                return false;
                }
            }
        }
    ]).then(data => {
        const engineer = new Engineer (data.name, data.id, data.email, data.github);
        teamArr.push(engineer);
        addMember();
    });
}

const addIntern = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter intern\'s name!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s employee ID? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter intern\'s employee ID!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email address? (Required)',
        validate: nameInput => {
            //validate email address is in correct format of _@_._
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nameInput)) {
                return true;
                } else {
                console.log('Please enter a valid email address!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter intern\'s school!');
                return false;
                }
            }
        }
    ]).then(data => {
        const intern = new Intern (data.name, data.id, data.email, data.school);
        teamArr.push(intern);
        addMember();
    });  
}

// function call to initialize program
promptUser();
