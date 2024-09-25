// Elabore um algoritmo que leia uma série de 50 notas e uma média necessária para aprovação, calcule 
//e mostre quantas notas estão em um intervalo de valores que vai de 10% abaixo da média até 10% acima dela.
function contarNotasNaFaixa(max: number, min: number) {
    let notas = [];
    let acimaMedia = [];
    let abaixoMedia = [];
    let soma = 0;
    let media = 0;

    for(let i = 0; i <= 50; i++){
        let nota = Math.floor(Math.random() * (max - min) ) + min;
        notas.push(nota);
        soma += notas[i];
    }

    media = soma / notas.length;

    let mediaMinima = media - (media * 0.1)
    let mediaMaxima = media + (media * 0.1)
    
    for(let i = 0; i <= notas.length; i++){
        if(notas[i] > 7 && media >= (media * 0.1) ){
            acimaMedia.push(notas[i]);
        }
        else if (notas[i] >= 0 && notas[i] <= 7 && media >= (media * 0.1)){
            abaixoMedia.push(notas[i]); 
        }
    }
    console.log("Notas: ", notas);
    console.log("Notas abaixo da média: ", abaixoMedia);
    console.log("Notas acima da dia: ", acimaMedia);
}

contarNotasNaFaixa(10,0);