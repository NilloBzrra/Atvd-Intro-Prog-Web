const formCadastro = document.getElementById('formCadastro');
const modalSucesso = document.getElementById('modalSucesso');
const btnComecar = document.getElementById('btnComecar');

// Guarda o link gerado no envio do formulário
let linkWhatsApp = '';

if (formCadastro) {
    formCadastro.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const modalMensagem = document.getElementById('modalMensagem');

        // Monta o link do WhatsApp
        const seuNumero = '5581999202194';
        const texto = 
            `Novo cadastro no *JS Mastery*!\n\n` +
            `*Nome:* ${nome}\n` +
            `*E-mail:* ${email}`;

        linkWhatsApp = `https://wa.me/${seuNumero}?text=${encodeURIComponent(texto)}`;

        modalMensagem.innerHTML = 'Bem-vindo(a), <strong>' + nome + '</strong>! Seu cadastro foi realizado com sucesso.';
        modalSucesso.showModal();

        formCadastro.reset();
    });
}

if (btnComecar) {
    btnComecar.addEventListener('click', function() {
        // 1. Abre o WhatsApp em uma nova aba (se o link foi gerado)
        if (linkWhatsApp) {
            window.open(linkWhatsApp, '_blank');
        }

        // 2. Mantém o seu redirecionamento original para a aula
        window.location.href = 'modulo1.html';
    });
}

if (modalSucesso) {
    modalSucesso.addEventListener('click', function(evento) {
        if (evento.target === modalSucesso) {
            modalSucesso.close();
        }
    });
}