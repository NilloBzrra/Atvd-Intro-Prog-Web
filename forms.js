const formCadastro = document.getElementById('formCadastro');
const modalSucesso = document.getElementById('modalSucesso');
const btnComecar = document.getElementById('btnComecar');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nome = document.getElementById('nome').value;
        const modalMensagem = document.getElementById('modalMensagem');

        modalMensagem.innerHTML = 'Bem-vindo(a), <strong>' + nome + '</strong>! Seu cadastro foi realizado com sucesso.';
        modalSucesso.showModal();

        formCadastro.reset();
    });
}

if (btnComecar) {
    btnComecar.addEventListener('click', function() {
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