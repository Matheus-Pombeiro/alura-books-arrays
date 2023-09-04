const botoes = document.querySelectorAll(".btn");       // Seleciona todos os botões que contenham a classe 'btn' da página

botoes.forEach( btn => btn.addEventListener("click", filtrarLivros));

function filtrarPorCategoria(categoria) {       // Declara uma função auxiliar para filtrar os livros
    
    return livros.filter(livro => livro.categoria == categoria);
    
};

function filtrarPorDisponibilidade() {      // Declara uma função auxiliar para filtrar os livros
    
    return livros.filter(livro => livro.quantidade > 0);
    
};

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {     // Declara a função que exibe o valor total dos livros disponíveis na tela

    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;

};

function filtrarLivros() {      // Declara a função que filtra os livros

    const elementoBtn = document.getElementById(this.id)        // Obtém o elemento atual a partir de seu id 'this.id'
    const categoria = elementoBtn.value;                        // Obtém o 'value' do elemento atual

    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);     // Filtra os livros pela categoria

    exibirLivrosNaTela(livrosFiltrados);

    if (categoria == "disponivel") {        // Se a categoria do livro for "disponivel"...
        
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);

        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);

    }

};