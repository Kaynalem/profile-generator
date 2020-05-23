//const buildTeam = teamArr => {
    //return `
    function buildTeam ()  {
        const htmlArr = [];
        const htmlMain =`
    <!DOCTYPE html> 
    <html lang="en"> 

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    `
    htmlArr.push(htmlMain);
        for (let i = 1; i < teamArr.length; i++) {
            let member = `
            <div>
            <div>
                <h2>${teamArr[i].name}</h2>
                <h3>${teamArr[i].title}</h3>
            </div>
            <div>
                <p>Employee ID:${teamArr[i].id}</p>
                <p>Email: <a href="mailto:${teamArr[i].email}>${teamArr[i].email}</a></p>
            `
            if (teamArr[i].number){
                member += `
                <p>${teamArr[i].number}</p>
                `
            }
            if (teamArr[i].github){
                member += `
                <p>Github: <a href="https://github.com/${teamArr[i].github}">${teamArr[i].github}</a></p>
                `
            }
            if (teamArr[i].school){
                member += `
                <p>School: ${teamArr[i].school}</p>
                `
            }
            member +=`
                </div>
            </div>
            `;
            htmlArr.push(member)
        }
    const htmlEnd = `
                </div>
            </body>
    </html>
    `
    htmlArr.push(htmlEnd);
    
    fs.writeFile('./dist/index.html', htmlArr.join(""), err => {
        if (err) throw err;
        console.log('Team Profile created! Check out index.html in dist directory to see it!')
    });
    }
//module.exports = buildTeam