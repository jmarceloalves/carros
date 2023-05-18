// 1. Crie um array com os números de 01 a 10 e exiba na tela

let meuArray = [1,2,3,4,5,6,7,8,9,10]
alert(meuArray)

// 2. Crie um array com cinco cores diferentes e exiba na tela uma cor de cada vez

let meuArrayCores = ['amarelo', 'azul', 'vermelho', 'branco', 'rosa']

meuArrayCores.forEach(cor => {
    alert(cor);
});

// 3. Crie um array vazio e adicione os valores "banana", "maçã" e "laranja" ao final do array

let meuArrayFrutas = []

meuArrayFrutas.push('banana')
meuArrayFrutas.push('maçã')
meuArrayFrutas.push('laranja')

alert(meuArrayFrutas)

// 4 - Crie um array com 5 números aleatórios e calcule a média dos valores.

let meuArrayNumeros = [5,7,4,6,8]
let soma = 0

for (let index = 0; index < meuArrayNumeros.length; index++) {
    soma = soma + meuArrayNumeros[index];
}
alert(soma / meuArrayNumeros.length)

// 5 - Crie um array com 10 números aleatórios e exiba na tela apenas os números maiores que 5.

let meuArrayNumeros2 = [4,8,1,3,4,5,9,13,478,45]

for (let index = 0; index < meuArrayNumeros2.length; index++) {
    if (meuArrayNumeros2[index] > 5) {
        alert(meuArrayNumeros2[index])
    }  
}

// 6 - Crie um array com 5 nomes e ordene em ordem alfabética crescente.
let meuArray06 = ['João','Maria','José','Letícia','Antônio']
alert(meuArray06)
alert(meuArray06.sort())

// 7 - Crie um array com 5 números e ordene em ordem decrescente.
let meuArray07 = [1,2,3,4,5,6,7,8,9,10]
alert(meuArray07)
alert(meuArray07.sort((a,b)=>b-a))

// 8 - Crie um array com os valores "azul", "vermelho", "amarelo" e "verde". 
// Remova o elemento "vermelho" do array.

let meuArrayCores2 = ['azul','vermelho','amarelo','verde']

alert(meuArrayCores2)

meuArrayCores2.splice(1,1)

alert(meuArrayCores2)

// 9 - Crie um array com os valores "casa", "carro", "bicicleta" e "avião". 
// Inverta a ordem dos elementos do array.

let meuArray09 = ['casa','carro','bicicleta','avião'];
alert(meuArray09);

let contador = meuArray09.length - 1;
meuArray09Invertido = [];

for (let index = 0; index < meuArray09.length; index++) {
    meuArray09Invertido.push(meuArray09[contador]);
    contador = contador -1;
}

alert(meuArray09Invertido);

// 10 - Escreva uma função chamada multiplicarNumeros que receba um array de números como parâmetro e 
// retorne a multiplicação desses números.
function multiplicarNumeros(arr) {
    let resultado = 0;

    for (let index = 0; index < arr.length; index++) {
        if (index == 0) {
            resultado = arr[index];
        } else {
            resultado = resultado * arr[index];  
        } 
    }
    return resultado;
}

let meuArray10 = [1,2,3,4,5,6,7,8,9];
resultado = multiplicarNumeros(meuArray10);
alert(resultado);
// 11 - Escreva uma função chamada somarValoresPropriedade(arr, prop) que receba um array de 
// números e uma propriedade como parâmetros e retorne a soma dos valores do array que contem 
// aquele numero

function somarValoresPropriedade(arr, prop) {
    let resultado;

    for (let index = 0; index < arr.length; index++) {
        if (index == 0){
            resultado = arr[index];
        } else {
            if (prop == 'soma'){
                resultado = resultado + arr[index];
            } else if (prop == 'subtração') {
                resultado = resultado - arr[index];
            } else if (prop == 'multiplicação') {
                resultado = resultado * arr[index];
            } else if (prop == 'divisão') {
                resultado = resultado / arr[index];
            } else {
                resultado = 0;
            } 
        }
    }
    return resultado;
}

let meuArray11 = [1,2,3,4,5,6,7,8,9]

let resultado11;

resultado11 = somarValoresPropriedade(meuArray10, 'soma')
alert(resultado11);

resultado11 = somarValoresPropriedade(meuArray10, 'subtração')
alert(resultado11);

resultado11 = somarValoresPropriedade(meuArray10, 'multiplicação')
alert(resultado11);

resultado11 = somarValoresPropriedade(meuArray10, 'divisão')
alert(resultado11);

// 12 - Crie uma função que recebe um array de números e retorna um novo array com apenas os
//  números pares.
function arrayNumerosPares(arr) {
    let resultado = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            resultado.push(arr[index]);
        }
    }
    return resultado; 
}

let meuArray12 = [1,2,3,4,5,6,7,8,9,10];
let resultado12 = arrayNumerosPares(meuArray12);
alert(resultado12);

// 13 - Crie uma função que recebe um array de nomes e retorna um novo array com apenas os 
// nomes que começam com a letra "A".
function arrayNomes(arr) {
    let resultado = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index].charAt(0).toUpperCase() == 'A') {
            resultado.push(arr[index]);
        }
    }
    return resultado;
}

let meuArray13 = ['André','José','Maria','Ana','Angelina'];
let resultado13 = arrayNomes(meuArray13);
alert(resultado13);


// Resolvendo o exercício 13 com filtro
let meuArray13B = ['André','José','Maria','Ana','Angelina'];
alert(meuArray13B); 

let resultado13B = meuArray13B.filter(nome => {
    return nome.charAt(0).toUpperCase() == 'A';
})

alert(resultado13B);

// 14 - Crie uma função que recebe um array de números e um valor limite e retorna um novo 
// array com apenas os valores menores que o valor limite.
function arrayLimites(arr, limite) {
    let resultado = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] >= limite) {
            resultado.push(arr[index]);
        }
    }
    return resultado;
}

let meuArray14 = [1,2,3,4,10,20,30,40];
let resultado14 = arrayLimites(meuArray14,10);
alert(resultado14);

