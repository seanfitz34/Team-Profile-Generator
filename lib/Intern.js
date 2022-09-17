// Importing Employee constructor
const Employee = require("./Employee");

// employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // Returns school from input
  getSchool() {
    return this.school;
  }
  // Overrides employee to Intern
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
