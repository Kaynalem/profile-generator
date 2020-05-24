const Employee = require("../lib/Engineer");

test("Set employee GitHub username with constructor", () => {
    const github = "JohnGitHub";
    const employee = new Employee("John", 123, "john@email.com", github);
    expect(employee.github).toBe(github);
});
test("getGithub() returns GitHub username", () => {
    const github = "JohnGitHub";
    const employee = new Employee("John", 123, "john@email.com", github);
    expect(employee.getGithub()).toBe(github);
});

test("getRole() returns 'Engineer'", () => {
    const title = "Engineer";
    const employee = new Employee("John", 123, "john@email.com", "JohnGitHub");
    expect(employee.getRole()).toBe(title);
});

