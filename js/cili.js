let cxRaio = document.querySelector('#raio')
let cxAltu = document.querySelector('#altu')

let cxVolume = document.querySelector('#volu')

let sentBtn = document.querySelector('#sentBtn')
let resetBtn = document.querySelector('#resetBtn')

sentBtn.addEventListener('click', function(e){    
    var poliedro = {
        raio: cxRaio.value,
        altu: cxAltu.value,
        volu: cxVolume.value
    }

    let volume = (poliedro.raio ** 2) * poliedro.altu * 3.14
    cxVolume.textContent = volume + ' cm³'

    e.preventDefault()
})

resetBtn.addEventListener('click', function(){
    cxVolume.textContent = '???'
})
