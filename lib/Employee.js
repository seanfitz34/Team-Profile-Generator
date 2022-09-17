
// Employee constructor
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id
        this.email = email
    }
    // Returns from input
    getName (){
        return this.name;
    }
    getId (){
        return this.id;
    }
    getEmail (){
        return this.email;
    }
}
module.exports = Employee