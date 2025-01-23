document.addEventListener('DOMContentLoaded', function () {
    const esquerda = document.querySelector('.seta-esquerda');
    const direita = document.querySelector('.seta-direita');
    const imagensCarrosel = document.querySelector('.carrosel2-imagens2');
    const imagens = document.querySelectorAll('.carrosel2-imagens2 img');
    let indiceImagem = 0;
    const totalImagens = imagens.length;

    // Ajusta o tamanho do contêiner para acomodar todas as imagens lado a lado
    imagensCarrosel.style.width = `${totalImagens * 100}%`;

    // A largura de cada imagem precisa ser 100 / totalImagens
    imagens.forEach(imagem => {
        imagem.style.width = `${100 / totalImagens}%`;
    });

    function moverCarrosel() {
        // Calcula a posição de cada imagem, com base no índice atual
        imagensCarrosel.style.transform = `translateX(-${indiceImagem * (100 / totalImagens)}%)`;
    }

    esquerda.addEventListener('click', function () {
        // Navega para a imagem anterior
        indiceImagem = (indiceImagem === 0) ? totalImagens - 1 : indiceImagem - 1;
        moverCarrosel();
    });

    direita.addEventListener('click', function () {
        // Navega para a próxima imagem
        indiceImagem = (indiceImagem === totalImagens - 1) ? 0 : indiceImagem + 1;
        moverCarrosel();
    });
});
