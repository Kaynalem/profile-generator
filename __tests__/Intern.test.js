const Intern = require("../lib/Intern");

test("Set intern\'s school with constructor", () => {
    const school = "UT Austin";
    const intern = new Intern("John", 123, "john@email.com", school);
    expect(intern.school).toBe(school);
});
test("getSchool() returns intern\'s school", () => {
    const school = "UT Austin";
    const intern = new Intern("John", 123, "john@email.com", school);
    expect(intern.getSchool()).toBe(school);
});

test("getRole() returns 'Intern'", () => {
    const title = "Intern";
    const intern = new Intern("John", 123, "john@email.com", "UT Austin");
    expect(intern.getRole()).toBe(title);
});