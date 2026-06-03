let tamanhoFonte = localStorage.getItem('tamanhoFonte');
let tema = localStorage.getItem('tema');
let pagina = document.getElementsByTagName('title').item(0).innerText;
let caminhoBase = '';
const html = document.getElementById('html');

// Se nao tiver tamanho salvo seta tamanho para o valor carregado no html, que vem do css
if (tamanhoFonte == null) {
    tamanhoFonte = getComputedStyle(html).fontSize;
    localStorage.setItem('tamanhoFonte', tamanhoFonte);
}

// Verifica o title do pagina, "Home" foi colocado no Index
// Seta o caminho base com referencia na pagina atual
if (pagina === 'Home') {
    caminhoBase = './'
} else {
    caminhoBase = '../'
}

document.documentElement.style.fontSize = tamanhoFonte;

// Evento para quando ser criada a DOM de algum site
window.addEventListener('DOMContentLoaded', () => {

    // Verifica se o tema atual e faz as alteracoes
    if (tema === 'light') {
        SetImgLightTheme();
        html.classList.add('darkTheme');
    } else {
        SetImgDarkTheme();
        html.classList.remove('darkTheme');
    }

})

function SetImgDarkTheme() {
    document.getElementById('imgDiminuirFonte').src = caminhoBase + 'assets/text_decrease_44dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.svg';
    document.getElementById('imgAumentarFonte').src = caminhoBase + 'assets/text_increase_44dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.svg';
    document.getElementById('imgTheme').src = caminhoBase + 'assets/light_mode_44dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
}

function SetImgLightTheme() {
    document.getElementById('imgDiminuirFonte').src = caminhoBase + 'assets/text_decrease_44dp_000000_FILL0_wght400_GRAD0_opsz48.svg';
    document.getElementById('imgAumentarFonte').src = caminhoBase + 'assets/text_increase_44dp_000000_FILL0_wght400_GRAD0_opsz48.svg';
    document.getElementById('imgTheme').src = caminhoBase + 'assets/dark_mode_44dp_000000_FILL0_wght400_GRAD0_opsz48.svg';
}

function TrocarTema() {

    html.classList.toggle('darkTheme');

    /* verifica se a tag HTML tem a classe lightTheme 
    faz a alteração na página para corresponder ao tema trocado
    adiciona ao localStorage o tema atual */
    if (html.classList.contains('lightTheme')) {
        SetImgLightTheme();
        localStorage.setItem('tema', 'light');
    } else {
        SetImgDarkTheme();
        localStorage.setItem('tema', 'dark');
    }

}

function AumentarFonte() {
    let t = parseFloat(localStorage.getItem('tamanhoFonte'))
    t += 1
    tamanhoFonte = t + 'px'
    document.documentElement.style.fontSize = tamanhoFonte
    localStorage.setItem('tamanhoFonte', tamanhoFonte)
}

function DiminuirFonte() {
    let t = parseFloat(localStorage.getItem('tamanhoFonte'))
    t -= 1
    tamanhoFonte = t + 'px'
    document.documentElement.style.fontSize = tamanhoFonte
    localStorage.setItem('tamanhoFonte', tamanhoFonte)
}