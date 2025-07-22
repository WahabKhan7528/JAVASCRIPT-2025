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

// ARRAY DESTRUCTURING :
// let arr = [1,2,3,4,5];
// let [a,b,,c] = arr // here[a,b,,c] we ignored the third value and stored the 4th value as c.
// console.log(a,b,c)

//SPREAD: 

// if we want to copy elements of any array to anyother array like this :
// let arr = [1,2,3,4,5,6,7,8,9]
// let arr2 = arr
// This will be a problem for us because as we know that array is a reference type. So what this means is that if we try to copy like this and make some queries after, it will affect the original array because the copy was not initaited at all.

// SO WHAT TO DO?
// we will use spread operator:
// let arr = [1,2,3,4,5,6,7,8,9]
// let arr2 = [...arr]


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
// console.log(password)`

//PRACTICE SET BY CHATGPT

// 📘 1. Function Declarations, Expressions, and Arrow Functions
// Write a function using:

// Function declaration:
// function hello(){
//   console.log("hello world")
// }
// hello()

// Function expression
// let hello = function(){
//   console.log("hello")
// }
// hello()

// Arrow function to return the square of a number.

// let hello = (a)=>{
//   return a**a
// }
// console.log( hello(2))

// What error do you get when calling a function expression before its definition?
// console.log( hello(2))

// let hello = (a)=>{
//   return a**a
// }

//ANSWER : cant access hello before initialization

// Convert the following regular function into an arrow function:

// function greet(name) {
//   return "Hello " + name;
// }
// let greet = (name)=>{
//   return "Hello " + name;
// }
// console.log(greet("arib"))

// 🧩 2. Parameters vs. Arguments
// Create a function sum with 2 parameters and call it with:
// 1 argument
// function sum(a,b){
//   return a+b
// }
// console.log(sum(1))
// // 3 arguments
// console.log(sum(1,2,3))

// What gets returned in each case?
// with just one argument is shows NaN as number + undefined = NaN
// with extra number of arguments it ignored the extra arguments and just used the required arguments

// What happens if you don't pass any arguments to a function that expects parameters?

// function sum(a,b){
//   return a+b
// }
// console.log(sum())

// It shows NaN in the output.because undefined + undefined = NaN

// 🧂 3. Default, Rest, and Spread Parameters
// Create a function with a default parameter that greets someone. If no name is given, it should greet "Guest".
// function greet(name="guest"){
//   return `welcome ${name}`
// }
// console.log(greet())

// Use rest parameters to create a function sumAll(...nums) that returns the total sum of all arguments.
// function sumAll(...nums){
//   let sum=0;
//   nums.forEach(num=>{
//     sum = sum + num
//   })
//   return sum;
// }
// console.log(sumAll(1,2,3,4,5))

// 4. first class functions(assign to variables,pass as arguments, return from other functions)
// Q1: Create a function called `greet` that returns "Hello, world!".
// Then assign it to a variable `sayHello` and call it.
// function greet(){
//   return "Hello, world!";
// }
// let sayHello = greet()
// console.log(sayHello)

// Q2: Write a function `callTwice` that takes another function as an argument
// and calls it twice. Example usage:

// function sayHi() {
//   console.log("Hi!");
// }

// callTwice(sayHi) ➤ should print "Hi!" two times\


// function sayHi() {
//   console.log("Hi!");
// }

// function callTwice(fn) {
//   fn(); 
//   fn();
// }

// // Now pass the function `sayHi` as an argument
// callTwice(sayHi);

// Q3: Write a function `createMultiplier` that takes a number `x`
// and returns another function that takes a number `y` and returns x * y.

// Example:
// const double = createMultiplier(2);
// console.log(double(5)); // Output: 10
// function createMultiplier(x){
//   return function second(y){
//     return x*y;
//   }
// }
// let multiply = createMultiplier(5)
// console.log(multiply(2))

// Q4: Create a function `greetGenerator(name)` that returns another function.
// That returned function should greet using the saved name.

// const greetArib = greetGenerator("Arib");
// greetArib(); // Output: Hello, Arib!
// function greetGenerator(name){
//   return function(){
//     return `Hi! ${name}`
//   }
// }
// let greet = greetGenerator("Arib")
// console.log(greet())

//Q5 Write a function `messageBox()` that stores a message.
// Return two functions: `setMessage()` and `getMessage()`

// const box = messageBox();
// box.setMessage("JavaScript is fun!");
// box.getMessage(); // Output: "JavaScript is fun!"

// function messageBox(msg){
//   let message = "";

//   function setMessage(newMessage){
//     message = newMessage;
//   }
//   function getMessage(){
//     return message
//   }

//   return {setMessage,getMessage};
// }
// const box = messageBox();
// box.setMessage("JavaScript is fun!")
// console.log(box.getMessage())

// Q6: Write a function `makeAdder(x)` that returns a function.
// That returned function takes a number `y` and returns `x + y`.

// const add5 = makeAdder(5);
// console.log(add5(10)); // 15
// console.log(add5(20)); // 25

// function makeAdder(x){
//   return function(y){
//     return x+y
//   }
// }
// let add = makeAdder(2);
// console.log(add(2))

// let IFEE = (function hello(){
//   return "I am an IFEE"
// })()
// console.log(IFEE)
