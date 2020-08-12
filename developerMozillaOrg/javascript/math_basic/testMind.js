/*
1. Create four variables that contain numbers. Call the variables something sensible.
2. Add the first two variables together and store the result in another variable.
3. Subtract the fourth variable from the third and store the result in another variable.
4. Multiply the results from the last two steps together, storing the result in
a variable called finalResult. The product should be 48.
If it isn't, you'll have to adjust some of the initial input values.
5. Finally, write a calculation that checks whether finalResult is an even number.
Store the result in a variable called evenOddResult.
*/

let finalResult;

let evenOddResult;

// Add your code here
alert('Olá, participe do meu desafio. Informe 4 números de forma que a soma do primeiro\
 com o segundo mutiplicado pela diferença entre o terceiro e o quarto seja 48, topa?!')
let resultadoMult;
let resultadoSum;
let resutadoSub;

while (resultadoMult !== 48) {
  let n1 = Number(prompt('Informe o primeiro número')); //2
  let n2 = Number(prompt('Informe o segundo número')); // 4
  let n3 = Number(prompt('Informe o terceiro número')); // 3
  let n4 = Number(prompt('Informe o quarto número')); // 11
  resultadoSum = n1 + n2;
  resultadoSub = n3 - n4;
  resultadoMult = resultadoSum * resultadoSub;
  if (resultadoMult !== 48){
    alert('Não foi dessa vez, informe novamente quatro números');
  }
  if (finalResult % 2 === 0){
    finalResult = evenOddResult;
  }
}
if (resultadoMult === 48){
  alert('Parabéns, você acertou na mosca!');
  finalResult = resultadoMult;
}