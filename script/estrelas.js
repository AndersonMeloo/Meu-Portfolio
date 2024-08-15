export function criarEstrelas() {
    const containerDasEstrelas = document.getElementById('star-container');
    if (!containerDasEstrelas) {
        console.error("Elemento com o ID 'star-container' não encontrado.");
        return;
    }

    const estrelas = document.createElement('div');

    // Escolher aleatoriamente as cores e os tamanhos das estrelas
    const isWhite = Math.random() > 0.5;
    estrelas.className = isWhite ? 'star-white' : 'star-gray';

    // Definir a posição inicial da estrela na esquerda e em uma altura aleatória
    const pageHeight = document.documentElement.scrollHeight; // Define Altura Total da Página
    estrelas.style.top = Math.random() * pageHeight + 'px';
    estrelas.style.left = '-2px'; // Começa fora da tela à esquerda para direita

    // Pode-se Definir uma duração aleatórias paras as animações
    const duration = Math.random() * 5 + 3; // Entre 3s e 8s ou outra duração desejada
    estrelas.style.animationDuration = `${duration}s`;

    // Adiciona as estrelas ao container da página
    containerDasEstrelas.appendChild(estrelas);

    // Remove as estrelas após as animações
    estrelas.addEventListener('animationend', () => {
        estrelas.remove();
    });
}

export function comecaCriandoEstrelas(interval = 100) {
    setInterval(criarEstrelas, interval); // Começa a criar uma estrelas a cada 100ms
}