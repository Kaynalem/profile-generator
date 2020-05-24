const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title = 'Manager'
    this.icon = '<i class="fas fa-mug-hot text-info"></i>'
    }
    getRole() {
        return this.title;
    }
    getNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;