/*
In the next string task, you are given the same quote that you ended up with in the previous task,
but it is somewhat broken! We want you to fix and update it, like so:

1. Change the casing to correct sentence case (all lowercase, except for upper case first letter).
Store the new quote in a variable called fixedQuote.
2. In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
3. There is one more small fix to do — add a full stop onto the end of the quote,
and save the final version in a variable called finalQuote.
*/

let quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here
let lowerQuote = quote.toLowerCase();
let fixedQuote = lowerQuote.toUpperCase(0) + lowerQuote.slice(1);
let finalQuote = fixedQuote.replace('green eggs and ham','crabs and muzzarella'+ '.');

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = fixedQuote;
let para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
    