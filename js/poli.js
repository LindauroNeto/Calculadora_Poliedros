const cxComprimento = document.querySelector('#comp')
const cxLargura = document.querySelector('#larg')
const cxProfundidade = document.querySelector('#prof')
const cxVolume = document.querySelector('#volu')

const sentBtn = document.querySelector('#sentBtn')
const resetBtn = document.querySelector('#resetBtn')

sentBtn.addEventListener('click', function(e){    
    var poliedro = {
        comp: cxComprimento.value,
        larg: cxLargura.value,
        prof: cxProfundidade.value,
        volu: cxVolume.value
    }

    let volume = poliedro.comp * poliedro.larg * poliedro.prof
    cxVolume.textContent = volume + ' cm³'

    e.preventDefault()
})

resetBtn.addEventListener('click', function(){
    cxVolume.textContent = '???'
})
