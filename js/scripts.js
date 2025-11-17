// scripts.js - aprimorado: validação simples, mensagem e destaque de nav
document.addEventListener('DOMContentLoaded', function () {

    // Ativa a Classe 'active' do menu baseado no pathname
    (function highlightNav() {
        const links = document.querySelectorAll('.nav-links .nav-link');
        const path = window.location.pathname.split('/').pop();
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === path || (href === 'index.html' && (path === '' || path === 'index.html'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    })();

    // Formulário de contato com validação simples
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            const formMessage = document.getElementById('formMessage');

            // Validações básicas
            if (!name || !email || !message) {
                formMessage.innerHTML = `<div class="alert alert-danger">Por favor, preencha todos os campos obrigatórios.</div>`;
                return;
            }

            // Simula envio (no trabalho de documentação isso normalmente chamaria uma API)
            formMessage.innerHTML = `<div class="alert alert-info">Enviando...</div>`;

            // Simular delay e resposta positiva
            setTimeout(() => {
                formMessage.innerHTML = `<div class="alert alert-success">Solicitação enviada com sucesso! Em até 1 dia útil retornaremos.</div>`;
                form.reset();
            }, 900);
        });
    }

});
