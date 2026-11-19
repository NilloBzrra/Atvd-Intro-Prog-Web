const formQuiz = document.getElementById('formQuiz');

const gabaritos = {
    m1: ['c', 'c', 'd', 'b', 'c'],
    m2: ['a', 'a', 'c', 'c', 'a'],
    m3: ['b', 'b', 'c', 'a', 'a'],
    m4: ['b', 'd', 'c', 'b', 'a']
};

if (formQuiz) {
    formQuiz.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const provaAtual = document.querySelector('.quiz').dataset.quiz;
        const respostas = gabaritos[provaAtual];
        let acertos = 0;

        // Limpa as marcações
        const opcoes = formQuiz.querySelectorAll('label');
        for (let i = 0; i < opcoes.length; i++) {
            opcoes[i].classList.remove('correta', 'errada');
        }

        // Corretor das questões
        for (let i = 0; i < respostas.length; i++) {
            const numeroQuestao = 'q' + (i + 1);
            const letraCerta = respostas[i];

            const marcada = formQuiz.querySelector('input[name="' + numeroQuestao + '"]:checked');
            const correta = formQuiz.querySelector('input[name="' + numeroQuestao + '"][value="' + letraCerta + '"]');

            correta.parentElement.classList.add('correta');

            if (marcada.value === letraCerta) {
                acertos++;
            } else {
                marcada.parentElement.classList.add('errada');
            }
        }

        // Pontuação final
        const resultado = document.getElementById('resultado');
        resultado.textContent = 'Você acertou ' + acertos + ' de ' + respostas.length + ' questões.';
        resultado.classList.add('visivel');
    });
}