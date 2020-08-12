/*
Strings 4
<<<<<<< HEAD
In the final string task, we have given you the name of a theorem, two numeric values,
and an incomplete string (the bits that need adding are marked with asterisks (*)).
We want you to change the value of the string as follows:
=======
In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (*)). We want you to change the value of the string as follows:
>>>>>>> 12f79729d2216c3d33d0a1190aaf62d1e148ba4e

1. Change it from a regular string literal into a template literal.
2. Replace the four asterisks with four template literal placeholders. These should be:
    a) The name of the theorem.
    b) The two number values we have.
<<<<<<< HEAD
    c) The length of the hypotenuse of a right-angled triangle, given that the two other
    side lengths are the same as the two values we have. You'll need to look up how to
    calculate this from what you have. Do the calculation inside the placeholder.
=======
    c) The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.
>>>>>>> 12f79729d2216c3d33d0a1190aaf62d1e148ba4e
*/

let theorem = 'Pythagorean theorem';

let a = 5;
let b = 8;
<<<<<<< HEAD
//let c = (a**2) + (b**2); poderiamos ter essa variavel e substituir o placeholder por c.
let myString = `Using "${theorem}", we can work out that that if the two shortest sides\
 of a right-angled triangle have lengths of "${a}" and "${b}", the length of the hypotenuse is "${(a**2) + (b**2)}".`;
=======

let myString = 'Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.';
>>>>>>> 12f79729d2216c3d33d0a1190aaf62d1e148ba4e

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
