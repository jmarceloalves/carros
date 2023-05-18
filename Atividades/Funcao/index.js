function apresentarMedia(nome, nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    let aprovado = media >= 8;
    
    if (aprovado) {
        alert(`${nome} foi aprovado com média ${media}.`);
    } else {
        alert(`${nome} obteve média ${media} e não foi aprovado.`);
    }
}

apresentarMedia('Gabriel', 8, 7, 9)
apresentarMedia('JM', 9, 9.5, 10)