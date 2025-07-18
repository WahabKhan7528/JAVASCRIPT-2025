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
function add(v1=0,v2=0){// here we are setting default values for the parameters which are known as default parameters here. 
  console.log(v1+v2);//this will show NaN because two non numbers are being added here
}
add()