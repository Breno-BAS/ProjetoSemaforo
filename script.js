const automatico = document.getElementById('automatico');
const img = document.getElementById('img');
const botoes = document.getElementById('botoes')

let corIndex = 0;

const acenderSemaforo = (event) => {
    ligar[event.target.id]();
}

const nextIndex = () => {
    if (corIndex < 2) {
        corIndex++
    } else {
        corIndex = 0;
    }
}
const trocaCor = () => {
    const cores = ['red', 'amarelo', 'verde']
    const cor = cores[corIndex];
    ligar[cor]();
    nextIndex();
}
const ligar = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => setInterval(trocaCor, 1000)
}


botoes.addEventListener('click', acenderSemaforo)
