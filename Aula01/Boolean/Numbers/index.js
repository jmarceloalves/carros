const nome = 'Gabriel';
const idade = 15;

// CTRL + K + C Comenta as linhas selecionadas
// alert(typeof(nome))
// alert(typeof(idade))

let isMaiorDeIdade = idade >= 18

if (isMaiorDeIdade){
    alert(`${nome} é maior de idade. Ele tem ${idade} anos.`)
} else {
    alert(`${nome} tem ${idade} anos.`)
}
