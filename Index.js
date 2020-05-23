const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');


const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')

const teamMembers = [];

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
                buildTeam();
                break;
            //default: 
                //buildTeam();
        }
    });
}
const addManager = () => {
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
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter manager\'s email address!');
                return false;
                }
            }
        },
        {
        type: 'input',
        name: 'number',
        message: 'What is the team manager\'s office number? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter manager\'s office number!');
                return false;
                }
            }
        },
    ]).then(data => {
        const manager = new Manager (name, id, email, number);
        teamMembers.push(manager);
        //addMember();
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
            if (nameInput) {
                return true;
                } else {
                console.log('Please engineer\'s email address!');
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
        const engineer = new Engineer (name, id, email, github);
        teamMembers.push(engineer);
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
            if (nameInput) {
                return true;
                } else {
                console.log('Please intern\'s email address!');
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
        const intern = new Intern (name, id, email, school);
        teamMembers.push(intern);
        addMember();
    });  
}

const init = () => {
    console.log(`
    Let\'s build your team!
`);
addManager()
    .then(addMember)
    .then(profileData => {
        return generatePage(profileData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}
// function call to initialize program
init();