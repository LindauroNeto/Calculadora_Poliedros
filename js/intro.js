let formulario = document.querySelector('form')

let selecFig = document.querySelector('#selecFig')

let poliRet = document.querySelector('#poliRet')
let cili = document.querySelector('#cili')
let piraRet = document.querySelector('#piraRet')

let btnEnviar = document.querySelector('#btnEnviar')
let btnMarcar = document.querySelector('#btnMarcar')

btnMarcar.addEventListener('click', function(e){
    if (selecFig.value == poliRet.value) {
        formulario.setAttribute('action', 'polieRet.html')
    } else if (selecFig.value == cili.value) {
        formulario.setAttribute('action', 'cili.html')
    } else if (selecFig.value == piraRet.value) {
        formulario.setAttribute('action', 'piraRet.html')
    }

    e.preventDefault()
})
