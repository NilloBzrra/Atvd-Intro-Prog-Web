// Módulo 1: Alerta simples
function executarExemplo1() {
    alert("Sucesso! O arquivo script.js está vinculado e rodando corretamente.");
}

// Módulo 2: Laço de repetição (for)
function executarExemplo2() {
    const caixa = document.getElementById("resultadoLoop");
    caixa.classList.add("visivel");

    let texto = "<strong>Iniciando processamento:</strong><br><br>";

    for (let i = 1; i <= 5; i++) {
        texto += "Gerando item número " + i + "<br>";
    }

    texto += "<br><em>Loop finalizado com sucesso!</em>";
    caixa.innerHTML = texto;
}

// Módulo 3: Manipulação de estilo e texto no DOM
function executarExemplo3() {
    const caixa = document.getElementById("caixaDOM");

    caixa.innerText = "DOM Manipulado com Sucesso!";
    caixa.style.backgroundColor = "#ffe388";
    caixa.style.color = "#111111";
    caixa.style.borderStyle = "solid";
    caixa.style.fontWeight = "bold";
    caixa.style.textAlign = "center";
}

// Módulo 4 (Parte 1): Função com parâmetros e return
function calcularDesconto(valor, percentual = 10) {
    const desconto = valor * (percentual / 100);
    return valor - desconto;
}

function executarExemploFuncao() {
    const caixa = document.getElementById("caixaFuncoes");
    caixa.classList.add("visivel");

    const precoComDesconto = calcularDesconto(200, 15);
    const precoPadrao = calcularDesconto(200);

    caixa.innerHTML =
        "<strong>Função Executada!</strong><br><br>" +
        "Preço original: R$ 200,00<br>" +
        "Com 15% de desconto: <strong>R$ " + precoComDesconto + ",00</strong><br>" +
        "Com desconto padrão (10%): <strong>R$ " + precoPadrao + ",00</strong>";

    caixa.style.borderStyle = "solid";
}

// Módulo 4 (Parte 2): Arrow Functions
const saudar = (nome) => "Bem-vindo(a), " + nome + "!";
const somar = (a, b) => a + b;

function executarExemploArrow() {
    const caixa = document.getElementById("caixaFuncoes");
    caixa.classList.add("visivel");

    const mensagem = saudar("Estudante");
    const resultadoSoma = somar(10, 25);

    caixa.innerHTML =
        "<strong>Arrow Functions Executadas!</strong><br><br>" +
        "Saudação: <em>" + mensagem + "</em><br>" +
        "Soma (10 + 25): <strong>" + resultadoSoma + "</strong>";

    caixa.style.borderStyle = "solid";
}