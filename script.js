alert('Bem-vindo à sua página web! O script foi carregado com sucesso.');

document.getElementById('meuBotao').addEventListener('click', function() {

    alert('Ação registrada: você clicou no botão!');

    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Você clicou no botão! O JavaScript está funcionando perfeitamente.';
    mensagem.style.color = '#28a745';
    mensagem.style.marginTop = '15px';
    mensagem.style.fontWeight = 'bold';
});