function visualizar() {
    var dataAtual = new Date();
    var numeroDiaSemana = dataAtual.getDay();
    var resp = document.getElementById('resp')

    switch(numeroDiaSemana){
        case 0:
            resp.innerHTML = 'Domingo'
            break
        case 1:
            resp.innerHTML = 'Segunda'
            break
        case 2:
            resp.innerHTML = 'Terça'
            break
        case 3:
            resp.innerHTML = 'Quarta'
            break
        case 4:
            resp.innerHTML = 'Quinta'
            break
        case 5:
            resp.innerHTML = 'Sexta'
            break
        case 6:
            resp.innerHTML = 'Sábado'
            break
        default:
            resp.innerHTML = ''
    }
}
function limparCategoria() {
    var nome = document.getElementById('nome')
    var nasc = document.getElementById('nasc')
    nome.value = ""
    nasc.value = ""
    resp.innerHTML = ''

}