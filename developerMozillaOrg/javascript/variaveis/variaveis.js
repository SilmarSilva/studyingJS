var button = document.querySelector('button');

button.onclick = function(){
    var nome = prompt('Qual é o seu nome?');
    alert('Olá ' + nome + ', é um prazer te ver!');
}
if(nome === 'Adão'){
    alert('Olá Adão, é um prazer te ver!');
} else if(nome === 'Alen'){
    alert('Olá Alan, é um prazer te ver!');
}