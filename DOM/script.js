// DOM = "document object model"
// So, if you want to learn Dom Manipulation, you should have grip on the following topics:
// 1.How to select an html element,
// 2.changing text,
// 3.changing the html,
// 4.attribute,
// 5.event listners.


// 1.How to select an html element :
// a) document.getElementById("id");             // Select by ID
// b) document.getElementsByClassName("class");  // Select by class (returns HTMLCollection)
// c) document.getElementsByTagName("tag");      // Select by tag (returns HTMLCollection)
// d) document.querySelector(".class or #id");   // Select first matching element (CSS selector)
// e) document.querySelectorAll(".class");       // Select all matching elements (returns NodeList)


// PRACTICE SET:
// 💡 Q1. Select all <li> elements that are inside a <div> with the class todo-container.
// <div class="todo-container">
//   <ul>
//     <li>Learn HTML</li>
//     <li>Learn CSS</li>
//     <li>Master JavaScript</li>
//   </ul>
// </div>
// 🧠 Which selector would you use to grab all the <li> items inside this specific div?

// // ANSWER :
// let lis = document.querySelectorAll(".todo-container li")
// console.log(lis)


// 2.changing text :
// let h1 = document.querySelector("h1")
// console.log(h1)
// h1.innerText = "Hello Bantu"

// You can do the same by both innerText and textContent but there is a difference :

// -> innerText depends on what's visible on the page.
// -> textContent gives you all the text, even if it's hidden.

// 3. Changing the HTML (using innerHTML)

//  element.innerHTML = "<b>Hello</b>";
//  Replaces the inside HTML of an element
//  Can insert tags like <b>, <div>, etc.
//  Be careful — it can overwrite existing content or cause security issues if not handled safely.

// 5. Attribute Manipulation (getAttribute, setAttribute, removeAttribute):

// let a = document.querySelector("a")
// a.href = "https://www.google.com"
// console.dir(a)

// a) setAttribute :
// let img = document.querySelector("img")
// img.setAttribute("src","https://images.unsplash.com/photo-1752350434901-e1754a4784fe?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// img.setAttribute("width","450px")

// b) getAttribute – Get the value of an attribute

// let link = document.querySelector("a");
// console.log(link.getAttribute("href"));  // e.g. "https://www.google.com"
// Use this when you want to read the value of an attribute.

// c) removeAttribute – Remove an attribute completely

// let img = document.querySelector("img");
// img.removeAttribute("width");
// This will remove the attribute, as if it never existed in HTML.