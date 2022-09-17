// Importing Employee constructor
const Employee = require("./Employee");

// employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github

    }
    // Returns github from input 
    getGithub(){
        return this.github;
    }
    // Overrides employee to enginneer
    getRole(){
        return "Engineer"
    }
  

}
module.exports = Engineer