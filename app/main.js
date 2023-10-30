const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let livros = [];
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointAPI);
    livros = await res.json();

    let livrosDesconto = aplicarDesconto(livros);

    exibirLivrosNaTela(livrosDesconto);
}

