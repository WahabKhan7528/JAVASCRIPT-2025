// 🔹 1. Scope in JavaScript:

// Scope means where a variable can be accessed in your code. There are three main types:

// ✅ 1. Function Scope : Variables declared inside a function can only be used within that function.


// function greet() {
//   let message = "Hello!";
//   console.log(message); // ✅ Works here
// }

// greet();
// console.log(message); // ❌ Error: message is not defined

// ✅ 2. Global Scope : Variables declared outside of all functions or blocks can be used anywhere in your code.

// let name = "Wahab";

// function sayName() {
//   console.log(name); // ✅ Works here
// }

// sayName();
// console.log(name); // ✅ Works here too

// ✅ 3. Block Scope : Variables declared inside a block (anything inside {} such as if, for, etc.) using let or const can only be used inside that block.

// if (true) {
//   let age = 25;
//   console.log(age); // ✅ Works here
// }

// console.log(age); // ❌ Error: age is not defined


// 🧠 Key Difference Between Function Scope & Block Scope
// Function Scope applies only to functions.

// Block Scope applies to anything inside curly brackets {}, like if, for, while, etc.

// 🔎 Example:

// function testFunction() {
//   let insideFunction = "I'm inside a function";
//   if (true) {
//     let insideBlock = "I'm inside a block";
//     console.log(insideFunction); // ✅ Accessible
//     console.log(insideBlock);    // ✅ Accessible
//   }

//   console.log(insideBlock); // ❌ Error: block scope
// }

// testFunction();

/*
| Keyword | Block Scope | Function Scope | Global Scope | Re-declarable | Re-assignable |
|---------|-------------|----------------|--------------|---------------|---------------|
| var     | ❌ No        | ✅ Yes          | ✅ Yes        | ✅ Yes         | ✅ Yes  |
| let     | ✅ Yes       | ✅ Yes          | ✅ Yes        | ❌ No          | ✅ Yes  |
| const   | ✅ Yes       | ✅ Yes          | ✅ Yes        | ❌ No          | ❌ No   |
*/


// 2. Execution context ( Memory creation and Execution phase ) : 

// JS creates an "Execution Context" before running any code.
// It has two phases:

// 1️⃣ Memory Creation Phase
// - Reserves space for variables (var = undefined)
// - Stores full function code

// console.log(x);     // undefined (var is hoisted)
// greet();            // ✅ Function works (hoisted)

// var x = "Wahab";

// function greet() {
//   console.log("Hello");
// }

// 2️⃣ Execution Phase
// - Code runs line by line
// - Variables get actual values
// - Functions run when called

// console.log(x); // Wahab

// ⚠️ let & const are hoisted but NOT initialized
// They throw error if accessed before declaration (TDZ -> Temporal Dead Zone)

// console.log(y); // ❌ ReferenceError
// let y = 10;


// 3. Lexical Scoping :
// ki app kahan par physiically available ho ya poora tareeka se depend karta hai ki app kya access kar sakta ho.
// In js we use lexical scoping rahter than dynamic scoping.

// function abcd(){
//   let a=12;
//   function defg(){
//     console.log(a)
//   }
//     defg()
// }
// abcd()

// 4. Closures:  
// Closures are functions that are returned from inside a parent function,  
// and the returned function uses some variable from the parent function.

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   }
// }
// abcd()();  
// Here it's necessary to add ()() because the outer function returns an inner function,
// and we need to call that returned function too.


// Advantages of Closures:

// They allow private variables (which can't be accessed directly from outside).

// They help prevent global variable pollution (by keeping variables inside a function’s scope).


// Q: How are variables preserved in a closure?
// Ans:
// Yes, it's true that when a function finishes running, all its variables usually disappear because they were defined inside that function.
// But when a closure is created, a special backlink is saved that keeps track of the parent function’s variables — even after the parent function is done executing.
// This backlink is called [[Environment]], and that’s how the inner function can still access the parent’s variables later on.

// 5. Use Cases (Private Counters, Encapsulation) : 

// A) Private Counter : 

// function countForMe(){
//   let count = 0
//   return function(){
//     count++
//     console.log(count)
//   }
// }
// countForMe()()
//      OR
// let fnc = countForMe() 
// fnc() // 1
// fnc() // 2
// fnc() // 3

// let fnc2 = countForMe()
// fnc2() // 1
// fnc2() // 2
// fnc2() // 3
// fnc2() // 4
// fnc2() // 5
// fnc2() // 6
// fnc2() // 7


// B) Encapsulation : We will try to understand it through an example :
// function clickLimiter(){
//   let click = 0 
//   return function(){
//     if(click < 5){
//       click++
//       console.log(`clicked : ${click} times`)
//     }
//     else{
//       console.error("Limit exceded")
//     }
//   }
// }
// let fnc = clickLimiter()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()
// fnc()