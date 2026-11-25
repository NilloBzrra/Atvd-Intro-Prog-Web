const formQuiz = document.getElementById('formQuiz');

// Gabaritos para cada módulo (10 questões por módulo)
const gabaritos = {
    m1: ['c', 'c', 'd', 'b', 'd', 'b', 'b', 'c', 'd', 'e'],
    m2: ['a', 'a', 'c', 'c', 'd', 'd', 'a', 'c', 'a', 'c'],
    m3: ['b', 'b', 'a', 'c', 'a', 'a', 'd', 'b', 'c', 'e'],
    m4: ['b', 'd', 'c', 'b', 'a', 'd', 'b', 'c', 'b', 'e']
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

            if (correta) {
                correta.parentElement.classList.add('correta');
            }

            if (marcada) {
                if (marcada.value === letraCerta) {
                    acertos++;
                } else {
                    marcada.parentElement.classList.add('errada');
                }
            }
        }

        // Pontuação final
        const resultado = document.getElementById('resultado');
        resultado.textContent = 'Você acertou ' + acertos + ' de ' + respostas.length + ' questões.';
        resultado.classList.add('visivel');
    });
}