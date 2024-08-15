const letters = document.querySelectorAll('.letras');
const duracaoDasLetras = 2000; // Duração da animação das letras em milissegundos
const delayDasLetras = 400; // Atraso entre as animações das letras em milissegundos

// Função para animar as letras
export function animacaoDasLetras() {
    letters.forEach((letra, index) => {
        setTimeout(() => {
            letra.style.animation = 'reveal ' + (duracaoDasLetras / 1000) + 's revelarLetras';
        }, index * delayDasLetras);
    });
};

// Inicia a animação das letras
animacaoDasLetras();