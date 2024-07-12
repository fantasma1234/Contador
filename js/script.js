let cont = document.querySelector('#cont')
cont.innerText = localStorage.getItem("cont") || "0"
let n = parseInt(cont.innerText)
function somar() {
    n++
    cont.innerHTML = n
    Salvar()
}

function subtrair() {
    n--
    cont.innerHTML = n
    Salvar()
}

function resetar() {
    n = 0
    cont.innerHTML = 0
    Salvar()
}

function Salvar() {
    localStorage.setItem("cont", cont.innerText)
}