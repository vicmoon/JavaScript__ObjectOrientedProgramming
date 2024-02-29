'use strict';

//Constructor functions  
//Instance properties 
const Person = function(firstName, birthYear){
this.firstname = firstName; 
this.birthYear = birthYear;


//Never do this!!! 
this. calcAge = function(){
    console.log(2034 - this.birthYear);
}
}

const victoria = new Person('Victoria', 2034);


//a new object is created
//a function is clalles, this = {}
// {} linked ot a prototype 
//function automatically returns {}


const romain = new Person('Romain', 1991); 
const whoElse = new Person('Nobody', 2038); 
console.log(romain, whoElse);
console.log(victoria instanceof Person); // true 



