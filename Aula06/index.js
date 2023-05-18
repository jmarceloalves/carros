let carros = [];

function cadastrarCarros() {
    let placa = prompt('Digite a placa:');

    if (placa.length < 7){
        alert('Placa inválida. Saindo do sistema');
        return;
    }

    let cor = prompt('Digite a cor:');
    let ano = prompt('Digite o ano:');

    let carro = {
        placa: placa,
        cor: cor,
        ano: ano,
    }

    carros.push(carro);

    executarMenu();
}

function pesquisarCarros(placa) {
    if (carros.length == 0) {
        alert('Não existe nenhum carro cadastrado com essa placa.');
        executarMenu();
    } else {
        carros.forEach(carro => {
            if (carro.placa == placa) {
                alert(`
                    Placa: ${carro.placa}
                    Cor: ${carro.cor}
                    Ano: ${carro.ano}
                `)
            } else {
                alert('Placa não localizada')
            }

        executarMenu();
        })

    }
}

function executarMenu() {
    let acao = prompt(`
        (1) Cadastrar automóvel
        (2) Pesquisar automóvel
        (3) Sair
    `)

    if (acao == '1') {
        cadastrarCarros();
    } else if (acao == 2) {
        pesquisarCarros(prompt('Digite a placa:'));
    } else {
        alert('Obrigado por participar.')
    }
}

executarMenu();