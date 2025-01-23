const carrosel = document.querySelector(".carrosel-imagens");
const imagens = Array.from(carrosel.children);

// Forçar a largura e altura para garantir que todas as imagens tenham o mesmo tamanho
imagens.forEach((imagem) => {
  imagem.style.width = `${carrosel.clientWidth / imagens.length}px`;  // Distribui as imagens igualmente
  imagem.style.height = '100%';  // Altura fixa do carrossel
});

// Clonagem das imagens para criar o efeito infinito
imagens.forEach((imagem) => {
  const cloneInicio = imagem.cloneNode(true); 
  const cloneFim = imagem.cloneNode(true); 
  carrosel.appendChild(cloneFim); 
  carrosel.insertBefore(cloneInicio, carrosel.firstChild); 
});

const tamanhoImagem = imagens[0].clientWidth;  // Garantir que o tamanho das imagens seja fixo
const totalImagens = imagens.length;
const totalCarrossel = totalImagens * 2 * tamanhoImagem;  // Carrossel com o dobro de imagens

let scrollPos = 0; 

// Função para mover o carrossel
const moverCarrosel = () => {
  scrollPos += 1;  
  carrosel.style.transform = `translateX(-${scrollPos}px)`;  

  if (scrollPos >= totalCarrossel / 2) {
    // Reinicia a posição do carrossel sem transição para evitar o "salto"
    scrollPos = 0; 
    carrosel.style.transition = 'none'; 
    carrosel.style.transform = `translateX(0)`; 

    // Habilita novamente a transição
    setTimeout(() => {
      carrosel.style.transition = 'transform 0.5s ease';
    }, 50); // Delay para garantir que a transição seja reativada
  }
};

// Atualiza a animação do carrossel
setInterval(() => {
  moverCarrosel(); 
}, 10);
