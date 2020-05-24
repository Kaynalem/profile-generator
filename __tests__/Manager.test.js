const Manager = require("../lib/Manager");

test("Set manager office number with constructor", () => {
    const officeNumber = "123-456-7890";
    const employee = new Manager("John", 123, "john@email.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});
test("getNumber() returns manager\'s office number", () => {
    const officeNumber = "123-456-7890";
    const employee = new Manager("John", 123, "john@email.com", officeNumber);
    expect(employee.getNumber()).toBe(officeNumber);
});

test("getRole() returns 'Manager'", () => {
    const title = "Manager";
    const employee = new Manager("John", 123, "john@email.com", "123-456-7890");
    expect(employee.getRole()).toBe(title);
});
