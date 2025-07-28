// 1. setTimeout()
//      What it does:
//        Executes a function once after a specified delay.

//  Syntax:

//    let timeoutID = setTimeout(callback, delayInMs, arg1, arg2, ...);

// Example:

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);


// 2. setInterval()
//      What it does:
//        Executes a function repeatedly at fixed intervals.

// Syntax:

// let intervalID = setInterval(callback, delayInMs, arg1, arg2, ...);
   
  // Example:

//  setInterval(() => {
//   console.log("This logs every 1 second");
// }, 1000);


// 3. clearTimeout()
//      What it does:
//        Cancels a setTimeout() before it runs.

// Syntax:

// clearTimeout(timeoutID);

// Example:

// let timeoutID = setTimeout(() => {
//   console.log("This won't run");
// }, 3000);

// clearTimeout(timeoutID);

// 4. clearInterval()
//    What it does:
//      Stops a setInterval() from repeating.

// Syntax:

// clearInterval(intervalID);

// Example:

// let intervalID = setInterval(() => {
//   console.log("Repeating...");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Stopped interval");
// }, 5000);


// Feature	        setTimeout()	  setInterval()
// Runs only once	    yes	                no
// Runs repeatedly	   no	                yes
// Can be canceled	 clearTimeout()	 clearInterval()

// Use case	Delay a one-time action (e.g. show popup)	Repeating actions (e.g. countdown, clock)
















// Example 1 for setInterval() and clearInterval()
// let h1 = document.querySelector("h1");
// let count = 10;

// function countdown(){
//   h1.textContent = count;
//   count--;
//   if(count<0){
//     clearInterval(timer);
//     h1.style.fontSize = "10rem";
//     h1.textContent = "BOOM! 🚀";
//   };
// };

// let timer = setInterval(countdown,1000);


// Example 1 for setTimeout() and clearTimeout() 
let alert = document.querySelector(".glass-alert");

setTimeout(function(){
    alert.style.opacity ="0"
},3000)