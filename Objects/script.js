//OBJECTS : A JavaScript object is a way to store data using key-value pairs — like a real-world "thing" with properties.
// Think of it like a mini database for a single item.
// 🧠 Object = { key: value }
// 🛍 Example:
// const car = {
//   brand: 'Toyota',
//   model: 'Corolla',
//   year: 2022
// };

// OBJECTS VS ARRAYS:
// Use an array for a list of things.
// Use an object for the details about one thing.

// How to access objects:
// There are two ways one can access objects :
// 1.
// console.log(car.brand)
// 2.
// console.log(car["year"])

//NESTING AND DEEP ACCESS:
// const user = {
//   name: "Arib",
//   address: {
//     city:"  Bahawalpur",
//     pin:165000,
//     location:{
//       lat: 23.4,
//       lng: 77.4,
//     },
//   },
// };
// // if you want to access the lng, you have to do this:
// let lnglocation = user.address.location.lng
// console.log(lnglocation)

// OBJECT DESTRUCTURING:
// Above you can see that how much effort was needed to get the lat and lng. so to tackle with this there is a concept named "object destructuring":

// const user = {
//   name: "Arib",
//   address: {
//     city:"  Bahawalpur",
//     pin:165000,
//     location:{
//       lat: 23.4,
//       lng: 77.4,
//     },
//   },
// };

// let {lat,lng} = user.address.location
// console.log(lat,lng)
// now you dont need to write all this (user.address.location.lng) again and again as you just created variables named lat and lng.


//LOOPING:

// 1. FOR-IN:
// let obj = {
//   name: "Arib",
//   age:20,
//   email:"test@test.com",
// };

// for(let key in obj){
  // console.log(key) , here if you want to access the value of the corresponding key, you wont be able to do that. so what we do is :
  // obj.key , now you will think that you can access the value by doing this as the key is the varaible defined in the for-in loop, so what to do:
  // console.log(key, obj[key]) // obj[key] will print the values and simply key will print the keys. 
  // point to be noted that why did we used [] here? however we used {} for objects?
  // ans: 💬 Why we use {} to define an object but [] to access values?
  // {} = syntax to create an object
  // [] = syntax to access a property using a variable
// }

//  tips:

// ✅ Use obj.key when you know the key name (like obj.name)
// ✅ Use obj[key] when the key is stored in a variable (like in for...in)

// 2. OBJECT.KEYS:

// let obj = {
//   name: "Arib",
//   age:20,
//   email:"test@test.com",
// };
// let objkeys = Object.keys(obj) // this will add all the keys of the object into an array
// console.log(objkeys)
// // output : [ 'name', 'age', 'email' ]
// // 3. OBJECT.ENTRIES:

// let objentries = Object.entries(obj)
// console.log(objentries)
//output: [ [ 'name', 'Arib' ], [ 'age', 20 ], [ 'email', 'test@test.com' ] ]


// COPYING OBJECTS :

// 1. SPREAD :

// let obj = {
//   name: "Arib",
//   age:20,
//   email:"test@test.com",
// };

// let obj2 = {...obj} // here comes the spread operator, which will spread every thing available in obj and then they are stored it to obj2

// 2. OBJECT.ASSIGN: Not much used now a days, as there is spread operator available to do the same.

// let obj = {
//   name: "Arib",
//   age:20,
//   email:"test@test.com",
// };
// let obj2 = Object.assign({},obj)
// console.log(obj2)

// 3. DEEP CLONING: 
// let obj = {
//   name: "arib",
//   age: 20,
//   email:"test@test.com",
//   address:{
//     city:"bahawalpur"
//   },
// };

// let obj2 = {...obj}

// Now here you think you have copied the obj into obj 2 using spread operator, and thats true, you did, but there is a catch here. for example:
// you try to change the city name like:
// obj2.address.city="lahore" // the city name is changed from bahawalpur to lahore, but not only for the obj2 but also for obj.
// Why?
// Because when you cloned obj into obj2 using the method above. it created a shallow copy. which means that the outer keys and there values will be clooned but but but the values like city which are nested. they still are not copied completly. rather they are still refferenced.


