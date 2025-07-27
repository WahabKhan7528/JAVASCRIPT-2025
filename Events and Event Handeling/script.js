// 1. Event Binding :(addEventListener, removeEventListner)

//  Why use Event Listeners?
// - To make your webpage interactive (e.g., respond to clicks, keypresses, hovers)
// - Keeps JS and HTML separate (clean code)
// - You can attach multiple listeners to the same element

//---------------------------------------------------//
//  Syntax:
// element.addEventListener("eventName", callbackFunction); // attach
// element.removeEventListener("eventName", callbackFunction); // detach
// //---------------------------------------------------//

// //  Example 1: Add a click event to a button
//   let btn = document.querySelector("button");

//   function sayHello() {
//     console.log("👋 Hello! Button clicked.");
//   }

//   btn.addEventListener("click", sayHello); // adds event listener
// // btn.removeEventListener("click", sayHello); // uncomment to remove it

// //  Example 2: Add mouseover event to a heading
//   let heading = document.querySelector("h1");

//   function changeColor() {
//     heading.style.color = "crimson";
//   }

//   heading.addEventListener("mouseover", changeColor);

// //  Example 3: Add keypress event to the entire page
//   document.addEventListener("keydown", function (event) {
//     console.log("🔑 You pressed:", event.key);
//   });

// // 🔹 Example 4: Remove listener after 1 click (once)
// function handleOnce() {
//   console.log("✅ Clicked once, now removing...");
//   heading.removeEventListener("click", handleOnce); // removes itself
// }

// heading.addEventListener("click", handleOnce);

// 🔹 Example 5: Don't use anonymous function if you want to remove later
// ❌ Won't work

// btn.addEventListener("click", () => {
//   console.log("clicked");
// });

// btn.removeEventListener("click", () => {
//   console.log("clicked"); // different function in memory, won’t remove
// });

// 2. Common Events :

// 🖱 Mouse Events

// click         // single click
// dblclick      // double click
// mousedown     // mouse button pressed
// mouseup       // mouse button released
// mouseenter    // when mouse enters an element
// mouseleave    // when mouse leaves an element
// mousemove     // when mouse moves within element
// contextmenu   // right-click

// ⌨️ Keyboard Events

// keydown       // key is pressed down
// keyup         // key is released
// keypress      // key is pressed (deprecated, prefer keydown)

// 📄 Form & Input Events

// submit        // form submission
// change        // input value changes (e.g., <select>, <input>)
// input         // fires every time user types (input fields)
// focus         // input/element gets focus
// blur          // input/element loses focus
// reset         // form reset
// invalid       // when a form field is invalid (on validation)

// 🧱 Clipboard Events

// copy          // when content is copied
// cut           // when content is cut
// paste         // when content is pasted

// 📦 Drag & Drop Events

// drag          // element is being dragged
// dragstart     // drag started
// dragend       // drag ended
// dragenter     // enters drop target
// dragleave     // leaves drop target
// dragover      // element is dragged over a drop target
// drop          // element is dropped

// 📦 Window Events

// load          // when window or resource finishes loading
// resize        // window is resized
// scroll        // user scrolls
// unload        // user leaves the page (deprecated)
// beforeunload  // show confirm dialog before leaving page

// 📷 Media Events

// play          // media starts playing
// pause         // media is paused
// ended         // media finishes playing
// volumechange  // volume is changed
// timeupdate    // when playback position changes
// seeking       // when seeking to a new time

// 📡 Network & Resource Events

// error         // error in loading a resource
// abort         // resource load is aborted
// loadstart     // loading starts
// loadend       // loading ends (either success or fail)

// 📊 Touch Events (for mobile)

// touchstart    // finger touches screen
// touchmove     // finger moves on screen
// touchend      // finger lifts off screen
// touchcancel   // touch is interrupted

// 🧠 Other Handy Events

// animationstart    // CSS animation starts
// animationend      // CSS animation ends
// transitionend     // CSS transition ends
// wheel             // mouse wheel scroll
// pointerdown       // touch/click/mouse press
// pointerup         // touch/click/mouse release
// pointermove       // touch/mouse move

// Example:
// let inp = document.querySelector("input");

// function inputs(e) {
//   inp.style.color = "#ADD8E6";
//   inp.style.backgroundColor = "gray";
//   inp.style.padding = "8px";

//   // e.target.value gives the current value of input
//   let collected = e.target.value;
//   if (e.target.value !== null){
//     console.log(collected);
//   };
// };

// inp.addEventListener("input", inputs);

// Example 2:

// let sel = document.querySelector("select")
// let device = document.querySelector("#deviceSelection")

// sel.addEventListener("change",function(e){
//   let selected = e.target.value
//   selected = selected.charAt(0).toUpperCase()+ selected.slice(1) // You can do the same by using css directly by using textTransform = "Capitalize"
//   device.textContent = `${selected} Device Selected`
// })

// 3. Event Object :  The event object is used it to access properties like e.key, e.target, e.type, etc.

// Example:\
// document.addEventListener("keydown", function(e) {
//   console.log(e.key); // ← 'e' is the event object here
// });

// 4. Event bubbling :

// THEORY: if the event is applied on an element which does not have a listner then the event will find the listner on its parent and, It will move towards upper parents.

// Example 1:
// html code in html file
//I want that when i click on any li it would have a line through, so for this either we can add event listner to all lis one by one, but this will cause code redundancy. We will choose the other option using Event bubbling in which we will add the eventlistner to the ul rather than lis.

// Option 1:
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// ul.addEventListener("click", function () {
//   lis.forEach(function (li) {
//     li.style.textDecoration = "line-through";
//   });
// });

// Option 2:
// let ul = document.querySelector("ul");

// ul.addEventListener("click",function(dets){
//   dets.target.style.textDecoration = "line-through"
// })

// Option 3: (using toggle)
 
// let ul = document.querySelector("ul");

// ul.addEventListener("click",function(dets){
//   dets.target.classList.toggle("lt")
// })

// 5. Event Capturing :
// THEORY: In Event Capturing, the event flows from the outermost parent to the target element (i.e., top → bottom), opposite to bubbling.

//To activate capturing, we use:

// element.addEventListener("event", callback, true);
// true in the third argument enables capturing mode. Default is false (bubbling).

//  Example 1: Basic capturing demo
// HTML code in HTML file:
// 
// <!-- HTML structure -->

// JavaScript (Event Capturing)

// let outer = document.getElementById("outer");
// let inner = document.getElementById("inner");
// let btn = document.getElementById("btn");

// outer.addEventListener("click", function () {
//   console.log("Outer clicked");
// }, true); // capturing

// inner.addEventListener("click", function () {
//   console.log("Inner clicked");
// }, true); // capturing

// btn.addEventListener("click", function () {
//   console.log("Button clicked");
// }, true); // capturing


// Output when you click the button:
  // Outer clicked
  // Inner clicked
  // Button clicked

// This is event capturing in action: top → bottom


// Summary Table:
  // Flow Type	Direction	Trigger Order
  // Bubbling	bottom → top	/ Inner to outer
  // Capturing	top → bottom /	Outer to inner

//  When to Use Capturing?
  // Rarely used, but useful when you want parent-level logic to run before child elements handle the event.
  // Can help with things like logging, input sanitization, or access control checks at a parent level.





















// testing and revision :

function click() {
  setTimeout(() => {
    h1.style.color = "blue";
  }, 500);
}

let h1 = document.querySelector("h1");

// This will add an event and uses the function we created above to perform any task
h1.addEventListener("click", click);

// This will remove the event added above
h1.removeEventListener("click", click);
