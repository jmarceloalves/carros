// 1 - Crie uma variável
const mensagem = 'JavaScript';

// 2 - Retorne o número de caracters
alert(mensagem.length)

// 3 - Retorne o primeiro caracter
alert(mensagem.charAt(0))

// 4 - Retorne o último caracter
alert(mensagem.charAt(mensagem.length - 1))

// 5 - Retorne os caracteres do segundo ao quinto item
alert(mensagem.substring(1, 6))

// 6 - Retorne a mensagem em caixa baixa
alert(mensagem.toLowerCase())

// 7 - Retorne a mensagem em caixa alta
alert(mensagem.toUpperCase())

// 8 - Retorne somente o primeiro caracter em caixa alta
primeiroCaracter = mensagem.charAt(0).toUpperCase()
restante = mensagem.slice(1).toLowerCase()
alert(primeiroCaracter + restante)

// 9 - Retorne sem espaços no início e no fim
alert(mensagem.trim())