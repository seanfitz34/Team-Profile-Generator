// Importing Employee constructor
const Employee = require("./Employee");

// Manager constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  // Overrides employee to Manager
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
