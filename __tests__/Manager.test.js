// Accessing Manager constructor
const Manager = require("../lib/Manager");
// Make Manager object
test("creates an Manager object", () => {
  const manager = new Manager("Sean", 13, "seanwilliamfitzgerald@gmail.com", 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});
// Access role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Sean", 13, "seanwilliamfitzgerald@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
