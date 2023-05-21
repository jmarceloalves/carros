let baseLivros = [];
let codigoLivro = 0;

function executarMenu() {
    let acao = prompt(`
        (1) - Cadastrar;
        (2) - Pesquisar;
        (3) - Excluir;
        (4) - Alterar; (desafio)
        (5) - Filtrar livros por categoria (desafio)
        (0) - Sair;
        `)

    if(acao == '1') {
        cadastrarLivro();
    } else if (acao == '2') {
        pesquisarLivro();
    } else if (acao == '3') {
        exluirLivro();
    } else if (acao == '4') {
        alterarLivro();
    } else if (acao == '5') {
        filtrarLivros();
    } else {
        sair();
    }
}

executarMenu()

function cadastrarLivro() {
    let maxCodigoLivro = codigoLivro + 1;
    codigoLivro = maxCodigoLivro;

    let nomeLivro = prompt('Digite o nome do livro:');
    let categoriaLivro = prompt('Digite a categoria do livro:');
    let valorLivro = parseFloat(prompt('Digite o valor do livro'));

    let livroIns = {
        codigoLivro: maxCodigoLivro,
        nomeLivro: nomeLivro,
        categoriaLivro: categoriaLivro,
        valorLivro: valorLivro,
    };

    baseLivros.push(livroIns);
    executarMenu();
}

function pesquisarLivro() { 
    let nomeLivro = prompt('Digite o nome do livro:');
    let flagRetorno = false;

    baseLivros.forEach(livro => {
        if (livro.nomeLivro == nomeLivro) {
            alert(`
            Código: ${livro.codigoLivro}
            Nome: ${livro.nomeLivro}
            categoria: ${livro.categoriaLivro}
            Valor: ${livro.valorLivro}`);

            flagRetorno = true;
        }  
    }
    )

    if (flagRetorno == false) {
        alert(`Livro ${nomeLivro} não localizado.`)
    }

    executarMenu();
}

function exluirLivro() {
    nomeLivro = prompt('Digite o nome do livro:');
    let flagRetorno = false;
    let i = 1;

    baseLivros.forEach(livro => { 
        if (livro.nomeLivro == nomeLivro) {
            baseLivros.splice(i,1);
            flagRetorno = true;
        }  
        i = i + 1;
    }
    )

    if (flagRetorno == false) {
        alert(`Livro ${nomeLivro} não localizado.`)
    }
    executarMenu();
}

function alterarLivro() {
    let nomeLivro = prompt('Digite o nome do livro:');
    let flagRetorno = false;
    let i = 1;

    baseLivros.forEach(livro => {
        if (livro.nomeLivro == nomeLivro) {
            baseLivros[i].nomeLivro = prompt('Digite o nome do livro:');
            baseLivros[i].categoriaLivro = prompt('Digite a categoria do livro:');
            baseLivros[i].valorLivro = parseFloat(prompt('Digite o valor do livro'));

            flagRetorno = true;
        }  
        i = i + 1;
    }
    )

    if (flagRetorno == false) {
        alert(`Livro ${nomeLivro} não localizado.`)
    }
    executarMenu();   
}

function filtrarLivros() {
    let categoriaLivro = prompt('Digite a categoria desejada:');
    let flagRetorno = false;
    let i = 1;
    
    baseLivros.forEach(livro => {
        if (livro.categoriaLivro == categoriaLivro) {
            alert(`
            Código: ${livro.codigoLivro}
            Nome: ${livro.nomeLivro}
            categoria: ${livro.categoriaLivro}
            Valor: ${livro.valorLivro}`);

            flagRetorno = true;
        }  
        i = i + 1;
    }
    )

    if (flagRetorno == false) {
        alert(`Categoria ${categoriaLivro} não localizada.`)
    }
    executarMenu(); 
}

function sair() {
    return;
}