const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.title = 'Engineer'
    this.icon = '<i class="fas fa-glasses text-info"></i>'
    }
    getRole() {
        return this.title;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;