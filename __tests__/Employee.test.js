// Accessing Employee constructor
const Employee = require("../lib/Employee");

// Make employee object
test("creates employee object", () => {
  const employee = new Employee("Sean", 13, "seanwilliamfitzgerald@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// Access name from getName()
test("get employee name", () => {
  const employee = new Employee("Sean", 13, "seanwilliamfitzgerald@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// Access id from getId()
test("get employee ID", () => {
  const employee = new Employee("Sean", 13, "seanwilliamfitzgerald@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Access emails from getEmail()
test("get employee email", () => {
  const employee = new Employee("Sean", 13, "seanwilliamfitzgerald@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});
// Access role from getRole()
test("gets role of employee", () => {
  const employee = new Employee("Sean", 13, "seanwilliamfitzgerald@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
