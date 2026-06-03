// Definicao dos Caracteres usados na senha
const MAIUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz';
const ESPECIAIS = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

// Gera a senha e coloca ela no campo "retorno"
function SetSenha() {

    let formCaract = document.getElementById('nrCaracteres');
    let retorno = document.getElementById('senhaRetorno');
    
    // Verfica se o valor inserido é valido de acordo com as regras do html
    if (formCaract.checkValidity()) {
        // Se valido, gera senha
        numCaract = Number(formCaract.value);
        retorno.innerText = GerarSenha(numCaract);
    } else {
        // Se falso, retorna a mensagem de erro ao inves da senha
        retorno.innerText = `Informe um Número Maior que ${formCaract.min} e Menor que ${formCaract.max}`;
    }

}

function GerarSenha(numCaract) {

    let senha = '';
    let caract = '';
    let tipo = 0;

    // Gera um caractere de cada tipo e o adiciona a senha
    senha = GerarCaract('numero');
    senha += GerarCaract('maiuscula');
    senha += GerarCaract('minuscula');
    senha += GerarCaract('especial');

    // Loop do comprimento atual da senha ate o numero de caracteres inserido pelo usuario
    for (let i = senha.length; i < numCaract; i++) {
        
        // Gera um numero aletorio de 1 a 4
        tipo = GerarNumeroAleatorio(1, 4);
        
        // Baseado no numero gera um caractere
        switch (tipo) {
            case 1:
                caract = GerarCaract('numero');
                break;
            case 2:
                caract = GerarCaract('maiuscula');
                break;
            case 3:
                caract = GerarCaract('minuscula');
                break;
            case 4:
                caract = GerarCaract('especial');
                break;
        }

        senha = senha + caract;

    }

    // Embaralha o array para q a senaha n fique sempre iniciando com a mesma sequencia
    return EmbaralharArray(senha);

}

function GerarCaract(tipo) {
    let caract = ''
    switch (tipo) {
        case 'numero':
            caract = GerarNumeroAleatorio(0, 9);
            return caract;
        case 'maiuscula':
            caract = MAIUSCULAS[GerarNumeroAleatorio(0, MAIUSCULAS.length - 1)];
            return caract;
        case 'minuscula':
            caract = MINUSCULAS[GerarNumeroAleatorio(0, MINUSCULAS.length - 1)];
            return caract;
        case 'especial':
            caract = ESPECIAIS[GerarNumeroAleatorio(0, ESPECIAIS.length - 1)];
            return caract;
    }
}

function EmbaralharArray(arr) {
    // Usa do algoritmo Fisher-Yates Shuffle
    // Pega os elementos da posicao i e j e inverte eles
    // i e a posicao atual q a gente esta invertendo, iterado sob um loop descrencte do tamanho do array até 0
    // j e uma posicao aleatoria gerada de 0 ate a posicao atualmente sendo iterada do array
    arr = arr.split('')
    for (let i = arr.length - 1; i > 0; i--) {
        const j = GerarNumeroAleatorio(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.join('')
}

function GerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}