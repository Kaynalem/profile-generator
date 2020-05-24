class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = 'Employee'
    }
    getRole() {
        return this.title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;