// Obtém elementos da página
const elementoParaInserirLivros = document.querySelector("#livros");
const elementoComValorTotalDeLivrosDisponiveis = document.querySelector("#valor_total_livros_disponiveis");

function exibirLivrosNaTela(listaDeLivros) {        // Declara a função que exibe os livros para o usuário

    elementoParaInserirLivros.innerHTML = "";       // Limpa a exibição de livros na tela

    elementoComValorTotalDeLivrosDisponiveis.innerHTML = "";        // Limpa a exibição da section referenciada

    listaDeLivros.forEach(livro => {        // Exibe cada um dos livros na tela

        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";

        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
            `;

    });

};