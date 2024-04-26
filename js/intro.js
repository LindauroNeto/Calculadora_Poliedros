function pegarDoDocumento(id) {
    return document.querySelector(id)
}

const formulario = pegarDoDocumento('form')

const selecFig = pegarDoDocumento('#selecFig')

const poliRet = pegarDoDocumento('#poliRet')
const cili = pegarDoDocumento('#cili')
const piraRet = pegarDoDocumento('#piraRet')

const btnEnviar = pegarDoDocumento('#btnEnviar')
const btnMarcar = pegarDoDocumento('#btnMarcar')

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
