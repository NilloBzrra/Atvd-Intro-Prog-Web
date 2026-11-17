
const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {

        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        
        alert(`Bem-vindo(a), ${nome}! Seu cadastro foi realizado com sucesso. Prepare-se para dominar o JavaScript.`);

        formCadastro.reset();
    });
}

const modal = document.getElementById('modal-em-breve');
const btnFechar = document.getElementById('fechar-modal');
const modulosEmBreve = document.querySelectorAll('.btn-modulo.em-breve');

if (modal && btnFechar) {
    modulosEmBreve.forEach((modulo) => {
        modulo.addEventListener('click', (event) => {
            event.preventDefault();
            modal.showModal();
        });
    });

    btnFechar.addEventListener('click', () => {
        modal.close();
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}