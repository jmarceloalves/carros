// 1 - Crie uma função que receba dois parâmetros booleanos e retorne true se pelo menos um 
// dos parâmetros for verdadeiro e false caso contrário. Use o operador OR lógico para isso.
function recebeBoolean(valor1, valor2) {
    if (valor1 || valor2 ) {
        alert('Verdadeiro')
    }
    else {
        alert('Falso')
    }
}

recebeBoolean(true, true)
recebeBoolean(true, false)
recebeBoolean(false, true)
recebeBoolean(false, false)

// 2 - Escreva um programa que solicite ao usuário a idade e a altura de uma pessoa. 
// Se a pessoa tiver mais de 18 anos E a altura for maior ou igual a 1,70m, exiba uma mensagem 
// dizendo que ela pode entrar no clube, caso contrário, exiba uma mensagem dizendo que ela não 
// pode entrar.
function aptoEntrarClube(idade, altura){
    if (idade >= 18 && altura >= 1.7){
        alert('Você foi aceito no clube.')
    } 
    else {
        alert('Você não foi aceito no clube.')
    }
}

aptoEntrarClube(52, 1.78)
aptoEntrarClube(6, 0.55)

// 3- Crie uma função que receba dois parâmetros numéricos e retorne true se ambos os 
// parâmetros forem maiores que 10 E menores que 20, caso contrário, retorne false.
function recebeParametros(par1, par2) {
    if ((par1 > 10 && par2 > 10) && (par1 < 20 && par2 < 20)){
        alert('Verdadeiro')
    }
    else {
        alert('Falso')
    }
}

recebeParametros(8,21)
recebeParametros(21,8)
recebeParametros(11,21)
recebeParametros(11,19)

// 4 - Escreva um programa que solicite ao usuário dois números e verifique se pelo menos 
// um dos números é positivo E menor que 100. Se essa condição for verdadeira, exiba uma 
// mensagem dizendo que pelo menos um dos números é válido, caso contrário, exiba uma mensagem 
// dizendo que nenhum dos números é válido.
function recebeParametrosNegativos(par1, par2) {
    if ((par1 > 0 && par1 < 100) || (par2 > 0 && par2 < 100)) {
        alert('Aceito')
    }
    else {
        alert('Não aceito')
    }
}

recebeParametrosNegativos(10, 20)
recebeParametrosNegativos(-10, 200)
recebeParametrosNegativos(10, 110)

// 5 - Crie uma função que receba três parâmetros booleanos e retorne true se pelo menos dois 
// dos parâmetros forem verdadeiros, caso contrário, retorne false. Use os operadores AND e OR 
// lógicos para isso.
function recebeBooleans(par1, par2, par3) {
    let soma = par1 + par2 + par3

    if (soma >=2) {
        alert('Verdadeiro')
    }
    else {
        alert('Falso')
    }
}

recebeBooleans(true, true, true)
recebeBooleans(true, true, false)
recebeBooleans(true, false, false)
recebeBooleans(false, false, false)