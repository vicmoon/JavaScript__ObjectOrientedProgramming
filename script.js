'use strict';

//Constructor functions  
//Instance properties 
// const Person = function(firstName, birthYear){
// this.firstname = firstName; 
// this.birthYear = birthYear;
// //Never do this!!! 
// this. calcAge = function(){
//     console.log(2034 - this.birthYear);
// }
// }

// const victoria = new Person('Victoria', 2059);


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

// class Cars {
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed
//     }
//     accelerate(){
//     const speed =  this.speed += 10; 
//     console.log(`Your speed is ${speed}km/h`);
//     }
  
//     brake(){
//     const  brake = this.speed - 5;
//     console.log(`You slowed down to ${brake}km/h`);
//     }


//     get speedUS(){
//         const newSpeed = this.speed /1.6;
//         return `Your new speed is ${newSpeed} `; 
//     }

//     set speedUS(speed){
//         const oldSpeed = this.speed /1.6;
//         const newSpeed = oldSpeed * 1.6;
//         return `Your newest speed is ${newSpeed}`;; 
//     }
// }

// // const BMW = new Cars('BMW', 5);
// // BMW.accelerate(); 
// // BMW.brake(); 

// const Ford  = new Cars('Ford', 120);
// Ford.accelerate();
// Ford.brake(); 
// console.log(Ford.speedUS);
// Ford.speedUS = 50;
// console.log(Ford);




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


// class inheritance : 


// const Person = function(firstName, birthYear){
//     this.firstName = firstName; 
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function(){
//     console.log(2035 - this.birthYear);
// }
    

// const Student = function (firstName,birthYear,course){
//     Person.call(this, firstName, birthYear);
//     console.log(this);
//     this.course = course; 
// };

// // Linking protypes 

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jack =  new Student('Mike', 2004, 'Programming'); 
// console.log(jack);
// jack.introduce(); 
// jack.calcAge(); 

// console.log(jack.__proto__.__proto__);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);


// // Challange 

// const Car  = function(make, speed){
//         this.make = make
//         this.speed = speed
//     }; 


//     Car.prototype.accelerate=  function () {
//     const speed =  this.speed += 10; 
//     console.log(`Your speed is ${speed}km/h`);
//     };
  
//     Car.prototype.brake = function(){
//     const  brake = this.speed - 5;
//     console.log(`You slowed down to ${brake}km/h`);
//     }


//     // get speedUS(){
//     //     const newSpeed = this.speed /1.6;
//     //     return `Your new speed is ${newSpeed} `; 
//     // }

//     // set speedUS(speed){
//     //     const oldSpeed = this.speed /1.6;
//     //     const newSpeed = oldSpeed * 1.6;
//     //     return `Your newest speed is ${newSpeed}`;; 
//     // }

// const ElectricCar  = function(make, speed, charge){
//       Car.call(this, make, speed); 
//       this.charge = charge; 
// }


// // linking the prototype 
// ElectricCar.prototype = Object.create(Car.prototype); 

// //
// ElectricCar.prototype.chargeBattery = function(chargeTo){
//    this.charge = chargeTo; 
// }; 

// ElectricCar.prototype.accelerate = function(speed){
//     const newSpeed = this.speed += 20; 
//     const newCharge = this.charge--; 
//     console.log(`Tesla going at ${newSpeed} km/h, with a charge of ${newCharge}%`);
// }


//  const Tesla = new ElectricCar('Tesla', 120, 23);
//  Tesla.accelerate(); 
//  Tesla.accelerate(); 
//  Tesla.accelerate(); 
//  Tesla.chargeBattery(90);


// Inheritance Between Classes 

// class PersonCL{
//     constructor(firstName, birthYear) {
//         this.firstName = firstName; 
//         this.birthYear = birthYear; 

//     }

//     // Instance methods 

//     calcAge() {
//         console.log(2045 -this.birthYear);
//     }

//     greet(){
//         console.log(`Hey ${this.firstName}`);
//     }

//     get age(){
//         return 2035 - this.birthYear;
//     }

//     set fullName(name){
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName(){
//         return this._fullName; 
//     }

// }

// class StudentCL extends PersonCL{
//     constructor(fullName, birthYear, course){

//         //Needs to happen first 
//         super(fullName, birthYear)
//         this.course = course; 
//     }
    
// }

// const marta = new StudentCL('Martha Jones', 2023, 'Computers'); 
// console.log(marta);


// Inheritance between Classes 


// const PersonProto  = {
//     calcAge() {
//     console.log(2090 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName; 
//         this.birthYear= birthYear;
//     }, 

// }

// const steven =  Object.create(PersonProto); 
// const StudentProto = Object.create(PersonProto); 
// StudentProto.init = function(firstName, birthYear, course){
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course; 
// }


// const jay  = Object.create(StudentProto); 
// jay.init('Jay', 2039, ' Commputer Science'); 



//Public fields 
//Private fields 
//Public methods 
//Private methods 


// class account {

//     //Public fields (instances)
//        locale = navigator.language
//     //    _movements = []; 

//      //Private fields 
//      #movements = []; 
//      #pin;

//     constructor(owner, currency, pin){
//         this.owner = owner; 
//         this.currency  = currency;
//         //protected
//         this.#pin = pin; 
//         // this._movements = [];
//         // this.locale  = navigator.language; 

//         console.log(`Thanks for opening an account ${owner}`);
//     }

//    // Public interface  or // Public methods 
//      getMovements() {
//         return this.#movements;
//      }

//     deposit(val){
//         this.#movements.push(val);
//         return this; 
//     }

//     withdraw(val){
//         this.deposit(-val)
//         return this;
//     }

//     _approveLoan(val){
//         return true;
//         return this;
//     }
//     requestLoad(val){
//         if(this._approveLoan(val)){
//             console.log('Loan approved');
//         }
//         return this;
//     }


//     //Private methods 

//     _approveLoan(val){
//         return true;
//     }
// }


// const acc1 = new account( 'Victoria', 'EUR', 1111); 


// acc1.deposit(150);
// acc1.withdraw(120);
// acc1.requestLoad(1000); 
// acc1.approveLoan(2000); // we should not be able to access this method 
// console.log(acc1.pin);
// console.log(acc1.getMovements);
// // console.log(acc1.#movements);

// //ENCAPSULATION 

// // _fieldName 


// //Chaining 

// acc1.deposit(300)



