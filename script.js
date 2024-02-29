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


// //a new object is created
// //a function is clalles, this = {}
// // {} linked ot a prototype 
// //function automatically returns {}


// const romain = new Person('Romain', 1991); 
// const whoElse = new Person('Nobody', 2038); 
// console.log(romain, whoElse);
// console.log(victoria instanceof Person); // true 



// // Prototypes   every function in JS has a prototype function 

// console.log(Person.prototype);

// Person.prototype.calcAge = function (){
//  console.log(2046 - this.birthYear);
// }; 

// victoria.calcAge();
// console.log(victoria.__proto__ === Person.prototype); 
// // the prototype here is what's going to be used wiht the person constructor function 
// //.prototypeOfLinkedObjects 
// //New operator is creating the proto property 

// Person.prototype.species  = "Homo sapiens";
// console.log(victoria.species, romain.species);

// const arr = [1, 2, 3, 4, 5,6,6, 5, 5,5, 7,8,9]; 

// Array.prototype.unique = function(){
//   return [...new Set(this)];
// } 
// console.log(arr.unique());


// const h1 = document.querySelector ('h1'); 
// console.dir( x => x+1); 



/// Challange 



// const Car = function(make, speed){
//     this.make= make;
//     this.speed= speed
// };

// Car.prototype.accelerate = function(){
//   const  speed =  this.speed + 10; 
//     console.log(`Your speed is ${speed}km/h`);
// };

// Car.prototype.brake = function(){
//    const  brake = this.speed - 5;
//     console.log(`You slowed down to ${brake}km/h`);
// }

// const BMW = new  Car ('BMW', 120);
// BMW.accelerate();
// BMW.brake(); 
// console.log(BMW); 
// const Mercedes = new Car('Mercedes', 95); 
// Mercedes.accelerate();
// Mercedes.brake();
// console.log(Mercedes);


// ES6 Classes 

// // class expression 
// const Greenish = class{ }




//class declaration 

//Challange 

class Cars {
    constructor(make, speed){
        this.make = make;
        this.speed = speed
    }
    accelerate(){
    const speed =  this.speed += 10; 
    console.log(`Your speed is ${speed}km/h`);
    }
  
    brake(){
    const  brake = this.speed - 5;
    console.log(`You slowed down to ${brake}km/h`);
    }


    get speedUS(){
        const newSpeed = this.speed /1.6;
        return `Your new speed is ${newSpeed} `; 
    }

    set speedUS(speed){
        const oldSpeed = this.speed /1.6;
        const newSpeed = oldSpeed * 1.6;
        return `Your newest speed is ${newSpeed}`;; 
    }
}

// const BMW = new Cars('BMW', 5);
// BMW.accelerate(); 
// BMW.brake(); 

const Ford  = new Cars('Ford', 120);
Ford.accelerate();
Ford.brake(); 
console.log(Ford.speedUS);
Ford.speedUS = 50;
console.log(Ford);




//     get latest(){
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov){
//         this.movements.push(mov)
//     },




// class GreenishFriend {
// constructor(fullName, birthYear){
//     this.fullName=  fullName; 
//     this.birthYear = birthYear; 
// }


// // // Methods will be added to .prototype property 
//     calcAge(){
//         console.log(5000- this.birthYear);
//     }

//     set fullName(name) {
//      console.log(name);
//      if(name.includes(' ')) this._fullName = name; 
//      else alert(`%{name} is not a full name`); 
//     }

//     get fullName(){
//         return this._fullName; 
//     }
// }

// const Maria = new Person('Maria Nagdalena', 3000); 
// Maria.calcAge(); 

// //classes are not hoisted
// //classes are first class citizens
//  //executed in strict mode 


//  const walter = new GreenishFriend('Walter', 1289); 

 //Settlers and Getters 

 //Getters and Setters 

//  const account = {
//     owner: 'Victoria', 
//     movements : [299, 400, 145, 300],


//     get latest(){
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov){
//         this.movements.push(mov)
//     },
//  }; 
//  account.latest = 1000;
//  console.log(account.latest); 


//Static Methods 

// Object.create 

// const PersonProto = {
//     calcAge() {
//         console.log(3000 -  this.birthYear);
//     },

//     init(firstName, birthYear){
//         this.firstName= firstName;
//          this.birthYear= birthYear 
//    },
// };

// const Steve = Object.create(PersonProto); 
// console.log(Steve);
// Steve.naem  = 'Steven';
// Steve.birthYear  = 1229; 
// Steve.calcAge(); 


// const sara = Object.create(PersonProto);
// sara.init('Sara',  2345); 
// sara.calcAge();