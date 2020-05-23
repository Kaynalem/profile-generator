const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = 'Intern'
    }
    getTitle() {
        return this.title;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;