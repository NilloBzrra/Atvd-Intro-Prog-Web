function executarExemplo1() {
    alert("🚀 Sucesso! O arquivo script.js está vinculado e rodando corretamente.");
}

function executarExemplo2() {
    const container = document.getElementById("resultadoLoop");
    container.classList.add("visible");

    container.innerHTML = "<strong>Iniciando processamento:</strong><br><br>";
    
    for (let i = 1; i <= 5; i++) {
        container.innerHTML += `Gerando item de lista número ${i}<br>`;
    }
    
    container.innerHTML += "<br><em>Loop processado com sucesso!</em>";
}

function executarExemplo3() {
    const caixa = document.getElementById("caixaDOM");
    
    caixa.innerText = "DOM Manipulado com Sucesso! ✨";
    caixa.style.backgroundColor = "#F7DF1E";
    caixa.style.color = "#1D1D1D";
    caixa.style.borderStyle = "solid";
    caixa.style.fontWeight = "bold";
    caixa.style.textAlign = "center";
}


function executarExemploFuncao() {
    const caixa = document.getElementById("caixaFuncoes");
    caixa.classList.add("visible");

    function calcularDesconto(valor, percentual = 10) {
        const desconto = valor * (percentual / 100);
        return valor - desconto;
    }

    const precoOriginal = 200;
    const precoComDesconto = calcularDesconto(precoOriginal, 15); 
    const precoPadrao = calcularDesconto(precoOriginal);         

    caixa.innerHTML = `
        <strong>Função com Parâmetros e Retorno Executada!</strong><br><br>
        • Preço Original: R$ ${precoOriginal},00<br>
        • Com 15% de desconto (argumentos 200 e 15): <strong>R$ ${precoComDesconto},00</strong><br>
        • Com desconto padrão (argumento 200, default 10%): <strong>R$ ${precoPadrao},00</strong>
    `;
    
    caixa.style.backgroundColor = "#242424";
    caixa.style.borderStyle = "solid";
    caixa.style.borderColor = "var(--js-yellow)";
    caixa.style.color = "var(--text-light)";
}

function executarExemploArrow() {
    const caixa = document.getElementById("caixaFuncoes");
    caixa.classList.add("visible");

    // Arrow Functions
    const saudar = (nome) => `Bem-vindo(a), ${nome}!`;
    const somar = (a, b) => a + b;

    const mensagem = saudar("Estudante do JS Mastery");
    const resultadoSoma = somar(10, 25);

    caixa.innerHTML = `
        <strong>Arrow Functions Executadas com Sucesso! ⚡</strong><br><br>
        • Saudação (Arrow Function): <em>"${mensagem}"</em><br>
        • Soma (Arrow Function concisa ` + "`10 + 25`" + `): <strong>${resultadoSoma}</strong>
    `;
    
    caixa.style.backgroundColor = "#242424";
    caixa.style.borderStyle = "solid";
    caixa.style.borderColor = "var(--js-yellow)";
    caixa.style.color = "var(--text-light)";
}