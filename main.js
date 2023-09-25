let cxComprimento = document.querySelector('#comp')
let cxLargura = document.querySelector('#larg')
let cxProfundidade = document.querySelector('#prof')
let cxVolume = document.querySelector('#volu')

let sentBtn = document.querySelector('#sentBtn')
let resetBtn = document.querySelector('#resetBtn')

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
