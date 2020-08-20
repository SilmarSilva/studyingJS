/* Criar uma programa que converta string de maiúsculo para minúsculo
1. Converter todo o texto para maiúsculo;
2. Coverter todo o texto para minúsculo;
3. Converter apenas o primeiro caracter da string de cada frase;
4. Converter o texto alternar os caracteres entre maiúculo e minúsculo;
5. Converter o texto alternar os caracteres entre minúsculo e maiúsculo;
*/

//let enterText = prompt('');
let textToAllUpper = enterText.toUpperCase();
let textToallLower = enterText.toLowerCase();
let textFirstUpper = textToallLower[0].toUpperCase() + textToallLower.slice(1);
//let textAlterUpperLower;
//let textAlterLowerUpper;
//let startChange;

function textFirstFrase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
