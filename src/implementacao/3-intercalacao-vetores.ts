// Faça um programa que preencha dois vetores de dez elementos numéricos cada um 
// e mostre o vetor resultante da intercalação deles.

function separarPositivosNegativo(array1: number[], array2: number[]) {
    let intercalação = []
    for(let i = 0; i < array1.length; i++){
        intercalação.push(array1[i]);
        intercalação.push(array2[i]);  
    }
    console.log ("Os números intercalados são:", intercalação)
}
separarPositivosNegativo([1, 6, 2, 4, 8, 12, 32, 15, 9, 40], [100, 3, 52, 31, 65, 17, 20, 13, 5, 55])
