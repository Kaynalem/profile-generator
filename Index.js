const inquirer = require('inquirer');
//const { writeFile, copyFile } = require('./utils/generate-site.js');
//const buildTeam = require('./src/page-template.js');
const fs = require('fs');

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
        const name = data.name
        const id = data.id
        const email = data.email
        const number = data .number
        const manager = new Manager (name, id, email, number);
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
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.github
        const engineer = new Engineer (name, id, email, github);
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
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data .school
        const intern = new Intern (name, id, email, school);
        teamArr.push(intern);
        addMember();
    });  
}

function buildTeam ()  {
    const htmlArr = [];
    const htmlStart =`
<!DOCTYPE html> 
<html lang="en"> 

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>My Team</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body>
<header class="bg-dark">
    <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-white text-center">My Team</h1>
    </div>
</header>
    <div class="container mt-5">
    <div class="row mx-auto d-flex justify-content-center">
`
htmlArr.push(htmlStart);
    for (let i = 0; i < teamArr.length; i++) {
        let member = `
        <div class="col-sm-3 mb-5">
        <div class="card bg-light" style="max-width: 18rem; min-width: 14rem;">
        <div class="card-header text-white bg-secondary mb-3">
            <h2>${teamArr[i].name}</h2>
            <h3><i class="fas fa-user"></i> ${teamArr[i].title}</h3>
        </div>
        <div>
            <p class="card-text m-3">Employee ID:${teamArr[i].id}</p>
            <p class="card-text m-3">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></p>
        `
        
        if (teamArr[i].number){
            member += `
            <p class="card-text m-3">Office number: ${teamArr[i].number}</p>
            `
        }
        if (teamArr[i].github){
            member += `
            <p class="card-text m-3"><i class="fab fa-github mr-2"></i>GitHub: <a href="https://github.com/${teamArr[i].github}">${teamArr[i].github}</a></p>
            `
        }
        if (teamArr[i].school){
            member += `
            <p class="card-text m-3">School: ${teamArr[i].school}</p>
            `
        }
        
        member +=
        `
        </div>
        </div>
        </div>
        `;
        htmlArr.push(member)
    }
    
const htmlEnd = `
        </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    </body>
</html>
`
htmlArr.push(htmlEnd);

fs.writeFile('./dist/index.html', htmlArr.join(""), err => {
    if (err) throw err;
    console.log('Team Profile created! Check out index.html in dist directory to see it!')
});
}


const init = () => {
    console.log(`
    Let\'s build your team!
`);



addManager()

    /*.then(profileData => {
        return buildTeam(profileData);
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
    });*/
}
// function call to initialize program
init();