const cxRaio = document.querySelector('#raio')
const cxAltu = document.querySelector('#altu')

const cxVolume = document.querySelector('#volu')

const sentBtn = document.querySelector('#sentBtn')
const resetBtn = document.querySelector('#resetBtn')

sentBtn.addEventListener('click', function(e){    
    var poliedro = new Figura(
        this.altu = cxAltu.value,
        this.volu = cxVolume.value,
        raio = cxRaio.value,
        this.volume = (this.raio ** 2) * this.altu * 3.14
    )
    cxVolume.textContent = poliedro.volume + ' cm³'

    e.preventDefault()
})

resetBtn.addEventListener('click', function(){
    cxVolume.textContent = '???'
})
