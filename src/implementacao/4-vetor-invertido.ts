// Desenvolva um algoritmo que permita a leitura de um vetor de 30 números inteiros, 
// e gere um segundo vetor com os mesmos dados, mas de maneira invertida, 
// ou seja, o primeiro elemento ficará na última posição, o segundo na penúltima, 
// e assim por diante.

function inverterVetor(max: number, min: number) {
    let array = []
    for (let i = 0; i <= 30; i++) {
        let numero = Math.floor(Math.random() * (max - min)) + min;
        array.push(numero);
    }
    console.log("Os valores na ordem original: ", array)
    let invertido = array.reverse();
    console.log("Os valores invertidos são: ", invertido);
}

inverterVetor(90,0)
