/**
 * Object??
 * JSON
 * 
 * Class Object
 * 
 * JSON  - Javascript Object Notation
 * 
 * It is used to store and structure data(properties and methods)
 * 
 */

const student = {
    name : 'John Doe',
    age: 18,
    department: 'Geology',
    admission_number: '080723'
};


console.log(student.name);

console.log(student['name']);//not commonly used except is some edge cases

//anonymous function
const person = {
    first_name : '',
    last_name : '',
    age: 10,
    isAlive: true,
    setFirstName : function (firstname){
        this.first_name = firstname;
    },
    setLastName: function (lastname){
        this.last_name = lastname;
    },
    fullname: function(){
        return this.first_name + " " + this.last_name;
    }
};

person.setFirstName("John");
person.setLastName("Doe");

console.log(person.isAlive);

const me = {
    name: "Kay Adams",
    age : 55,
    siblings : {
        secondBorn : {
            name : 'Femi',
            age:30,
            fullname: function(){
                
            }
        },
        lastBorn: {
            name : 'Muyiwa',
            age:25
        }
    }
}

console.log(me.siblings.lastBorn.name);
