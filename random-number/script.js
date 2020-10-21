
function randomnum() {
    let erro = document.getElementById("erro")
    let resultado1 = document.getElementById('result')
    let minimo = document.getElementById('numeromin')
    let maximo = document.getElementById('numeromax')
    erro.innerText = ""
    if (Number(minimo.value) > Number(maximo.value)) {
        erro.innerHTML = 'The minimum value entered is greater than the maximum value'
    } else if (minimo.value == NaN || maximo.value == NaN || maximo.value == 0) {
        erro.innerHTML = 'Value entered is not valid'
    } else {
    let numeroaleat = Math.floor((Math.random() * (Number(maximo.value) + 1 - Number(minimo.value)))) + Number(minimo.value)
    resultado1.innerText = numeroaleat
    
    }
}
