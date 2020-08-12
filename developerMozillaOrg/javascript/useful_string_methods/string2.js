/*
Strings 2
In this task you are provided with two variables, quote and substring, which contain two strings. We would like you to:

1. Retrieve the length of the quote, and store it in a variable called quoteLength.
2. Find the index position where substring appears in quote, and store that value in a  variable called index.
3. Use a combination of the variables you have and available string properties/methods
to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.
*/

let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
let substring = 'green eggs and ham';

// Add your code here

let quoteLength = quote.length;
let index = quote.indexOf('g');
quote.indexOf('g');
quote.indexOf('.');
let revisedQuote = quote.slice(14, 32);

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
let para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);