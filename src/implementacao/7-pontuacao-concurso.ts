function listarAprovados() {

    const notas = [
        {nome: "Juan Carlos", nota: 14}, 
        {nome: "Ana Paula", nota: 91}, 
        {nome: "Gustavo Silva", nota: 14}, 
        {nome: "Mariana Almeida", nota: 21}, 
        {nome: "Lucas Souza", nota: 44}, 
        {nome: "Paula Costa", nota: 90}, 
        {nome: "Ricardo Martins", nota: 6}, 
        {nome: "Julia Pereira", nota: 87}, 
        {nome: "Carla Santos", nota: 16}, 
        {nome: "Pedro Gomes", nota: 12}, 
        {nome: "Rafael Oliveira", nota: 68}, 
        {nome: "Fernanda Lima", nota: 81}, 
        {nome: "Beatriz Araújo", nota: 57}, 
        {nome: "Thiago Melo", nota: 32}, 
        {nome: "Camila Ferreira", nota: 60}, 
        {nome: "Igor Nunes", nota: 15}, 
        {nome: "Bruna Rodrigues", nota: 11}, 
        {nome: "Felipe Dias", nota: 73}, 
        {nome: "Renata Barros", nota: 86}, 
        {nome: "Daniela Fonseca", nota: 64}, 
        {nome: "Leandro Teixeira", nota: 97}, 
        {nome: "Gabriela Cunha", nota: 60}, 
        {nome: "Mateus Ribeiro", nota: 53}, 
        {nome: "Aline Monteiro", nota: 34}, 
        {nome: "Sabrina Cardoso", nota: 71}
    ];    

    const aprovados = notas.filter(participante => participante.nota > 70);

    console.log("Participantes com mais de 70 pontos:");
    aprovados.forEach(participante => {
        console.log(`${participante.nome} - Nota: ${participante.nota}`);
    });

}

listarAprovados();