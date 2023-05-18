function verificaMaiorIdade(idade) {
    if (idade >= 18) {
        return true
    }
    else {
        return false
    }
}

let isMaiorIdade

isMaiorIdade = verificaMaiorIdade(20);

if (isMaiorIdade) {
    alert('Maior idade')
}
else {
    alert('Menor de idade')
}

isMaiorIdade = verificaMaiorIdade(15);

if (isMaiorIdade) {
    alert('Maior idade')
}
else {
    alert('Menor de idade')
}