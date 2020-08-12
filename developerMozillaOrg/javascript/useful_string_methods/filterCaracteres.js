/*
1. First think about how you could test whether the message in
each case is a Christmas message. What string is present in all of those messages,
and what method could you use to test whether it is present?
2. You'll then need to write a conditional test of the form
operand1 operator operand2. Is the thing on the left equal to
the thing on the right? Or in this case, does the method call
on the left return the result on the right?

*/

const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  if (greetings[i].indexOf('Christmas') !== -1) {
    let result = input;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}