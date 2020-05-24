const Employee = require("../lib/Employee");

test("Create Employee instance from Employee class", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Set employee name with constructor", () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Set id number with constructor", () => {
    const id = 123;
    const employee = new Employee("John", id);
    expect(employee.id).toBe(id);
});

test("Set employee email address with constructor", () => {
    const email = "john@email.com";
    const employee = new Employee("John", 123, email);
    expect(employee.email).toBe(email);
});

test("getRole() returns 'Employee'", () => {
    const title = "Employee";
    const employee = new Employee("John", 123, "john@email.com");
    expect(employee.getRole()).toBe(title);
});

test("getName() returns employee name", () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("getId() returns id number", () => {
    const id = 123;
    const employee = new Employee("John", id);
    expect(employee.getId()).toBe(id);
});

test("getEmail() returns email address", () => {
    const email = "john@email.com";
    const employee = new Employee("John", 123, email);
    expect(employee.getEmail()).toBe(email);
});

