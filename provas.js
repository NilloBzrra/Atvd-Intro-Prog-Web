const formQuiz = document.getElementById('formQuiz');

if (formQuiz) {
    formQuiz.addEventListener('submit', function(event) {
        event.preventDefault();

        const quiz = document.querySelector('.quiz');
        const prova = quiz ? quiz.dataset.quiz : 'm1';

        const respostasPorProva = {
            m1: { q1: 'c', q2: 'c', q3: 'd', q4: 'b', q5: 'c' },
            m2: { q1: 'a', q2: 'a', q3: 'c', q4: 'c', q5: 'a' },
            m3: { q1: 'b', q2: 'b', q3: 'c', q4: 'a', q5: 'a' }
        };

        const respostasCorretas = respostasPorProva[prova];

        let acertos = 0;

        for (const [questao, respostaCorreta] of Object.entries(respostasCorretas)) {
            const resposta = formQuiz.querySelector(`input[name="${questao}"]:checked`);
            if (resposta && resposta.value === respostaCorreta) {
                acertos++;
            }
        }

        const resultado = document.getElementById('resultado');
        resultado.textContent = `Você acertou ${acertos} de 5 questões.`;
        resultado.classList.add('visible');
    });
}