// EFEITO 1: Rolagem Suave
// Quando clicar nos links do menu, a página desce devagar até a seção.
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(evento) {
        evento.preventDefault(); // Impede o pulo seco padrão
        const secaoAlvo = document.querySelector(this.getAttribute('href'));
        secaoAlvo.scrollIntoView({ behavior: 'smooth' });
    });
});

// EFEITO 2 e 3: Interação com botões de compra (Alerta e Mudança de texto)
// Exibe uma mensagem na tela simulando uma venda
const botoesCompra = document.querySelectorAll('.btn-comprar');
botoesCompra.forEach(botao => {
    botao.addEventListener('click', () => {
        alert("Obrigado por apoiar um futuro sustentável! Item adicionado ao carrinho."); // Efeito 2
        botao.innerText = "Adicionado! ✔️"; // Efeito 3
        botao.style.backgroundColor = "#2E7D32"; // Fica verde após clicar
    });
});

// EFEITO 4: Modo Escuro (Dark Mode)
// Troca as cores do site inteiro clicando no botão da lua
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Troca o ícone dependendo do modo
    if (document.body.classList.contains('dark-mode')) {
        btnTema.innerText = "☀️"; 
    } else {
        btnTema.innerText = "🌙";
    }
});

// EFEITO 5: Efeito Máquina de Escrever no Título Principal
const titulo = document.getElementById('titulo-principal');
const textoOriginal = titulo.innerText;
titulo.innerText = ''; // Limpa o texto
let i = 0;
function digitar() {
    if (i < textoOriginal.length) {
        titulo.innerText += textoOriginal.charAt(i);
        i++;
        setTimeout(digitar, 100); // Velocidade da digitação
    }
}
// Inicia o efeito assim que a página carrega
window.onload = digitar;

// EFEITO 6 e 7: Mostrar botão de "Voltar ao Topo" e Barra de Progresso no Scroll
const btnTopo = document.getElementById('btn-topo');
const barraProgresso = document.getElementById('barra-progresso');

window.addEventListener('scroll', () => {
    // Efeito 6: Mostra o botão só depois de rolar a página para baixo
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }

    // Efeito 7: Barra no topo enche conforme você lê o site
    let alturaTotal = document.body.scrollHeight - window.innerHeight;
    let progresso = (window.scrollY / alturaTotal) * 100;
    barraProgresso.style.width = progresso + "%";
});

// EFEITO 8: Ação de Voltar ao Topo suavemente
btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// EFEITO 9: Hover dinâmico no Produto (Passar o mouse)
// A caixa do produto muda de cor quando o mouse entra e volta quando sai
const caixaProduto = document.getElementById('caixa-produto');
caixaProduto.addEventListener('mouseenter', () => {
    caixaProduto.style.backgroundColor = "#E65100"; // Fica Laranja
    caixaProduto.style.transform = "rotate(2deg)"; // Dá uma leve inclinada
});
caixaProduto.addEventListener('mouseleave', () => {
    caixaProduto.style.backgroundColor = "#5D4037"; // Volta pro Marrom
    caixaProduto.style.transform = "rotate(0deg)";
});

// EFEITO 10: Efeito Sanfona (Accordion) nos Bullet Points do Slide 4
const itensSanfona = document.querySelectorAll('.item-sanfona');
itensSanfona.forEach(item => {
    item.addEventListener('click', () => {
        // Encontra o texto escondido dentro do item clicado
        const texto = item.querySelector('.texto-oculto');
        // Alterna entre mostrar (block) e esconder (none)
        if (texto.style.display === 'block') {
            texto.style.display = 'none';
        } else {
            texto.style.display = 'block';
        }
    });
});