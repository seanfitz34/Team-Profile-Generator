
// Employee constructor
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id
        this.email = email
    }
    // Returns name from input
    getName (){
        return this.name;
    }
      // Returns ID from input
    getId (){
        return this.id;
    }
      // Returns Email from input
    getEmail (){
        return this.email;
    }
}
module.exports = Employee