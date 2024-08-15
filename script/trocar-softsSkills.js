const imagem = document.getElementById('trocaImagem');
const trocarTituloHtml = document.getElementById('titulo');
const trocarTextoHtml = document.getElementById('texto');

const novaImagem = './imagens/skills/icone-colorido/html.png';

const novoTitulo = 'Html';
const novoTexto = "Define a estrutura e o conteúdo de páginas web.";

function mudarHtml() {
    imagem.style.width = '50px';
    imagem.style.height = '50px';

    imagem.src = novaImagem;
    trocarTituloHtml.textContent = novoTitulo;
    trocarTextoHtml.textContent = novoTexto;
};

function voltarOriginalHtml() {
    imagem.src = './imagens/skills/icone-html.png'
    trocarTituloHtml.textContent = '';
    trocarTextoHtml.textContent = '';
};

// MUDAR CSS

const trocarTituloCss = document.getElementById('tituloCss');
const trocarTextoCss = document.getElementById('textoCss');

const novoTituloCss = 'Css';
const novoTextoCss = "Estiliza e posiciona elementos em uma página web.";

const imagemCss = document.getElementById('segundaImagem')
const segundaImagemCss = './imagens/skills/icone-colorido/css.png';

function mudarCss() {
    imagemCss.style.width = '50px';
    imagemCss.style.height = '50px';

    imagemCss.src = segundaImagemCss;
    trocarTituloCss.textContent = novoTituloCss;
    trocarTextoCss.textContent = novoTextoCss;
};

function voltarOriginalCss() {
    imagemCss.src = './imagens/skills/icone-css.png';
    trocarTituloCss.textContent = '';
    trocarTextoCss.textContent = '';
};

// MUDAR JAVASCRIPT

const trocarTituloJs = document.getElementById('tituloJs');
const trocarTextoJs = document.getElementById('textoJs');

const novoTiuloJs = 'JavaScript';
const novoTextoJs = "Adiciona interatividade e dinamismo às páginas web.";

const imagemJs = document.getElementById('terceiraImagem');
const terceiraImagemJs = './imagens/skills/icone-colorido/javascript.png';

function mudarJs() {
    imagemJs.style.width = '50px';
    imagemJs.style.height = '50px';

    imagemJs.src = terceiraImagemJs;
    trocarTituloJs.textContent = novoTiuloJs;
    trocarTextoJs.textContent = novoTextoJs;
};

function voltarOriginalJs() {
    imagemJs.src = './imagens/skills/icone-javascript.png';
    trocarTituloJs.textContent = '';
    trocarTextoJs.textContent = '';
};

// MUDAR BOOTSTRAP

const trocarTituloBootstrap = document.getElementById('tituloBootstrap');
const trocarTextoBootstrap = document.getElementById('textoBootstrap');

const novoTiuloBootstrap = 'BootStrap';
const novoTextoBootstrap = "Facilita a criação de layouts responsivos com componentes prontos.";

const imagemBootstrap = document.getElementById('quartaImagem');
const quartaImagem = './imagens/skills/icone-colorido/bootstrap.png';


function mudarBootstrap() {
    imagemBootstrap.style.width = '50px';
    imagemBootstrap.style.height = '50px';

    imagemBootstrap.src = quartaImagem;
    trocarTituloBootstrap.textContent = novoTiuloBootstrap;
    trocarTextoBootstrap.textContent = novoTextoBootstrap;
};

function voltarOriginalBootstrap() {
    imagemBootstrap.src = './imagens/skills/icone-bootstrap.png';
    trocarTituloBootstrap.textContent = '';
    trocarTextoBootstrap.textContent = '';
};

// MUDAR TAILWIND

const trocarTituloTailwind = document.getElementById('tituloBootstrap');
const trocarTextoTailwind = document.getElementById('textoBootstrap');

const novoTiuloTailwind = 'Tailwind';
const novoTextoTailwind = "Permite criar designs personalizados rapidamente usando classes utilitárias.";

const imagemTailwind = document.getElementById('quintaImagem');
const quintaImagem = './imagens/skills/icone-colorido/tailwind.png';

function mudarTailwind() {
    imagemTailwind.style.width = '50px';
    imagemTailwind.style.height = '50px';

    imagemTailwind.src = quintaImagem;
    trocarTituloTailwind.textContent = novoTiuloTailwind;
    trocarTextoTailwind.textContent = novoTextoTailwind;
};

function voltarOriginalTailwind() {
    imagemTailwind.src = './imagens/skills/icone-tailwind.png';
    trocarTituloTailwind.textContent = '';
    trocarTextoTailwind.textContent = '';
};

export { imagem, trocarTituloHtml, trocarTextoHtml, mudarHtml, voltarOriginalHtml }
export { imagemCss, mudarCss, voltarOriginalCss };
export { imagemJs, mudarJs, voltarOriginalJs };
export { imagemBootstrap, mudarBootstrap, voltarOriginalBootstrap };
export { imagemTailwind, mudarTailwind, voltarOriginalTailwind }