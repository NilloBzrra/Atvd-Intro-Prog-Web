const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault();
        
    
        const nome = document.getElementById('nome').value;
   
        const modalSucesso = document.getElementById('modalSucesso');
        const modalMensagem = document.getElementById('modalMensagem');
        
        if (modalSucesso && modalMensagem) {
           
            modalMensagem.innerHTML = `Bem-vindo(a), <strong>${nome}</strong>! Seu cadastro foi realizado com sucesso. Prepare-se para dominar o JavaScript.`;
          
            modalSucesso.showModal();
        }

    
        formCadastro.reset();
    });
}


const modalSucesso = document.getElementById('modalSucesso');
if (modalSucesso) {
    modalSucesso.addEventListener('click', (event) => {
        if (event.target === modalSucesso) {
            modalSucesso.close();
        }
    });
}


const modalEmBreve = document.getElementById('modal-em-breve');
const btnFechar = document.getElementById('fechar-modal');
const modulosEmBreve = document.querySelectorAll('.btn-modulo.em-breve');

if (modalEmBreve && btnFechar) {
    modulosEmBreve.forEach((modulo) => {
        modulo.addEventListener('click', (event) => {
            event.preventDefault();
            modalEmBreve.showModal();
        });
    });

    btnFechar.addEventListener('click', () => {
        modalEmBreve.close();
    });

    modalEmBreve.addEventListener('click', (event) => {
        if (event.target === modalEmBreve) {
            modalEmBreve.close();
        }
    });
}