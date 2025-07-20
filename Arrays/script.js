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