const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');

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
        name: 'managerName',
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
        name: 'managerId',
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
        name: 'managerEmail',
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
        name: 'managerNumber',
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
        const manager = new Manager (data.managerName, data.managerId, data.managerEmail, data.managerNumber);
        teamMembers.push(manager);
        //addMember();
    });  
};

const addEngineer = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'engineerName',
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
        name: 'engineerId',
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
        name: 'engineerEmail',
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
        name: 'engineerGithub',
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
        const engineer = new Engineer (data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        teamMembers.push(engineer);
        addMember();
    });
}

const addIntern = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'internName',
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
        name: 'internId',
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
        name: 'internEmail',
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
        name: 'internSchool',
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
        const intern = new intern (data.internName, data.internId, data.internEmail, data.internSchool);
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