// HOW TO CREATE AND ACCESS ARRAYS
// let marks = [10,20,30,40]
// index:        1  2  3  4
// console.log(marks[0])

// HOW TO MODIFY AN ARRAY
// let arr = [1,2,3,4]
// arr[2] = 12
// console.log(arr)

//METHODS:

// let arr = [1,2,3,4,5]

// 1. PUSH: adds an element at the end of the array

// arr.push(5)
// console.log(arr)

// 2. POP: removes an element from the end of the array

// arr.pop(4)
// console.log(arr)

// 3. UNSHIFT: adds an element at the start of tha array

// arr.unshift(0)
// console.log(arr)

// 4. SHIFT: removes an element from the start of the array

// arr.shift(1)
// console.log(arr)

// 5. SPLICE: array.splice(startIndex, deleteCount, item1, item2, ...); :: SPLICE makes the changes to your original array

// arr.splice(2,2) //(start index, end index) : this removes all the elements between the starting and the ending point
// console.log(arr)


// 6. SLCIE: array.slice(start, end) :: SLICE gives you an other copy of your array with out making changes in your array.

// let newarr = arr.slice(0,3)
// console.log(newarr)// the new array we created will be the copy of the original array but with the modifications we applied
// console.log(arr)// the original array remain unchanged

// 7. REVERSE: It makes the order of your array elements reversed

// arr.reverse()
// console.log(arr)

// 8. SORT: It is used to make your array sorted either in an ascending order or in descending order

// let arr = [11,62,33,44]

// let sorted = arr.sort(function(a,b){
//   return a-b // if we write a-b, the array will be sorted in ascending order.
//   return b-a // if we write b-a, the array will be sorted in descending order.
// });
// console.log(sorted)

// PRACTICE SET FOR SLICE(), SPLICE(), AND SORT():

//"SLICE SET"

// Q1. Copy Part of an Array
// Given: const colors = ["red", "green", "blue", "yellow", "purple"];
// Use slice to copy the middle three colors into a new array.

// const colors = ["red", "green", "blue", "yellow", "purple"];
// let newColors = colors.slice(1,4)
// console.log(newColors)
// console.log(colors)

// Q2. Get the Last 2 Elements
// Given: const nums = [10, 20, 30, 40, 50];
// Use slice to get the last two elements into a new array.
// const nums = [10, 20, 30, 40, 50];
// let newNums = nums.slice(3,5)
// console.log(newNums)

// Q3. First 3 Items
// Use slice to get the first 3 elements of this array:
// const names = ["Arib", "Ali", "Zara", "Usman", "Fatima"];

// const names = ["Arib", "Ali", "Zara", "Usman", "Fatima"];
// let newNames = names.slice(0,3)
// console.log(newNames)


// "SPLICE SET"

// Q4. Remove Elements
// Given: const animals = ["cat", "dog", "parrot", "lion"];
// Remove "dog" and "parrot" using splice.

// const animals = ["cat", "dog", "parrot", "lion"];
// animals.splice(1,2);
// console.log(animals)

// Q5. Insert Elements
// Given: const numbers = [1, 2, 5, 6];
// Use splice to insert 3 and 4 at the correct positions.

// const numbers = [1, 2, 5, 6];
// numbers.splice(2,0,3,4)
// console.log(numbers)

// Q6. Replace an Item
// Replace "banana" with "mango" in this array:
// const fruits = ["apple", "banana", "cherry"];

// const fruits = ["apple", "banana", "cherry"];
// fruits.splice(1,1,"mango")
// console.log(fruits)

// "SORT SET"

// Q7. Alphabetical Sort
// Sort this array alphabetically:
// const names = ["Zain", "Arib", "Bilal", "Hina"];

// const names = ["Zain", "Arib", "Bilal", "Hina"];
// let newNames = names.sort()
// console.log(newNames)
// console.log(names)

// ALERT: This will make changes done to the original array too.So, to handle this we should use slice before it. why? because if we dont want sort to make changes to our original array we must add slice before sort. this will make a new array and save changes there, without effecting the original array

// const names = ["Zain", "Arib", "Bilal", "Hina"];
// let newNames = names.slice().sort()
// console.log(newNames)
// console.log(names)


// Q8. Sort Numbers Ascending
// Sort this array in ascending order:
// const nums = [5, 1, 9, 3, 7];

// const nums = [5, 1, 9, 3, 7];
// let ascNums = nums.sort(function(a,b){
//   return a-b;
// })
// console.log(nums)
// console.log(ascNums)
// both nums and ascNums will show the same because sort saves changes to the original array


// Q9. Sort Numbers Descending:
// Sort this array in descending order:
// const nums = [5, 1, 9, 3, 7];

// const nums = [5, 1, 9, 3, 7];
// let ascNums = nums.sort(function(a,b){
//   return b-a;
// })
// console.log(nums)
// console.log(ascNums)

