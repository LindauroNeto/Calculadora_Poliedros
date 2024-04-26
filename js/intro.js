function pegarDoDocumento(id) {
    return document.querySelector(id)
}

let formulario = pegarDoDocumento('form')

let selecFig = pegarDoDocumento('#selecFig')

let poliRet = pegarDoDocumento('#poliRet')
let cili = pegarDoDocumento('#cili')
let piraRet = pegarDoDocumento('#piraRet')

let btnEnviar = pegarDoDocumento('#btnEnviar')
let btnMarcar = pegarDoDocumento('#btnMarcar')

btnMarcar.addEventListener('click', function(e){
    switch (selecFig.value) {
        case poliRet.value:
            formulario.setAttribute('action', 'polieRet.html')
            break;

        case cili.value:
            formulario.setAttribute('action', 'cili.html')
            break;

        case piraRet.value:
            formulario.setAttribute('action', 'piraRet.html')
            break;
    
        default:
            break;
    }

    e.preventDefault()
})

class Figura {
    constructor(){
        comp,
        larg,
        altu,
        volu,
        raio,
        volume
    }
}
