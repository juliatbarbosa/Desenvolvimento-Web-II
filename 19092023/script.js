//Exercício 1

function calcular() {
    var produto = document.getElementById('produto')
    var quant = document.getElementById('quant')
    var dinheiro = document.getElementById('dinheiro');
    var cartao = document.getElementById('cartao');
    var entrega = document.getElementById('entrega');
    var coca = document.getElementById('coca')
    var coxinha = document.getElementById('coxinha')
    var pao = document.getElementById('pao')
    var resp1 = document.getElementById('resp1');
//<p>Total a pagar:</p>
    
    if (produto.options[produto.selectedIndex].text == 'Coca-cola Lata') {
        coca.value = 3.5
    } 
    else if (produto.options[produto.selectedIndex].text == 'Coxinha') {
        coxinha.value = 4
    }
    else if (produto.options[produto.selectedIndex].text == 'Pão de queijo'){
        pao.value = 3
    }
    dinheiro.value = 0.1
    entrega.value = 6

    var total = 

    console.log(coca.value)
    console.log(pao.value)
    console.log(coxinha.value)

    

}

function limpar() {
    var txt1 = document.getElementById('txt1')
    var txt2 = document.getElementById('txt2')
    var resp1 = document.getElementById('resp1')
    txt1.value = ""
    txt2.value = ""
    resp1.innerHTML = 'Troco'

}