function aplicarDesconto(livros) {

    const desconto = 0.3;

    livrosComDesconto = livros.map(livro => {       // Calcula o desconto de cada livro

        return {...livro, preco: livro.preco - (livro.preco * desconto)}

    });

    return livrosComDesconto;       // Retorna os novos valores dos livros

};