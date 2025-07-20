// Function declarations, expressions, and arrow functions

// TYPE 1 : to declare a function using simple functions in javascript AKA FUNCTION-STATMENT
// function lolo(){
//   console.log("I am a function statment")
// }
// lolo();

// // TYPE 2 : to declare a function using variables AKA FUNCTION-EXPRESSION
// let fnc = function (){
//   console.log("I am a function expression")
// }
// fnc();

// // TYPE 3 : to declare a function using FAT ARROW METHOD AKA ARROW-FUNCTION
// let func = ()=>{
//   console.log("I am an arrow function")
// }
// func();


// Parameters vs Arguments


// example 1
// function dance(v1){
//   console.log(`${v1} is dancing`)
// }
// dance("elephant")
// dance("deer")

// example 2
// function add(v1,v2){//here the v1 and v2 are "PARAMETERS"
//   // let sum = v1+v2
//   // console.log(sum)
//   console.log(v1+v2)
// }
// add(2,2)// here both the values are acting as "ARGUMENTS" to the function which are taken by the function and used as its parameters

// Parameters: Default, rest and spread:

// DEFAULT:
//function add(v1=0,v2=0){ here we are setting default values for the parameters which are known as default parameters here. 
  //console.log(v1+v2);this will show NaN because two non numbers are being added here
//}
//add()

//REST: 
// POINT: rest operator tab use hota ha jab arguments bht sara hoon to zahir si bat ha parameters bhi utna bhi banana parainga. or is cheez sa bachna ka lia hum rest (...) ka use karta hota hain. agar ... ya function ki parameter wali jagah par laga to samjh jao ka ya as a rest operator use ho raha ha and agar wo arrays ya objects main lag raha ho to wo spread operatot kehlata ha

// function abcd(...val){
//   console.log(val)
// }
// abcd(1,2,3,4,5,6,7,8,9,10)

//SPREAD: we will study this after the completion of arrays and objects


//CLOSURES -> aik function jo return kara aik or function. aur return hona wala function hamesha use kara parent function ka koi variable
// function abcd(){
//   let a = 12;
//   return function(){
//     console.log(a)
//   }
// }
// abcd()


// Lexical scoping
// function abcd(){
//   let a = 12// is a ko ap is poora abcd() ka andar to use kar sakta ho lakin is function ka bahar ni use kar sakta
//   function defg(){
//     let b = 13// is b ko ap is pora defg() ma use kar sakta ho. na hi is sa pehla or na hi is ka bad
//     function ghij(){
//       let c = 14// is c ko ap is pora ghij() ma use kar sakta ho. na hi is sa pehla or na hi is ka bad
//     }
//   }
// }


//IFEE( immediatly invoked function expression ) they have no name just a set of ( ) around the function itself
// (function(){
//   console.log("hehehe");
// })()

//Hoisting differences between declaration and expression
// abcd()




// // this is hoisting that before making your function you can use it in javascript it is allowed




// function abcd(){
//   console.log("huuuhuuuu")
// }

//hoisting works for function statments like it did above, but you will see hoisting wont work for function expressions as mentioned below:
// abcd()








// let abcd = function(){
//   console.log("huuuhuuuu")
// }


// SO THE FINAL DECISION IS THAT FUNCTION STATMENTS CAN BE HOISTED BUT FUNCTION EXPRESSIONS CANT BE HOISTED



// PRACTICE SET:

//Q1 Whats the difference between function declaration and function expression in terms of hoisting?

//ANSWER:

// abcd()




// // this is hoisting that before making your function you can use it in javascript it is allowed




// function abcd(){
//   console.log("huuuhuuuu")
// }

//hoisting works for function statments like it did above, but you will see hoisting wont work for function expressions as mentioned below:
// abcd()








// let abcd = function(){
//   console.log("huuuhuuuu")
// }


// SO THE FINAL DECISION IS THAT FUNCTION STATMENTS CAN BE HOISTED BUT FUNCTION EXPRESSIONS CANT BE HOISTED


//Q2 What will be the output for this?
// greet()

// function greet(){
//   console.log("hello!")
// }
//it will show hello! as it is a function statment so thats why hoisting is being possible here

// Q3 Convert this function into an arrow function:
// function multiply(a,b){
//   return a*b;
// }

// let multiply = function(a,b){
//   return a*b;
// }

// Q4 Identify the parameters and the arguments?
// function welcome(name){//this is the PARAMETER
//   console.log(name);
// }
// welcome("wahab")// And here comes the ARGUMENT for the function welcome()

// Q5 how many parameters does this function has and how many arguments are passed?
// function demo(a,b,c){
// }
// demo(1,2)
// 1 goes to a, 2 goes to b, and c is undefined because there is no further value in arguments available

// Q6 use rest parameter to accept any number of scores and return the total:
// function getScore(...scores){
//   let total = 0
//   scores.forEach(function(val){
//     total = total+val;
//   });
//   return total
// }
// console.log(getScore(10,12,14,17))

// Q7 Convert this normal function to an IFEE:
// function init(){
//   console.log("initialized")
// }
// -->
// (function init(){
//   console.log("initialized")
// })()

// PRACTICE QUESTIONS PART 2

// Q1 WRITE A BMI CALCULATOR:
// function bmi(w,h){
//   return w / (h*h);
// }
// console.log(bmi(84,1.6).toFixed(2))  

// Q2 Create a reuseable discount calculator (HOF)
// function discountCalculator (discount){
//   return function(price){
//     return price - price * (discount/100);
//   }
// }

// // let discounter = discountCalculator(10)
// // console.log(discounter(200))

// let ten = discountCalculator(10)
// let twenty = discountCalculator(20)

// console.log(ten(1200))
// console.log(twenty(1200))

//Q3 Build a counter using closures

// function counter(){
//   let count = 0;
//   return function(){
//     count++;
//     return count;
//   }
// }

// let c = counter()
// console.log(c())

//Q4 create a pure funtion to transform a value:

// function pure(val){
//   return String(val)
// }
// console.log(typeof(pure(123)))

// Q5 Use IFEE to isolate variable: 
// IIFE (Immediately Invoked Function Expressions) are not the only way to isolate variables. You can isolate variables in any type of function, because functions in JavaScript create their own scope.

// (function(){
//   let password = "secret password"
//   console.log(password)
// })();
// console.log(password)