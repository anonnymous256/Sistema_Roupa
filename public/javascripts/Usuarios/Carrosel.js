const carrosel = document.querySelector(".carrosel-imagens");
const imagens = Array.from(carrosel.children); 


imagens.forEach((imagem) => {
    const cloneInicio = imagem.cloneNode(true); 
    const cloneFim = imagem.cloneNode(true); 
    carrosel.appendChild(cloneFim); 
    carrosel.insertBefore(cloneInicio, carrosel.firstChild); 
});

const tamanhoImagem = imagens[0].clientWidth; 
const totalImagens = imagens.length;
const totalCarrossel = totalImagens * 2 * tamanhoImagem; 

let scrollPos = 0; 

const moverCarrosel = () => {
    scrollPos += 1;  
    carrosel.style.transform = `translateX(-${scrollPos}px)`;  

    if (scrollPos >= totalCarrossel / 2) {
        scrollPos = 0; 
        carrosel.style.transition = 'none'; 
        carrosel.style.transform = `translateX(0)`; 
    }
};

setInterval(() => {
    carrosel.style.transition = 'transform 0.5s ease';
    moverCarrosel();
}, 10);


