// 🗂️ Local Storage
// Stores data inside the browser permanently.
// Even if you close or restart the browser, the data remains saved.

// Contents:

// 1. How to store data? (setItem())
// localStorage.setItem("name","arib")

// 2. How to fetch data? (getItem())
// let val = localStorage.getItem("name")

// 3. How to remove/delete data? (removeItem())
// localStorage.removeItem("name")

// 4. How to update data? ((setItem()))
// For updation in local storage there is no particular method rather it uses setItem(), setItem() sets a value if it does not exists and if the value already exists it updates the current value to the new value
// localStorage.setItem("name","arib") --> localStorage.setItem("name","wahab")

// IT ONLY STORES "STRINGS". No Array, and no Objects.
// so in order to store an array we can use JSON.Stringify() like :

// localStorage.setItem("friends",JSON.stringify(["fazal buksh","parizad","abdullah"]))
// let frnd = JSON.parse(localStorage.getItem("friends"))
// console.log(frnd)


// ⏳ Session Storage
// Stores data temporarily during a browser session.
// If you close the tab or browser, the data is automatically deleted.
// If you reload the tab data is still there, no data gets lost.

// Contents:

// 1. How to store data? (setItem())
// sessionStorage.setItem("name", "arib");

// 2. How to fetch data? (getItem())
// let val = sessionStorage.getItem("name");

// 3. How to remove/delete data? (removeItem())
// sessionStorage.removeItem("name"); 

// 4. How to update data? (setItem())
// Same as localStorage, it uses setItem() to both add and update values.
// sessionStorage.setItem("name", "wahab");


// 🍪 Cookies
// Also used to store data, but it's meant for small, lightweight data.
// Maximum size per cookie: 4 KB (4096 bytes)
// Designed mainly for tracking, preferences, or login sessions — not for storing large data like local or session storage.
// Cookies send the data automatically to the server on page reload.

