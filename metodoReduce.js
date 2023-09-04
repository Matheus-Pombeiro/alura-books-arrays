function calcularValorTotalDeLivrosDisponiveis(livros) {       // Declara a função que soma o preço total de livros disponíveis

    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);

};