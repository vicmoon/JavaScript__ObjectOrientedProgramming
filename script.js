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

const victoria = new Person('Victoria', 2059);


//a new object is created
//a function is clalles, this = {}
// {} linked ot a prototype 
//function automatically returns {}


const romain = new Person('Romain', 1991); 
const whoElse = new Person('Nobody', 2038); 
console.log(romain, whoElse);
console.log(victoria instanceof Person); // true 



// Prototypes   every function in JS has a prototype function 

console.log(Person.prototype);

Person.prototype.calcAge = function (){
 console.log(2046 - this.birthYear);
}; 

victoria.calcAge();
console.log(victoria.__proto__ === Person.prototype); 
// the prototype here is what's going to be used wiht the person constructor function 
//.prototypeOfLinkedObjects 
//New operator is creating the proto property 

Person.prototype.species  = "Homo sapiens";
console.log(victoria.species, romain.species);

const arr = [1, 2, 3, 4, 5,6,6, 5, 5,5, 7,8,9]; 

Array.prototype.unique = function(){
  return [...new Set(this)];
} 
console.log(arr.unique());


const h1 = document.querySelector ('h1'); 
console.dir( x => x+1); 


