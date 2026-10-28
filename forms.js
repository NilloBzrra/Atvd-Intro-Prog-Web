
const formCadastro = document.getElementById('formCadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {

        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        
        alert(`Bem-vindo(a), ${nome}! Seu cadastro foi realizado com sucesso. Prepare-se para dominar o JavaScript.`);

        formCadastro.reset();
    });
}