var itens = [];
abrir();

function inserir(){
    var nome = document.getElementById("nome");
    var nSerie = document.getElementById("numeroSerie");
    var fornecedor = document.getElementById("fornecedor");
    var valor = document.getElementById("valor");
    var garantia = document.getElementById("garantia");

    if (nome.value === "" || nSerie.value === "" || fornecedor.value === "" || valor.value === "" || garantia.value === "") {
        alert("Por favor, preencha todos os campos antes de adicionar um novo item.");
        return;
    }

    var equipamento = {};
    equipamento.nome = nome.value;
    equipamento.nSerie = nSerie.value;
    equipamento.fornecedor = fornecedor.value;
    equipamento.valor = valor.value;
    equipamento.garantia = garantia.value;
    equipamento.excluir = excluir.value

    itens.push(equipamento);
    
    nome.value = "";
    nome.value = ""
    nSerie.value = "";
    fornecedor.value = "";
    valor.value = "";
    garantia.value = "";

    nome.focus();
    salvar();
    listar();

}


function listar(){
    var tab = document.getElementById("tabela");
    tab.innerHTML = "";
    tab.innerHTML += "<thead>"
    + "<th>Nome</th>"
    + "<th class='colunaNumero'>Número de série</th>"
    + "<th class='colunaNumero'>Valor</th>"
    + "<th>Fornecedor</th>"
    + "<th class='colunaNumero'>Garantia (meses)</th>"
    + "<th class='colunaIcone'></th>"
    + "<thead>"

    for (var i in itens){
        tab.innerHTML += "<tr><td>" 
        + itens[i].nome 
        + "</td><td class='colunaNumero'>"
        + itens[i].nSerie
        + "</td><td class='colunaNumero'>R$ "
        + itens[i].valor
        + "</td><td>"
        + itens[i].fornecedor
        + "</td><td class='colunaNumero'>"
        + itens[i].garantia
        + "</td><td>"
        + "<img class='imgClose' title='Excluir' src='img/close-cinza.png' onclick='excluir("+i+")'>"
        + "</td class='colunaIcone'></tr>"
    }
}
function excluir(i){
    itens.splice(i,1);
    listar();
}
function salvar(){
    var dados = JSON.stringify(itens);
    localStorage.setItem("dados" , dados);
}
function abrir(){
    var dados = localStorage.getItem("dados");
    itens = JSON.parse(dados);

    listar();
}

