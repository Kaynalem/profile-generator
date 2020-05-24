const fs = require('fs');

buildTeam = teamArr => {
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
    <body class="bg-secondary">
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
                <div class="card bg-light border-dark shadow-lg" style="max-width: 18rem; min-width: 14rem;">
                    <div class="card-header text-white bg-dark mb-3">
                        <h2>${teamArr[i].name}</h2>
                        <h3 class="text-white-50">${teamArr[i].icon} ${teamArr[i].title}</h3>
                    </div>
                    <div>
                        <p class="card-text m-3">Employee ID: ${teamArr[i].id}</p>
                        <p class="card-text m-3">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></p>
        `
        
        if (teamArr[i].officeNumber){
            member += `
                        <p class="card-text m-3"><i class="fas fa-phone-square-alt"></i> Number: ${teamArr[i].officeNumber}</p>
            `
        }
        if (teamArr[i].github){
            member += `
                        <p class="card-text m-3"><i class="fab fa-github mr-2"></i>GitHub: <a href="https://github.com/${teamArr[i].github}" target="_blank">${teamArr[i].github}</a></p>
            `
        }
        if (teamArr[i].school){
            member += `
                        <p class="card-text m-3"><i class="fas fa-university"></i> School: ${teamArr[i].school}</p>
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

    fs.writeFile('./output/index.html', htmlArr.join(""), err => {
        if (err) throw err;
        console.log('Team Profile created! Check out index.html in the output directory to see it!')
    });
}

    module.exports = buildTeam