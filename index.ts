// 1. Hello world // create a variable name Greeting
let Greeting = "Hello world";
console.log(Greeting);
// 2.  Basic Math
let num1 = 10;
let num2 = 20;

let sum = (num1+num2);
let difference = (num1-num2);
let product = (num1*num2);
let quotient = (num1/num2);

console.log("sum=", sum);
console.log("Difference=", difference);
console.log("Product=", product);
console.log("Quotient=", quotient);
// 3. Swapping Values

let a = 5;
let b = 3;
console.log("Before swapping:");
console.log("a=", a);
console.log("b=", b);

[a, b] = [b, a];
console.log("\nAfter swapping:");
console.log("a=", a);
console.log("b=", b);

//4. Type Annotation (TypeScript)
let message: string;
//Attempting to assign a number to a string variable
//message = 005;// this will raise a Typescript error

// 5. Modulus Operator
let num3: number = 10;
let num4: number = 3;
// finding the remainder using the modulus operator
let remainder: number = num3 % num4;
console.log(` The remainder of ${num3} divided by ${num4} is ${remainder} `);
// 6. Increment Challenge
let counter = 0 ;
// using the addition operator (+=)
counter +=1;
console.log("After incrementing using the addition operator:", counter);
 counter = 0;
// using the increment operator 
counter++;
console.log("After incrementing using the increment operator:", counter);
// 7. Logical Gates

let A = true,
  B = false,
  C = true;

  // AND gate 

  let ANDgate: boolean = A && B;
  console.log("AND gate result:", ANDgate);// false 

  // OR gate 

  let ORgate: boolean = A || B;
  console.log("OR gate result:", ORgate);// true 

  // NOT Gate (using variable C)

  let NOTgate: boolean = !C;
  console.log("NOT gate result:", NOTgate);// false
  // 8. Compound Assignment

  let num: number = 10;
  // by using += operator 
   num += 10; // equivalent to num = num +10
   console.log("After +=:", num);
   // by using -= operator
   num -= 5; 
   console.log("After -=:", num);

   // by using *= operator
   num *= 3;
   console.log("After *=:", num);

   // by using /= operator
   num /= 2;
   console.log("After /=:", num);

   // 9. Even or Odd

   let Y: number = 10 ; 
   if(Y % 2 == 0){
    console.log(`${Y} is Even` );
   }
   else {
    console.log(`${Y} is odd `);
   }
   // 10. Voting Eligibility

   let age: number  = 25;
   if(age>=18) { 
    console.log("you are eligible to vote.");
   } 
   else { 
    console.log("you are not eligible to vote.");
   }
// 11. Grading System

let score: number  = 100;
let grade: string ;

if (score >=90) { 
    grade = `A`;
} else if ( score >= 80) { 
    grade = `B`;
} else if ( score >= 70) { 
    grade = `C`;
} else if ( score >= 60) { 
    grade = `D`;
} else { 
    grade = `F`;
}
console.log (`According to score ${score}, your grade is ${grade}.`);

// 12. Max of Three
let x: number = 5;
let y: number = 6;
let z: number = 7;
let max: number;

if(x >= y && x>=z){ 
    max = x;
} else if (y>=x && y>=z){ 
    max =y;
} else { 
    max = z;
}
console.log(`The maximumm of ${x}, ${y}, and ${z} is ${max}.`);

//13. Leap Year Checker
let year: number = 2024; 

let isLeapYear: boolean;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}

if (isLeapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
// 14. Fahrenheit to Celsius Converter
let fahrenheit: number= 32;
let celsius: number = (fahrenheit - 32) * 5/9;

console.log(`${fahrenheit} degrees Fahrenheit is equal to ${celsius.toFixed(2)} degrees Celsius.`);

//15. Positive, Negative, or Zero

let number: number = 40; 

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
// 16. Multiplication Table 
let number1: number = 5; 

console.log(`Multiplication table for ${number1}:`);
console.log(`${number1} * 1 = ${number1 * 1}`);
console.log(`${number1} * 2 = ${number1 * 2}`);
console.log(`${number1} * 3 = ${number1 * 3}`);
console.log(`${number1} * 4 = ${number1 * 4}`);
console.log(`${number1} * 5 = ${number1 * 5}`);
console.log(`${number1} * 6 = ${number1 * 6}`);
console.log(`${number1} * 7 = ${number1 * 7}`);
console.log(`${number1} * 8 = ${number1 * 8}`);
console.log(`${number1} * 9 = ${number1 * 9}`);
console.log(`${number1} * 10 = ${number1 * 10}`);
console.log("Hi welcome to Github");











