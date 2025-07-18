// FOR LOOP

// for(let i = 1;i<=100;i++){
//   console.log(i)
// }

// WHILE LOOP

// let i = 1
// while(i<32){
//   console.log(i);
//   i++
// }

// DO-WHILE LOOP (it works for one time even if the condition is not true)

// let i = 11;
// do{
//   console.log(i)
//   i++
// }while(i<2)

// BREAK -STATMENT

// for(let i = 1; i<101; i++){
//   console.log(i)
//   if(i === 92){
//     console.log("you got",i)
//     break
//   }
// }

// CONTINUE-STATMENT (continues to the next skipping the current one like in this block in the if condition we are checking for 92 and 100 if they come they will be ignored and all other numbers will be printed)

// for(let i = 1; i<101; i++){
//   if(i === 92 || i=== 100){
//     continue;
//   }
//   console.log(i)
// }


// SAMPLE QUESTIONS

// Q1 print numbers from 1 to 10 using for loop:
// for(let i = 1;i<=10;i++){
//   console.log(i)
// }

//Q2 Q1 print numbers from 10 to 1 using while loop:
// let i = 10;
// while(i>=1){
//   console.log(i);
//   i--;
// }

// Q3 print even numbers from 1 to 20 using for loop:

// for(let i = 1 ; i<=20; i++){
//   if(i%2===0){
//     console.log(i)
//   }
// }

// Q4 print odd numbers from 1 to 15 using while loop:
// let i = 1;
// while( i <= 15 ){
//   if( i%2 !== 0){
//     console.log(i);
//   }
//   i++
// }

// Q5 Print the multiplication table of 5 (i.e., 5 x 1 = 5 ... 5 x 10 = 50)

// for(i=1;i<=10;i++){
//   let result = 5 * i
//   console.log(`5 * ${i} = ${result}`)
// }

//Q6 Find the sum of numbers from 1 to 100 using loop:
// let sum = 0
// for(let i= 1 ; i<=100 ; i++){
//   sum = sum + i;
//   // console.log(sum)//this will cause clg to run like a loop
// }
// console.log(sum)


//Q7 Print all the numbers between 1 to 50 that are divisible by 3
// for(let i = 1;i<=50;i++){
//   if(i%3===0){
//     console.log(i)
//   }
// }

//Q8 Ask the user for a number and print whether each number from 1 to that number is even or odd
// let val = 200
// for(let i = 1;i<=val;i++){
//   if(i%2===0){
//     console.log(`${i} is even`)
//   }
//   else{
//     console.log(`${i} is odd`)
//   }
// }

//Q9 Count how many numbers between 1 to 100 are divisible by both 3 and 5
// for(let i = 1; i<=100;i++){
//   if(i%3===0 && i%5===0){
//     console.log(`${i} is divisible to 3 and 5 both`)
//   }
// }

// QUESTIONS FOR BREAK STATMENT

//Q10 stop at first multiple of 7
// write a loop from 1 to 100 that:
// .prints each number
// .stops completly when it finds the first number divisible by 7
// for(let i = 1; i<=100 ; i++){
//   if(i%7===0){
//     console.log(`The first number which is divisible to 7 is ${i}`)
//     break;
//   }
//   console.log(i)
// }

//QUESTION FOR CONTINUE STATMENT'

// Q11 skip multiples of 3

//write a loop from 1 to 20 that:
// .skips numbers divisible to 3 
// . prints all other numbers

// for(let i = 1; i<=20; i++){
//   if(i%3===0){
//     continue;
//   }
//   console.log(i)
// }