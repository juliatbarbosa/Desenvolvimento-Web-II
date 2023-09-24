function CalcularCombustivel() {
    var gasolina = document.getElementById('gasolina')
    var etanol = document.getElementById('etanol')
    var resp = document.getElementById('resp')

    if (etanol.value == '' && gasolina.value == '') {
        resp.innerHTML = 'Preencha os campos!'
    } else if (etanol.value >= (gasolina.value * 0.7)) {
        resp.innerHTML = 'Está compensado abastecer com etanol!'

    } else {
        resp.innerHTML = 'Está compensado abastecer com gasolina!'
    }
}

function limparCombustivel() {
    var gasolina = document.getElementById('gasolina')
    var etanol = document.getElementById('etanol')
    gasolina.value = ""
    etanol.value = ""
    resp.innerHTML = ''

}