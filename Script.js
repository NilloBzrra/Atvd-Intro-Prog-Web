alert = ("Você está preparado para aprender JavaScript?");
alert = ("Vamos começar com algumas perguntas para conhecê-lo melhor!");
button = confirm("Clique em 'OK' para continuar ou 'Cancelar' para sair.");
const nome = String(prompt("Qual é o seu nome?"));
const idade = Number(prompt("Qual é a sua idade? (apenas números)"));
const universidade = String(prompt("Qual é a sua universidade?"));
const usuario = {
    nome: nome,
    idade: idade,
    universidade: universidade
};
alert("Olá, " + usuario.nome + "! Você estuda na " + usuario.universidade + " E você tem " + usuario.idade +
    " anos . Bem-vindo(a) ao nosso site de aprendizado JavaScript!");