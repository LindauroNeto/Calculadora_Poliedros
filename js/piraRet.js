const cxAreaBase = document.querySelector('#areaBase')
const cxAltu = document.querySelector('#altu')

const cxVolume = document.querySelector('#volu')

const sentBtn = document.querySelector('#sentBtn')
const resetBtn = document.querySelector('#resetBtn')

sentBtn.addEventListener('click', function(e){    
    var poliedro = {
        areaB: cxAreaBase.value,
        altu: cxAltu.value,
        volu: cxVolume.value
    }

    let volume = (poliedro.areaB ** 2) * poliedro.altu / 3
    cxVolume.textContent = volume + ' cm³'

    e.preventDefault()
})

resetBtn.addEventListener('click', function(){
    cxVolume.textContent = '???'
})