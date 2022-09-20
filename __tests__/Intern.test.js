// Accessing Intern constructor
const Intern = require("../lib/Intern");
// Make Intern object
test("create an Intern object", () => {
  const intern = new Intern("Sean", 13, "seanwilliamfitzgerald@gmail", "UCLA");
  expect(intern.school).toEqual(expect.any(String));
});
// Access school from getSchool()
test("gets employee school", () => {
  const intern = new Intern("Sean", 13, "seanwilliamfitzgerald@gmail", "UCLA");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});
// Accessing role from getRole()
test("gets role of employee", () => {
  const intern = new Intern("Sean", 13, "seanwilliamfitzgerald@gmail", "UCLA");

  expect(intern.getRole()).toEqual("Intern");
});
