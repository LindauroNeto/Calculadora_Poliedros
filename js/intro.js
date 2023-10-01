let formulario = document.querySelector('form')

let selecFig = document.querySelector('#selecFig')

let poliRet = document.querySelector('#poliRet')
let cili = document.querySelector('#cili')
let piraRet = document.querySelector('#piraRet')

let btnEnviar = document.querySelector('#btnEnviar')

selecFig.addEventListener('click', function(e) {
    if (selecFig.textContent == poliRet) {
        formulario.setAttribute('action', 'polieRet.html')
    } else if (selecFig.textContent == cili) {
        formulario.setAttribute('action', 'cili.html')
    } else if (selecFig.textContent == piraRet) {
        formulario.setAttribute('action', 'piraRet.html')
    }

    e.preventDefault()
})

poliRet.addEventListener('click', function(){
    formulario.setAttribute('action', 'polieRet.html')
})
