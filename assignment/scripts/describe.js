// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a changeable variable called "name" and make it the string 'Dane'.
// We then create a conditional where if "name" is a strict equal to 'Mary', then the console will log 'Hi, Mary!'
// If "name" is not equal to 'Mary', console will log 'How do you do?'.
// Because "name" is 'Dane', console will log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a changeable variable called "secret", but do not give it a value. Therefore it is 'undefined'.
// We then create a changeable variable named "code" and give it the number value 123.
// We then write a conditional where if "code" is a strict equal to 123, the variable "secret" will be given the string value 'super', and the variable "code" will be multiplied by 2.
// Because "code" is equal to 123, the "secret" variable becomes 'super', and "code" is multiplied by 2, becoming 246.
// We then write another conditional where if "code" is greater than 250, the variable "secret" will change to 'duper'.
// Console will log 'super' becuase code is 246, which is less than the 250 set in the conditional.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a changeable variable named "isStudent" and give it the boolean value of true.
// We create a changeable variable named "age" and give it the number value 34.
// We create a changeable variable named "zip" and givr it the number value 55407.
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix) {
  colorOne = 'purple'
  colorTwo = 'purple'
}

/* FIX
The variables "colorOne" and "colorTwo" were incorrectly given the values 'red' and 'blue' respectively and needed to be switched.
We also need to add "colorTwo" = 'purple' to the conditional in order to get colorTwo to change to 'purple' if mix = true.
console.log should now give us 'purple' for both colorOne and colorTwo.
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/
let temp = 40;
const time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}

/* FIX
In the conditional we need to change '||' to '&&' because we need BOTH the 'temp' to be greater than 40 AND 'time' to be equal or greater than 4.
These conditionals are both met, so console.log will 'throw away the food!'.

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
let age = 21;
const minAge = 21;

if (age >= minAge) {
  console.log('enter')
}
else {
  console.log('no entry')
}
// FIX
// In the conditional, the "<=" operator was incorrect, as we are going to allow entry if the "age" is equal to or greater than "minAge".
// We also need to be mindful of the "=" because if "age" is equal to "minAge", we are also going to allow entry.
// We rearrange the variables and change the operator to (age >= minAge), which will then console.log 'enter'.
