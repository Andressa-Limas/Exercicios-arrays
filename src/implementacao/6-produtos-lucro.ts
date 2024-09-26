function calcularLucros() {

    const produtos = [
        { nome: "Camiseta", precoVenda: 29.99, custo: 20.90 },
        { nome: "Calça", precoVenda: 59.99, custo: 37.90 },
        { nome: "Tênis", precoVenda: 99.99, custo: 66.89 },
        { nome: "Jaqueta", precoVenda: 149.99, custo: 100.00 },
        { nome: "Bermuda", precoVenda: 39.99, custo: 25.50 },
        { nome: "Vestido", precoVenda: 79.99, custo: 50.00 },
        { nome: "Camisa", precoVenda: 49.99, custo: 30.00 },
        { nome: "Blusa", precoVenda: 34.99, custo: 22.00 },
        { nome: "Saia", precoVenda: 54.99, custo: 36.50 },
        { nome: "Short", precoVenda: 29.99, custo: 18.00 },
        { nome: "Sapatilha", precoVenda: 69.99, custo: 40.00 },
        { nome: "Botas", precoVenda: 119.99, custo: 80.00 },
        { nome: "Mochila", precoVenda: 89.99, custo: 55.00 },
        { nome: "Cinto", precoVenda: 19.99, custo: 12.00 },
        { nome: "Meias", precoVenda: 9.99, custo: 3.50 },
        { nome: "Touca", precoVenda: 15.99, custo: 7.00 },
        { nome: "Óculos de Sol", precoVenda: 79.99, custo: 45.00 },
        { nome: "Pulseira", precoVenda: 29.99, custo: 10.00 },
        { nome: "Colar", precoVenda: 49.99, custo: 20.00 },
        { nome: "Brinco", precoVenda: 39.99, custo: 15.00 },
        { nome: "Biquíni", precoVenda: 34.99, custo: 20.00 },
        { nome: "Maiô", precoVenda: 49.99, custo: 30.00 },
        { nome: "Calça Legging", precoVenda: 39.99, custo: 25.00 },
        { nome: "Casaco", precoVenda: 99.99, custo: 70.00 },
        { nome: "Sweater", precoVenda: 59.99, custo: 40.00 },
        { nome: "Blazer", precoVenda: 129.99, custo: 90.00 },
        { nome: "Camiseta de Manga Longa", precoVenda: 34.99, custo: 25.00 },
        { nome: "Regata", precoVenda: 24.99, custo: 15.00 },
        { nome: "Salto Alto", precoVenda: 89.99, custo: 55.00 },
        { nome: "Sandália", precoVenda: 59.99, custo: 37.90 },
        { nome: "Botinha", precoVenda: 79.99, custo: 50.00 },
        { nome: "Camiseta Estampada", precoVenda: 29.99, custo: 18.00 },
        { nome: "Calça de Moletom", precoVenda: 49.99, custo: 30.00 },
        { nome: "Saia Midi", precoVenda: 54.99, custo: 35.00 },
        { nome: "Tênis de Corrida", precoVenda: 109.99, custo: 75.00 },
        { nome: "Tênis Casual", precoVenda: 89.99, custo: 60.00 },
        { nome: "Chapéu", precoVenda: 29.99, custo: 15.00 },
        { nome: "Bolsinha", precoVenda: 39.99, custo: 20.00 },
        { nome: "Capa de Chuva", precoVenda: 49.99, custo: 30.00 },
        { nome: "Roupa de Cama", precoVenda: 109.99, custo: 150.00 },
        { nome: "Toalha", precoVenda: 9.99, custo: 10.00 },
        { nome: "Cortina", precoVenda: 69.99, custo: 55.00 },
        { nome: "Colcha", precoVenda: 100.99, custo: 90.00 },
        { nome: "Almofada", precoVenda: 24.99, custo: 12.00 },
        { nome: "Lanterna", precoVenda: 9.99, custo: 8.00 },
        { nome: "Capa de Sofá", precoVenda: 99.99, custo: 60.00 },
        { nome: "Tábua de Passar", precoVenda: 69.99, custo: 40.00 },
        { nome: "Ferro de Passar", precoVenda: 79.99, custo: 45.00 },
        { nome: "Aspirador de Pó", precoVenda: 199.99, custo: 120.00 },
        { nome: "Batedeira", precoVenda: 159.99, custo: 100.00 },
    ];

        function calcularLucro(precoVenda: number, custo: number) {
            return ((precoVenda - custo) / custo) * 100;
        }
    
        let lucroMenor10 = 0;
        let lucroEntre10e30 = 0;
        let lucroMaior30 = 0;
    
        for (const produto of produtos) {
            const lucro = calcularLucro(produto.precoVenda, produto.custo);
    
            if (lucro < 10) {
                lucroMenor10++;
            } else if (lucro >= 10 && lucro <= 30) {
                lucroEntre10e30++;
            } else {
                lucroMaior30++;
            }
        }
    
        console.log("Quantidade de produtos com lucro menor que 10%: ", lucroMenor10);
        console.log("Quantidade de produtos com lucro entre 10% e 30%: ", lucroEntre10e30);
        console.log("Quantidade de produtos com lucro maior que 30%: ", lucroMaior30);
    }
    
calcularLucros();