// Q10. Sort by String Length
// Sort this array by string length (shortest to longest):
// const words = ["elephant", "cat", "giraffe", "dog"];

// const words = ["elephant", "cat", "giraffe", "dog"];

// let newWords = words.sort(function(a,b){
//   return a.length-b.length;//ascending
//   return b.length-a.length;//descending
// })
// console.log(newWords)

// 🧠 Bonus Challenge:
// Use slice + sort to sort a copy of an array without changing the original one!
// Given:
// Sort them in ascending order *without* mutating the original array.
// const scores = [85, 60, 99, 70];

// const scores = [85, 60, 99, 70];

// let newScores = scores.slice().sort(function(a,b){
//   return a-b;
// })
// console.log(newScores)
// console.log(scores)

// MAP ,REDUCE ,AND FILTER:

// "MAP": map() is a built-in array method that creates a new array by applying a function to each element of the original array.In easy words we can say that map is only used when a new array is created on the basis of the data from the previous array

// PRACTICE SET FOR "MAP()"
// Q1. Double the Numbers
// Given this array:
// const nums = [1, 2, 3, 4, 5];
// Use .map() to return a new array with each number doubled.
// Output: [2, 4, 6, 8, 10]

// SOL: 
// const nums = [1, 2, 3, 4, 5];
// let newNums = nums.map(n=> n+n)
// console.log(newNums)

// Q2. Convert to Uppercase
// Given:
// const names = ["arib", "ali", "zara"];
// Use .map() to return a new array of all names in uppercase.
// Output: ["ARIB", "ALI", "ZARA"]

// SOL:
// const names = ["arib", "ali", "zara"];
// let newNames = names.map(name=>name.toUpperCase())
// console.log(newNames)

// Q3. Extract Usernames
//  Given:
// const users = [
//   { id: 1, username: "arib" },
//   { id: 2, username: "fatima" },
//   { id: 3, username: "ali" }
// ];
// Use .map() to return an array of just the usernames.
// Output: ["arib", "fatima", "ali"]

//  SOL:
// const users = [
//   { id: 1, username: "arib" },
//   { id: 2, username: "fatima" },
//   { id: 3, username: "ali" }
// ];
// let usersNames = users.map(u=>u.username)
// console.log(usersNames)

// Q4. Add "Mr." Prefix
// Given:
// const names = ["Arib", "Bilal", "Usman"];
// Use .map() to return: ["Mr. Arib", "Mr. Bilal", "Mr. Usman"]

// SOL:

// const names = ["Arib", "Bilal", "Usman"];
// let respected = names.map(n=>`Mr. ${n}`)
// console.log(respected)

// Q5. Calculate Square of Numbers
// Given:
// const numbers = [2, 3, 4, 5];
// Use .map() to return: [4, 9, 16, 25]

//SOL:

// const numbers = [2, 3, 4, 5];
// let Square = numbers.map(n=>n*n)
// console.log(Square)

// Q6. Format Products as Strings
// Given:
// const products = [
//   { name: "Shirt", price: 1200 },
//   { name: "Cap", price: 300 }
// ];
// Use .map() to return: ["Shirt - Rs. 1200", "Cap - Rs. 300"]

// SOL:
// const products = [
//   { name: "Shirt", price: 1200 },
//   { name: "Cap", price: 300 }
// ];
// let strProds = products.map(product=>`${product.name} - Rs. ${product.price}`)
// console.log(strProds)

// Q7. Create HTML tags
// Given:
// const items = ["Home", "About", "Contact"];
// Use .map() to return: ["<li>Home</li>", "<li>About</li>", "<li>Contact</li>"]

// SOL:

// const items = ["Home", "About", "Contact"];
// let htmlConversion = items.map(i=>"<li>" + i +"</li>")
// console.log(htmlConversion)

// 🧠 Bonus Challenge:
// Given this nested array:
// const numbers = [[1, 2], [3, 4], [5, 6]];
// Use .map() to return: [3, 7, 11] (sum of each pair)

// SOL:

// const numbers = [[1, 2], [3, 4], [5, 6]];
// let sumOfPairs = numbers.map(pair=>pair[0]+pair[1])
// console.log(sumOfPairs)


// "FILTER": .filter() is a built-in array method that helps you:

            // ✅ Keep only the elements that match a condition
            // ❌ Remove the ones that don’t

// PRACTICE SET FOR "FILTER":
// 1. Even Numbers Only
// Given:
// const nums = [1, 2, 3, 4, 5, 6];
// 🧠 Task: Use `.filter()` to return only even numbers.

// SOL:

// const nums = [1, 2, 3, 4, 5, 6];
// const filtered = nums.filter(n=> n%2===0)
// console.log(filtered)

// // 2. Filter Names Starting with "A"
// const names = ["Arib", "Ali", "Fatima", "Zara"];
// 🧠 Task: Filter names that start with "A"

// SOL:

// const names = ["Arib", "Ali", "Fatima", "Zara"];
// const aNames = names.filter(n=>n.toLowerCase().startsWith('a'))
// console.log(aNames)

