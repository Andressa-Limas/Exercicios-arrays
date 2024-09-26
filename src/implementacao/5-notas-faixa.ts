function contarNotasNaFaixa(max: number, min: number, media: number): number {

    if(max <= min){
        throw new Error(" O valor máximo deve ser maior que o minimo e o minimo menor que o maior");
    }

    let notas: number [] = [];
    let soma = 0;


    for(let i = 0; i < 50; i++){
        let nota = Math.floor(Math.random() * (max - min + 1 )) + min;
        notas.push(nota);
        soma += nota;
    }

    let limiteInferior = media * 0.9 
    let limiteSuperior = media * 1.1 

    let contador = 0;
    for (const nota of notas) {
        if (nota >= limiteInferior && nota <= limiteSuperior) {
            contador++;
        }
    }

    console.log("Notas:", notas);
    console.log("Média:", media);
    console.log("Quantidade de notas na faixa:", contador);

    return contador; 
}

contarNotasNaFaixa(10,0,7);