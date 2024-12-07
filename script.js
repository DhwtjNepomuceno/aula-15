const tela = document.getElementById("tela");
const porcentagem = document.getElementById("porcentagem");
const limpar = document.getElementById("limpar");
const divisao = document.getElementById("divisao");
const multiplicacao = document.getElementById("multiplicacao");
const subtracao = document.getElementById("subtracao");
const adicao = document.getElementById("adicao");
const zero = document.getElementById("zero");
const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const quatro = document.getElementById("quatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const sete = document.getElementById("sete");
const oito = document.getElementById("oito");
const nove = document.getElementById("nove");
const calcular = document.getElementById("calcular");

const listaNumeros = [];

calcular.addEventListener("click", () => {
    const arrayString = listaNumeros.join("")
    const resultado = eval(arrayString)
    listaNumros = [resultado]
    atualizarTela()
})

function atualizarTela() {
    tela.textContext = "";
 listaNumeros.map((item) => (tela.textContent + item))
}

um.addEventListener("click", () => {
    listaNumeros.push(1);
    atualizarTela();
})

dois.addEventListener("click", () => {
    listaNumeros.push(2);
    atualizarTela();
})

tres.addEventListener("click", () => {
    listaNumeros.push(3);
    atualizarTela();
})

quatro.addEventListener("click", () => {
    listaNumeros.push(4);
    atualizarTela();
})

cinco.addEventListener("click", () => {
    listaNumeros.push(5);
    atualizarTela();
})

seis.addEventListener("click", () => {
    listaNumeros.push(6);
    atualizarTela();
})

sete.addEventListener("click", () => {
    listaNumeros.push(7);
    atualizarTela();
})

oito.addEventListener("click", () => {
    listaNumeros.push(8);
    atualizarTela();
})

nove.addEventListener("click", () => {
    listaNumeros.push(9);
    atualizarTela();
})

