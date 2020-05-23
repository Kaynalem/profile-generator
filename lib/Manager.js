const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, number) {
    super(name, id, email);
    this.number = number;
    this.title = 'Manager'
    }
    getTitle() {
        return this.title;
    }
    getNumber() {
        return this.number;
    }
}

module.exports = Manager;