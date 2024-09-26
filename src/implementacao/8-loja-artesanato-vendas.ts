/* Loja de artesanato vendas
Uma pequena loja de artesanato possui apenas um vendedor e comercializa dez tipos de objetos. O vendedor recebe um salário de R$400,00 acrescido de 5% do valor total de suas vendas. O valor unitário dos objetos deve ser informado e armazenado em um vetor; a quantidade vendida de cada peça deve ficar em outro, mas na mesma posição, e o código do produto deve ficar em um terceiro vetor, sempre respeitando as posições. Crie um programa que receba o código, o preço e quantidade vendida, armazenando-os em seus respectivos vetores, determine e mostre:

a. Um relatório contendo o código, a quantidade, o valor unitário, e o valor total vendido para cada objeto. Ao final deverá ser mostrado o valor geral das vendas e o valor da comissão que será paga ao vendedor.

b. O código e o valor do objeto mais vendido (não se preocupe com empates).*/

function gerarRelatorioVendas() {
    const vendas = [
        { codigo: 1, preco: 100, quantidade: 2 },
        { codigo: 2, preco: 200, quantidade: 1 },
        { codigo: 3, preco: 300, quantidade: 3 },
        { codigo: 4, preco: 400, quantidade: 4 },
        { codigo: 5, preco: 500, quantidade: 1 },
        { codigo: 6, preco: 600, quantidade: 2 },
        { codigo: 7, preco: 700, quantidade: 3 },
        { codigo: 8, preco: 800, quantidade: 4 },
        { codigo: 9, preco: 900, quantidade: 1 },
        { codigo: 10, preco: 1000, quantidade: 5 },
    ]
    
    let valorTotalVenda = 0; 

    vendas.forEach (vendas => {
        console.log(
            `Código: ${vendas.codigo}, Quantidade: ${vendas.quantidade}, Valor Unitário: ${vendas.preco}, Valor Total Vendido: ${vendas.quantidade * vendas.preco}`
        )
    })
    
    vendas.forEach(vendas=> {
        valorTotalVenda += vendas.quantidade * vendas.preco;
    });

    let comissão = 0;
    comissão = 0.05 * valorTotalVenda;

    console.log( "O valor da comissão será: " + comissão);
}

gerarRelatorioVendas(); 



