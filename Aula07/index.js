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

// Filter: filtra os dados em um array
 let arrayFiltrado = pessoas.filter((pessoa)=>{
    if (pessoa.nome.charAt(0).toUpperCase() == 'M') {
        return true;
    }
 });

 alert("Começou");

arrayFiltrado.forEach((filtro)=>{
    alert(filtro.nome);
 });

 // Map: constrói um array a partir de outro array
 const carros = [
    { valor: 30000, marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata" },
    { valor: 30000, marca: "Honda", modelo: "Civic", ano: 2019, cor: "Branco" },
    { valor: 30000, marca: "Volkswagen", modelo: "Golf", ano: 2021, cor: "Azul" },
    { valor: 30000, marca: "Ford", modelo: "Mustang", ano: 2022, cor: "Vermelho" },
    { valor: 30000, marca: "Chevrolet", modelo: "Camaro", ano: 2020, cor: "Amarelo" },
    { valor: 30000, marca: "BMW", modelo: "X5", ano: 2018, cor: "Preto" },
    ];

let marcas = carros.map((carro)=>{
    return carro.marca;
})

alert(marcas)

const carrosMap = carros.map((carro)=>{
    carro.valor = `R$ ${carro.valor},00`;
    return carro;
})

alert(JSON.stringify(carrosMap));

