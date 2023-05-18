// 1- Crie uma variável booleana e atribua a ela o valor verdadeiro. 
// Em seguida, crie uma condição que verifique se essa variável é verdadeira e,
// se for, exiba uma mensagem no console.

let variavel = true

if (variavel) {
    alert('Verdadeiro')
}
else {
    alert('Falso')
}

// 2- Crie uma função que receba dois parâmetros numéricos e retorne verdadeiro se o 
// primeiro número for maior que o segundo e falso caso contrário. Em seguida, chame
// a função com diferentes valores e verifique se o resultado está correto.

function comparaValores(valor1, valor2) {
    if (valor1 > valor2) {
        alert('Valor 1 é maior que o valor 2.')
    }
    else if (valor1 < valor2 ) {
        alert('Valor 1 é menor que o valor 2.')
    } else {
        alert('Os valores são iguais.')
    }
}

comparaValores(10, 5)
comparaValores(5, 10)
comparaValores(10, 10)

// 3 - Crie uma função que receba um parâmetro numérico e retorne verdadeiro
// se esse número for par e falso se for ímpar. Em seguida, chame a função com
// diferentes valores e verifique se o resultado está correto.

function defineTipoNumero(valor) {
    resto = valor % 2

    if (resto == 0) {
        alert(`O número ${valor} é par.`)
    } else {
        alert(`O número ${valor} é impar.`)
    }
}

defineTipoNumero(2)
defineTipoNumero(3)

// 4 - Crie uma função que receba um parâmetro string e verifique se o comprimento da string
// é maior que 5 caracteres. Se for, retorne verdadeiro; caso contrário, retorne falso.

function getTamanhoString(texto) {
    let tamanho = texto.length

    if (tamanho > 5) {
        alert(true)
    } else { alert(false) } 
}

getTamanhoString('casa')
getTamanhoString('escola')

// 5 - Crie uma variável numérica e atribua a ela um valor entre 1 e 10. Em seguida,
// crie uma condição que verifique se o valor da variável é maior que 5. Se estiver,
// exiba uma mensagem no console.

function setTamanhoNumero(numero) {
    if (numero > 5) {
        alert(`${numero} é maior que 5`)
    }
    else {
        alert(`${numero} é menor ou igual a 5`)
    }
}

setTamanhoNumero(4)
setTamanhoNumero(5)
setTamanhoNumero(6)

// 6 - Crie uma função que receba três parâmetros numéricos e retorne verdadeiro se a soma
// dos dois primeiros for igual ao terceiro e falso caso contrário. Em seguida, chame a função
// com diferentes valores e verifique se o resultado está correto.

function comparaTresValores(val1, val2, val3) {
    let somaDoisPrimeiros = val1 + val2

    if (somaDoisPrimeiros == val3) {
        alert('A soma dos dois primeiros é igual ao terceiro.')
    }
    else {
        alert('A soma dos dois primeiros é diferente do terceiro.')
    }
}

comparaTresValores(2, 2, 4)
comparaTresValores(1, 2, 4)

// 7 - Crie uma variável string e atribua a ela um valor. Em seguida, crie uma condição
// que verifique se o valor da variável é igual a "JavaScript". Se for, exiba uma mensagem
// no console.

function verificaJS(texto) {
    if (texto == 'JavaScript') {
        alert('O valor é igual a JavaScript')
    }
    else {
        alert('O valor é diferente de JavaScript')
    }
}

verificaJS('JavaScript')
verificaJS('javascript')

// 8 - (DESAFIO) Crie uma função que receba um parâmetro numérico e verifique se esse número
//  está entre 1 e 100 (inclusive). Se estiver, retorne verdadeiro; caso contrário, retorne falso.

function verificaEntreUmECem(numero) {
    if (numero >= 1 & numero <= 100) {
        alert(`${numero} está entre 0 e 100.`)
    }
    else {
        alert(`${numero} não está entre 0 e 100.`)
    }
}

verificaEntreUmECem(50)
verificaEntreUmECem(0)
verificaEntreUmECem(150)

// 9 - Crie uma variável booleana e atribua a ela um valor falso. Em seguida, crie uma condição
// que verifique se a variável é falsa e, se for, mude seu valor para verdadeiro.

function mudaValorBoolean(val) {
    if (val == true) {
        val = false
    }
    else {
        val = true
    }

    alert(val)
}

mudaValorBoolean(true)
mudaValorBoolean(false)

// 10 - Crie uma função que receba um parâmetro string e verifique se o primeiro caractere
// dessa string é uma letra maiúscula. Se for, retorne verdadeiro; caso contrário, retorne falso.

function getPrimeiroValorString(texto) {
    let primeiraLetra = texto.charAt(0)

    if (primeiraLetra == primeiraLetra.toUpperCase()) {
        alert('A primeira letra é maiúscula.')
    }
    else {
        alert('A primeira letra não é maiúscula.')
    }
}


getPrimeiroValorString('Marcelo')
getPrimeiroValorString('marcelo')