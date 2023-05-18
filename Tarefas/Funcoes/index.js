// 1 - Escreva uma função chamada soma que receba dois parâmetros e retorne a soma deles
function soma(par1, par2) {
    let resultado = par1 + par2
    alert(resultado)
}

soma(10, 10)

// 2 - Escreva uma função chamada maiorNumero que receba dois parâmetros e retorne o maior deles.
function maiorNumero(par1, par2) {
    if (par1 > par2) {
        alert('Valor 1 é maior que o valor 2.')
    }
    else if (par1 < par2 ) {
        alert('Valor 1 é menor que o valor 2.')
    } else {
        alert('Os valores são iguais.')
    }
}

maiorNumero(5, 10)
maiorNumero(10, 5)
maiorNumero(10, 10)

// 3 - Escreva uma função chamada parOuImpar que receba um número como parâmetro e retorne par se o número for par e ímpar caso contrário.
function parOuImpar(valor) {
    resto = valor % 2

    if (resto == 0) {
        alert(`O número ${valor} é par.`)
    } else {
        alert(`O número ${valor} é impar.`)
    }
}

parOuImpar(2)
parOuImpar(3)

// 4 - Escreva uma função chamada maiusculaInicial que receba uma string como parâmetro e retorne a string com a primeira letra em maiúscula.
function maiusculaInicial(texto) {
    let primeiraLetra = texto.charAt(0).toUpperCase()
    let restoDaString = texto.slice(1)
    let retorno = primeiraLetra + restoDaString

    alert(retorno)
}

maiusculaInicial('marcelo')

// 5 - Escreva uma função chamada celsiusParaFahrenheit que receba uma temperatura em graus Celsius como parâmetro e retorne a temperatura equivalente em graus Fahrenheit.
function celsiusParaFahrenheit(valor) {
    retorno = valor * 1.8 + 32
    alert(retorno)
}

celsiusParaFahrenheit(23)

// 6 - Escreva uma função chamada calcularMediaAprovacao que receba três notas como parâmetros e retorne aprovado se a média for maior ou igual a 7 e reprovado caso contrário.
function calcularMediaAprovacao(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        alert('Aprovado')
    }
    else {
        alert('Reprovado')
    }
}

calcularMediaAprovacao(5, 5, 5)
calcularMediaAprovacao(8, 8, 8)