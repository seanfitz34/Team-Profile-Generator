// Accessing Engineer constructor
const Engineer = require("../lib/Engineer");

// Make Engineer object
test("create an Engineer object", () => {
  const engineer = new Engineer(
    "Sean",
    13,
    "seanwilliamfitzgerald@gmail",
    "seanfitz34"
  );

  expect(engineer.github).toEqual(expect.any(String));
});
// Access github from getGithub()
test("get engineer github ", () => {
  const engineer = new Engineer(
    "Sean",
    13,
    "seanwilliamfitzgerald@gmail",
    "seanfitz34"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});
//Access role from getRole()
test("gets role of employee", () => {
  const engineer = new Engineer(
    "Sean",
    13,
    "seanwilliamfitzgerald@gmail",
    "seanfitz34"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
