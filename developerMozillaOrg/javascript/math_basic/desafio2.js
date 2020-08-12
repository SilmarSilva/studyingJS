/*
1. Write a calculation that multiples result and result2 together and assigns
the result back to result. This will require assignment shorthand.
2. Write a line of code that takes result and formats it to 2 decimal places,
storing the result of this in a variable called finalResult.
3. Check the data type of finalResult using typeof; you'll probably see that it is
actually of string type! Write a line of code that converts it to a number type, storing the
result in a variable called finalNumber.
4. The value of finalNumber needs to be 10.42. Go back and update the original calculations you
were provided with so that they give this final result. Don't update the numbers or the operators.
 */



// Final result should be 10.42
// Add/update your code here

/*
let result = prompt('insira um número: ');
let result2 = prompt('insira um número: ');
let finalResult = result * result2;
console.log(finalResult.toFixed(2));
if (finalResult === 'string'){
    finalResult.to
}
*/
let result = (7 + 13) / (9 + 7);
let result2 = 100 / (2 * 6);
let finalResult = (result * result2).toFixed(2);
if (typeof finalResult === "string"){
    finalNumber = Number(finalResult);
} else
    finalNumber = finalResult;
    

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
let para2 = document.createElement('p');
let finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);