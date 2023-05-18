// 1 - Faça um programa que entre com três números, faça a média aritmética e mostre o resultado. 
let numero1 = 5;
let numero2 = 10;
let numero3 = 15;

let resultado = (numero1 + numero2 + numero3) / 3;

alert(`A média dos números é ${resultado}.`);

// 2 - Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
// novo salário, sabendo que o mesmo teve um aumento de 10%. 
let salario = 1000.75415;
salario = salario * 1.1;

alert(`O novo salário é ${salario.toFixed(2)}.`);

// 3 - Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
// ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
// cálculo atribuir o valor para uma variável C. 

numero1 = 5;
numero2 = 10;

if (numero1 == numero2) {
    resultado = numero1 + numero2;
} else {
    resultado = numero1 * numero2;
}

alert(resultado);

// 4 - A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%. 

let precoVista = 1000;
let pagamentoParcelado = 3;
let precoFinal = 0;

if (pagamentoParcelado == 3) {
    precoFinal = precoVista * 1.1;
    alert(`O valor final em ${pagamentoParcelado} parcelas é R$ ${precoFinal}`)
} else if (pagamentoParcelado == 5) {
    precoFinal = precoVista * 1.2;
    alert(`O valor final em ${pagamentoParcelado} parcelas é R$ ${precoFinal}`)
} else {
    alert('Opção de parcelamento inválida!');
}

// 5 - Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.

let nome = 'Gabriel';
let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
let aprovado = media >= 8;

if (aprovado) {
    alert(`${nome} foi aprovado com média ${media}.`);
} else {
    alert(`${nome} obteve média ${media} e não foi aprovado.`);
}