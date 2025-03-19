function comprar() {
    //recuperar local do ingresso da compra
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    //recuperar quantidade de ingresso da compra
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(qtd) {
    //recuperar quantidade de ingressos disponiveis
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    //validação da quantidade
    if (qtd > qtdPista) {
        alert("Quantidade não disponível para o tipo pista");
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra realizada com sucesso");
    }
}

function comprarSuperior(qtd) {
    //recuperar quantidade de ingressos disponiveis
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    //validação da quantidade
    if (qtd > qtdSuperior) {
        alert("Quantidade não disponível para o tipo superior");
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra realizada com sucesso");
    }
}

function comprarInferior(qtd) {
    //recuperar quantidade de ingressos disponiveis
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    //validação da quantidade
    if (qtd > qtdInferior) {
        alert("Quantidade não disponível para o tipo inferior");
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra realizada com sucesso");
    }
}