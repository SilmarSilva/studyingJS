/* Calculadora: Inicialmente será uma calculadora simples, que realizará operações básicas,
mas a ideia é ir aprimorando e criar uma calculadora ciêntífica.
*/


let soma;
let subtracao;
let multiplicacao;
let divisao;
let resultado;


while (valorEntrada !== '=') {
    let valorEntrada = prompt('digite aqui');
    soma = valorEntrada + valorEntrada;
    subtracao = valorEntrada - valorEntrada;
    multiplicacao = valorEntrada * valorEntrada;
    divisao = valorEntrada * valorEntrada;
 }
 alert('o resultado da sua operação é' + resultado);