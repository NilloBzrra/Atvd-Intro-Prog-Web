const formQuiz = document.getElementById('formQuiz');

if (formQuiz) {
    formQuiz.addEventListener('submit', function(event) {
        event.preventDefault();

        const quiz = document.querySelector('.quiz');
        const prova = quiz ? quiz.dataset.quiz : 'm1';


        const respostasPorProva = {
            m1: { q1: 'c', q2: 'c', q3: 'd', q4: 'b', q5: 'c' },
            m2: { q1: 'a', q2: 'a', q3: 'c', q4: 'c', q5: 'a' },
            m3: { q1: 'b', q2: 'b', q3: 'c', q4: 'a', q5: 'a' },
            m4: { q1: 'b', q2: 'd', q3: 'b', q4: 'c', q5: 'b', q6: 'b', q7: 'b', q8: 'b', q9: 'b', q10: 'b'}
        };

        const respostasCorretas = respostasPorProva[prova];
        const totalQuestoes = Object.keys(respostasCorretas).length;
        let acertos = 0;


        formQuiz.querySelectorAll('label').forEach((label) => {
            label.classList.remove('correta', 'errada');
        });
        formQuiz.querySelectorAll('fieldset').forEach((fs) => {
            fs.classList.remove('questao-certa', 'questao-errada');
        });


        for (const [questao, respostaCorreta] of Object.entries(respostasCorretas)) {
            const inputMarcado = formQuiz.querySelector(`input[name="${questao}"]:checked`);
            const inputCorreto = formQuiz.querySelector(`input[name="${questao}"][value="${respostaCorreta}"]`);
            const fieldset = inputCorreto ? inputCorreto.closest('fieldset') : null;

            if (inputCorreto) {
                inputCorreto.closest('label').classList.add('correta');
            }

            if (inputMarcado && inputMarcado.value === respostaCorreta) {
                acertos++;
                if (fieldset) fieldset.classList.add('questao-certa');
            } else {
                if (fieldset) fieldset.classList.add('questao-errada');

                if (inputMarcado) {
                    inputMarcado.closest('label').classList.add('errada');
                }
            }
        }

     
        const resultado = document.getElementById('resultado');
        resultado.textContent = `Você acertou ${acertos} de ${totalQuestoes} questões.`;
        resultado.classList.add('visible');
    });
}
