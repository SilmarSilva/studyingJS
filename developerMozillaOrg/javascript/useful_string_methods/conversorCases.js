/*
1. Convert the whole of the string contained in the input variable
to lower case and store it in a new variable.
2. Grab the first letter of the string in this
new variable and store it in another variable.
3. Using this latest variable as a substring, replace the first letter of the
lowercase string with the first letter of the lowercase
string changed to upper case. Store the result of this replace procedure in another new variable.
4. Change the value of the result variable to equal to the final result, not the input.
*/

const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  let lower = input.toLowerCase();
  let firstLetter = lower.slice(0,1);
  let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  let result = capitalized;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
