import { comecaCriandoEstrelas } from './script/estrelas.js';

document.addEventListener('DOMContentLoaded', () => {
    comecaCriandoEstrelas();
});

import { animacaoDasLetras } from "./script/letras-por-letra.js";
import { imagem, trocarTituloHtml, trocarTextoHtml, mudarHtml, voltarOriginalHtml, imagemCss, mudarCss, voltarOriginalCss, mudarJs, voltarOriginalJs, imagemJs, imagemBootstrap, mudarBootstrap, voltarOriginalBootstrap, imagemTailwind, mudarTailwind, voltarOriginalTailwind } from "./script/trocar-softsSkills.js";

// Usando API de Rolagem RevealScroll
/*window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-0', {
    scale: 4.5,
});

sr.reveal('.area-1', {
    rotate: { x: 0, y: 0, z: 0 },
    duration: 6000
});

sr.reveal('.area-2', {
    duration: 6000,
    scale: 1.1,
});
sr.reveal('.area-3', { duration: 4000 });

sr.reveal('.area-4', { duration: 3000 });

sr.reveal('.area-5', {
    scale: 5.5,
});*/


animacaoDasLetras(); // Animação do Nome ' Anderson Rodrigues de Melo

imagem.addEventListener('mouseover', mudarHtml);
imagem.addEventListener('mouseout', voltarOriginalHtml);

imagemCss.addEventListener('mouseover', mudarCss);
imagemCss.addEventListener('mouseout', voltarOriginalCss);

imagemJs.addEventListener('mouseover', mudarJs);
imagemJs.addEventListener('mouseout', voltarOriginalJs);

imagemBootstrap.addEventListener('mouseover', mudarBootstrap);
imagemBootstrap.addEventListener('mouseout', voltarOriginalBootstrap);

imagemTailwind.addEventListener('mouseover', mudarTailwind);
imagemTailwind.addEventListener('mouseout', voltarOriginalTailwind);


