/*
Strings 1
In our first strings task, we start off small.
You already have half of a famous quote inside a variable called quoteStart;
we would like you to:

1. Look up the other half of the quote, and add it to the example inside a variable called quoteEnd.

2. Concatenate the two strings together to make a single string containing the complete quote.
Save the result inside a variable called finalQuote.

You'll find that you get an error at this point.
Can you fix the problem with quoteStart, so that the full quote displays correctly?
*/


// Add your code here

let quoteStart = 'Don't judge each day by the harvest you reap ';

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);