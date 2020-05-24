const Engineer = require("../lib/Engineer");

test("Set egineer\'s GitHub username with constructor", () => {
    const github = "JohnGitHub";
    const engineer = new Engineer("John", 123, "john@email.com", github);
    expect(engineer.github).toBe(github);
});
test("getGithub() returns GitHub username", () => {
    const github = "JohnGitHub";
    const engineer = new Engineer("John", 123, "john@email.com", github);
    expect(engineer.getGithub()).toBe(github);
});

test("getRole() returns 'Engineer'", () => {
    const title = "Engineer";
    const engineer = new Engineer("John", 123, "john@email.com", "JohnGitHub");
    expect(engineer.getRole()).toBe(title);
});