// WHEN EVER YOU HAVE A NESTED OBJECT AND YOU WANT TO COPY IT YOU NEED TO DEEP CLONE IT.
// HOW TO DEEP CLONE:

// let obj = {
//   name: "arib",
//   age: 20,
//   email:"test@test.com",
//   address:{
//     city:"bahawalpur"
//   },
// };

// // JSON.stringify(obj)// this will convert the obj to a string.
// JSON.parse(JSON.stringify(obj)) //  this will first convert it to string then using parse it gets back to object form with being a deep copy.

// PRACTICE SET BY SHERIANS:

// Q1. Create an object for a student with name,age,and isEnrolled.

// let student = {
//   name: "Arib",
//   age: 20,
//   isEnrolled: true,
// };
// console.log(student)

// Q2. Can an object key be a number or a boolean? try it:

  // let obj = {
  //   true: "no",
  //   123: 456,
  // }
  // console.log(obj)

  // so, yes as we can see it is possible for an object to have a boolean or number as a key.

// Q3. Access the value of "first-name" from this object:

  // let obj = {
  //   "first-name":"arib",
  // };
  // // obj.first-name // this is not allowed if the key is like "first-name", so what to do then?
  // // obj["first-name"] // this is the way you can access this key correctly.
  // console.log(obj["first-name"])

// Q4. Given a dynamic key let key = "age", how will you access user[key]?
// let key = "age";
// const user = {
//   age:20,
// };
// console.log( user[key])


// Q5. From the object below, print the latitude:
// const locations = {
//   city: "bahawalpur",
//   coordinates : {
//     lat:23.2,
//     lng: 77.4
//   },
// };
// console.log(locations.coordinates.lat)

// Q6. What will happen if coordinates is missing? how can you prevent errors?
// const locations = {
//   city: "bahawalpur",
//   coordinates : {
//     // lat:23.2,
//     lng: 77.4
//   },
// };
// console.log(locations?.coordinates?.lat)

// Q7. Destrucuture the city and the lat from the location object above:
// const locations = {
//   city: "bahawalpur",
//   coordinates : {
//     lat:23.2,
//     lng: 77.4
//   },
// };
// let {city} = locations
// let {lat} = locations.coordinates
// console.log(city,lat)

// Q8. Destructure the key "first-name" as a variable called firstName.
// let obj = {
//     "first-name":"arib",
//   };

// let {"first-name": firstName} = obj
// console.log(firstName)

// Q9. Use for in loop to log all keys in this object :
// const course = {
//   title:"JavaScript",
//   duration:"4 Weeks",
// };
// for(let key in course){
//   console.log(key)
// }

// Q10. Use object.entries to print all key-value pairs as:
// title : "JavaScript"
// duration : "4 weeks"
// const course = {
//   title:"JavaScript",
//   duration:"4 Weeks",
// };
// Object.entries(course).forEach(val=>console.log(val[0]+": "+val[1]));

// Q11. Copy this object using spread operator:
// const original = {a:1,b:2}
// const copy = {...original}
// console.log(original)
// console.log(copy)

// Q12. Deep clone the object properly:
// const obj1 = { info: { score:80 } };
// const clone = {...obj1}
// clone.info.score = 100;
// console.log(obj1.info.score)// see obj1's score is also updated to 100 from 80. why? because clone object was the shallow copy of obj1. this means that if an object is nested and you try to clone it using spread operator it is wrong to do that. because by doing this all the outer key and values will be copied but the inner keys and values will still be refferenced.

// Solution:
// const obj1 = { info: { score:80 } };
// let clone = JSON.parse(JSON.stringify(obj1))
// clone.info.score = 100;
// console.log(clone)
// console.log(obj1)

// now see after even updating the value of score both the objects will print different score values. because we created a deep copy of the obj1.

// Q13. Rewrite this safely with optional chaining:
// const person = {}
// console.log(person?.profile?.name)