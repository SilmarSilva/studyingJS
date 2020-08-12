//Adicionando variáveis
//variável para calcular o número aleatório
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// variáveis para guardar referẽncias para os paragráfos do HTML
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
//variáveis para o campo do texto e o botão de envio, usados para controlar o envio do palpite
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
//variáveis para armazenar a contagem e refenciar o botão do reset
var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

//Funções
function conferirPalpite(){
    var palpiteUsuario = Number(campoPalpite.value);
    if(contagemPalpites === 1){
        palpites.textContent = 'Palpites anteriores: ';
        palpites.style.backgroundColor = 'yellow';
        palpites.style.fontSize = '200%';
        palpites.style.padding = '10px';
        palpites.style.boxShadow = '3px 3px 6px black';
    }
    palpites.textContent += palpiteUsuario + ' ';

    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.fontSize = '30px';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }   else if(contagemPalpites === 10){
        ultimoResultado.textContent = '<<<VOCÊ PERDEU>>>';
        ultimoResultado.style.fontSize = '30px';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }   else{
        ultimoResultado.textContent = 'Errou!';
        ultimoResultado.style.fontSize = '30px';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        }   else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}
envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo(){
    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for(var i = 0; i < reiniciarParas.length; i++){
        reiniciarParas[i].textContent = '';
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}