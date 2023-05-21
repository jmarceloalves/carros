const pessoas = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 28, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 35, cidade: "Brasília" },
    { nome: "Carlos", idade: 22, cidade: "Porto Alegre" },
    { nome: "Mariana", idade: 27, cidade: "Salvador" },
    // Adicione mais objetos de pessoas aqui, se necessário
    ];

// For Each
pessoas.forEach((pessoa)=>{
    alert(pessoa.nome);
 });

 // Filter
 let arrayFiltrado = pessoas.filter((pessoa)=>{
    if (pessoa.nome.charAt(0).toUpperCase() == 'M') {
        return true;
    }
 });

 alert("Começou");

// For Each
arrayFiltrado.forEach((filtro)=>{
    alert(filtro.nome);
 });