// 3. Prices Above 1000
// const items = [
//   { name: "Laptop", price: 2000 },
//   { name: "Mouse", price: 400 },
//   { name: "Keyboard", price: 900 },
// ];
// 🧠 Task: Return only items with price > 1000

// SOL:

// const items = [
//   { name: "Laptop", price: 2000 },
//   { name: "Mouse", price: 400 },
//   { name: "Keyboard", price: 900 },
// ];

// const budget = items.filter(item=>item.price>1000)
// console.log(budget)

// 4. Filter Falsy Values
// const values = [0, 1, "", "Hello", null, undefined, "Arib", false];
// 🧠 Task: Return only truthy values using `.filter()`

// SOL:

// const values = [0, 1, "", "Hello", null, undefined, "Arib", false];
// const Falsy = values.filter(val=>val)

// console.log(Falsy)

// // 5. Students Who Passed
// const students = [
//   { name: "Arib", marks: 85 },
//   { name: "Ali", marks: 42 },
//   { name: "Zain", marks: 77 },
// ];
// 🧠 Task: Filter students with marks >= 50

// SOL:

// const students = [
//   { name: "Arib", marks: 85 },
//   { name: "Ali", marks: 42 },
//   { name: "Zain", marks: 77 },
// ];

// const passed = students.filter(s=>s.marks>=50)
// console.log(passed)

// 6. Words Longer Than 4 Letters
// const words = ["cat", "giraffe", "hi", "watermelon", "pen"];
// 🧠 Task: Return only words longer than 4 characters

// SOL:

// const words = ["cat", "giraffe", "hi", "watermelon", "pen"];

// const fourLetters = words.filter(w=>w.length>4)
// console.log(fourLetters)

// 7. Filter Even Indexed Items
// const letters = ["a", "b", "c", "d", "e"];
// 🧠 Task: Return only items at even indexes (0, 2, 4)

// SOL:

// const letters = ["a", "b", "c", "d", "e"];
// const evenIndexed = letters.filter((l,i)=>i%2===0) // filter has two parameters (value,index)
// console.log(evenIndexed)


// // 8. Online Users Only
// const users = [
//   { username: "Arib", online: true },
//   { username: "Ali", online: false },
//   { username: "Fatima", online: true },
// ];
// 🧠 Task: Filter users where `online` is true

// SOL:

// const users = [
//   { username: "Arib", online: true },
//   { username: "Ali", online: false },
//   { username: "Fatima", online: true },
// ];
// const isOnline = users.filter(u=>u.online===true)
// console.log(isOnline)


// "REDUCE": .reduce() is a JavaScript array method that reduces all the elements in an array to a single value, by applying a callback function repeatedly.

// Syntax: 
// array.reduce((accumulator, currentValue) => {
//   // logic to combine
//   return updatedAccumulator;
// }, initialValue);

// PRACTICE SET FOR reduce():

// 1. Sum all numbers in an array
// const nums = [1, 2, 3, 4, 5];
// Expected: 15

// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((acc,val)=>{
//   return acc=acc+val
// },0)
// console.log(sum)

// 2.Find the product of all numbers
// const nums = [2, 3, 4];
// Expected: 24

// const nums = [2, 3, 4];
// const mul = nums.reduce((acc,val)=>{
//   return acc=acc*val
// },1)
// console.log(mul)

// 3.Turn an array of strings into a single sentence
// const words = ['I', 'love', 'JavaScript'];
// Expected: 'I love JavaScript'

// const words = ['I', 'love', 'JavaScript'];
// const sentence = words.reduce((acc,word)=>{
//   return acc = `${acc} ${word}`
// },"")
// console.log(sentence)

// 4.Count the number of even numbers
// const nums = [1, 2, 3, 4, 5, 6];
// Expected: 3

// const nums = [1, 2, 3, 4, 5, 6,7,8];
// const even = nums.reduce((acc,val)=>{
//   let counter = 0;
//   if(val%2===0){
//     counter++;
//   }
//   return acc= acc + counter;
// },0)
// console.log(even)

// 5.Find the maximum value in an array
// const nums = [4, 7, 1, 9, 3];
// Expected: 9

// const nums = [4, 7, 1, 9, 3];
// const max = nums.reduce((acc,val)=>{
//   if(val>acc){
//     acc = val;
//   }
//   return acc
// },0)
// console.log(max)

// we can do the same if we use ternary operator combined with this logic:

// const nums = [4, 7, 1, 9, 3];
// const max = nums.reduce((acc, val) => val > acc ? val : acc, 0);
// console.log(max)

// 6.Count frequency of element
// const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
// Expected: {a: 3, b: 2, c: 1}

// const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
// const freq = letters.reduce((acc,val)=>{
//   if(val === 'a' || val === 'b' || val === 'c'){
//     acc++
//   }
//   return acc
// },0)
// console.log(freq) 