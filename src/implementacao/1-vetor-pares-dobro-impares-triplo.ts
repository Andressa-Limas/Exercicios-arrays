//Crie um algoritmo que leia um vetor de 30 números inteiros e gere um
// segundo vetor cujas posições pares são o dobro do vetor original e as ímpares o triplo.

function gerarVetorParesDobroImparesTriplo(max: number, min: number){
    let original = [];
    let Alterdo = [];
    
    for(let i = 0; i <= 30; i++){
        let numero = Math.floor(Math.random() * (max - min) ) + min;
        original.push(numero);

        if(original[i] % 2 === 0){
            let novoNumero = original[i] * 2;
            Alterdo.push(novoNumero);

        }else{
            let novoNumero = original[i] * 3;
            Alterdo.push(novoNumero);
        }
    
    }
    console.log("Valores originais", original)
    console.log("Valores alterados", Alterdo)
    
}
gerarVetorParesDobroImparesTriplo(50,0);