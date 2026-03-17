// 1. Menu mobile (hamburger)
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// 2. Scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        if(nav.classList.contains('active')) nav.classList.remove('active');
    });
});

// 3. Animação fade-in ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.style.opacity = 1;
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transition = 'opacity 1s';
    observer.observe(sec);
});

// 4,5,6. Clique nos pilares do Tripé (3 efeitos)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const pilar = card.getAttribute('data-pilar');
        let texto = '';
        if(pilar === 'economico') texto = 'Aqui garantimos que o negócio seja lucrativo e seguro!';
        if(pilar === 'social') texto = 'Cuidamos das pessoas e das comunidades ao redor.';
        if(pilar === 'ambiental') texto = 'Protegemos a natureza para as próximas gerações.';

        document.getElementById('modal-title').textContent = card.querySelector('h3').textContent;
        document.getElementById('modal-text').textContent = texto;
        document.getElementById('modal').style.display = 'flex';
    });
});

// 7. Modal fechar
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// 8. Botão "Adquirir EcoVida" (simula venda)
document.getElementById('btn-comprar').addEventListener('click', () => {
    alert('🎉 Parabéns! Você acabou de adquirir 1 unidade de EcoVida – Embalagens Circulares!\n\nObrigado por contribuir com o futuro sustentável.');
});

// 9. Confetti no botão de obrigado (efeito festivo)
document.getElementById('btn-confetti').addEventListener('click', () => {
    for(let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.fontSize = '2rem';
        confetti.textContent = ['🌱','🍃','🌍','🌳'][Math.floor(Math.random()*4)];
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
});

// 10. Botão "Voltar ao topo" que aparece ao rolar
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.background = 'var(--verde)';
backToTop.style.color = 'white';
backToTop.style.borderRadius = '50%';
backToTop.style.border = 'none';
backToTop.style.display = 'none';
backToTop.style.cursor = 'pointer';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 11. Efeito de mudança de cor no botão comprar ao passar o mouse
document.getElementById('btn-comprar').addEventListener('mouseover', function() {
    this.style.background = '#FF7F00';
});
document.getElementById('btn-comprar').addEventListener('mouseout', function() {
    this.style.background = '#2E8B57';
});

// 12. Contador animado de árvores salvas (aparece no console e em alerta opcional)
let árvores = 0;
setInterval(() => {
    árvores += 12;
    if(árvores % 120 === 0) console.log(`🌳 ${árvores} árvores salvas até agora graças à produção responsável!`);
}, 800);

alert('Site carregado com sucesso!\n\nSão 12 efeitos interativos prontos. Divirta-se editando e suba para o GitHub!');
