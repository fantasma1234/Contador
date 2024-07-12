let n = 0
let cont = document.querySelector('#cont')  
function somar() {
    n++
    cont.innerHTML = n
}

function subtrair() {
    n--
    cont.innerHTML = n
}

function resetar() {
    n = 0
    cont.innerHTML = 0
}