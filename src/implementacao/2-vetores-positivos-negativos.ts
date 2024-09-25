function separarPositivosNegativos(numeros: number[]) {

    let positivo = [];
    let negativo = [];

    if (numeros.length === 8) {
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] >= 0) {
                positivo.push(numeros[i]);
            } else {
                negativo.push(numeros[i]);
            }
        }
        console.log("Vetor de números positivos: ", positivo);
        console.log("Vetor de números negativos: ", negativo)
    }
    else {
        console.log("Vetor deve ter 8 elementos");
    }

}

separarPositivosNegativos([1, -2, 3, 0, 5, 6, -7, 8]); 
