let livros = [];                                                                            // Declara o array livros vazio
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";        // Obtém referência à API

async function getBuscarLivrosDaAPI() {     // Declara a função que busca livros da API de forma assíncrona

    const res = await fetch(endpointDaAPI);

    livros = await res.json();
    
    let livrosComDescontos = aplicarDesconto(livros);

    exibirLivrosNaTela(livrosComDescontos);       // Chama a função que exibe os livros para o usuário

};

getBuscarLivrosDaAPI();     // Chama a função que busca os livros da API