/*You've got three groups,each consisting of a statement and two variables.
For each one, write a test that proves or disproves the statement made.
Store the results of those tests in variables called
weightComparison, heightComparison, and pwdMatch, respectively.
*/


// Statement 1: The elephant weights less than the mouse
let eleWeight = 1000;
let mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
let ostrichHeight = 2;
let duckHeight = 0.3;

// Statement 3: The two passwords match
let pwd1 = 'stromboli';
let pwd2 = 'stROmBoLi';

// Add your code here
if (eleWeight > mouseWeight){
    weightComparison = true;
} else {
    weightComparison = false;
};

if (ostrichHeight > duckHeight){
    heightComparison = true;
} else {
    heightComparison = false;
};

if (pwd1 === pwd2) {
    pwdMatch = true;    
} else {
    pwdMatch = false;
};
console.log(pwdMatch + weightComparison + heightComparison);
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let para3 = document.createElement('p');

let weightTest = weightComparison ? 'True — elephants weight less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
let heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
let pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);