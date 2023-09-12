var poliedro = {
    comprimento: document.querySelector('#btn-compr'),
    largura: document.querySelector('#btn-larg'),
    profundidade: document.querySelector('#btn-prof'),
    volum: document.querySelector('#btn-vol')
}

var valores = {
    compri: document.querySelector('#compr'),
    larg: document.querySelector('#larg'),
    prof: document.querySelector('#prof'),
    vol: document.querySelector('#vol')
}

// function C(){
//     valores.compri.textContent = prompt("Valor do comprimento:")
// }

const Volume = (a, b, c) => a * b * c

const C = () => valores.compri.textContent = prompt("Valor do comprimento:")
const L = () => valores.larg.textContent = prompt("Valor da largura:")
const P = () => valores.prof.textContent = prompt("Valor da produndidade:")
const V = () => valores.vol.textContent = Volume(valores.compri.textContent, valores.larg.textContent, valores.prof.textContent)

poliedro.comprimento.addEventListener('click', C)
poliedro.largura.addEventListener('click', L)
poliedro.profundidade.addEventListener('click', P)
poliedro.volum.addEventListener('click', V)