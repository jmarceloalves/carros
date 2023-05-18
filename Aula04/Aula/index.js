let alunos = ['Gabriel', 'Ana', 'Pedro']

alert(alunos)

alert(alunos[0])

alunos.push('Larissa')

alert(alunos)

alunos[3] = 'Luis'

alert(alunos)

alunos.splice(0, 1)

alert(alunos)

alert(alunos.length)

alert(alunos[alunos.length-1])

let nome = 'Gabriel'

alert(nome.split(''))

let documentos = '12345;12345;12345;12345;12345'

alert(documentos.split(';'))

let numeros = [1,2,3,4,5,6,7,8,9,10]
let soma = 0

for (let index = 0; index < numeros.length; index++) {
    soma = soma + numeros[index];
    alert(soma) 
}

let numeros2 = [100, 200, 300]
alert(numeros2)

for (let index = 0; index < numeros2.length; index++) {
    if (numeros2[index] == 200) {
        numeros2.splice(index,1)
    }
}

alert(numeros2)

let nomeArray = ['g','A','b','R','i','E','l']
let nomeString = ''

for (let index = 0; index < nomeArray.length; index++) {
    if (index == 0) {
        nomeString = nomeArray[index].toUpperCase()
    } else {
        nomeString = nomeString + nomeArray[index].toLowerCase()
    }
}

alert(nomeString)