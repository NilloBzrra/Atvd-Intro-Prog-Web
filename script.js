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

