const btnOrdenarPorPreco = document.querySelector("#btnOrdenarPorPreco");       // Obtém o botão que ordena os livros por preço

function ordenarLivrosPorPreco() {      // Declara uma função que ordena os livros pelo preço

    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);     // Ordena os livros do mais barato para o mais caro

    exibirLivrosNaTela(livrosOrdenados);        // Exibe os livros já ordenados

};

btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);        // Chama a função quando o botão for clickado