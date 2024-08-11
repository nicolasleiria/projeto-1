
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes");


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {


        desativaBotaoSelecionado();


        botao.classList.add("selecionado");


        removerImagemAtiva();


        mostrarImagemdeFundo(indice);


        removerInformacoesAtiva();

      
        mostrarInformacoes(indice);

    });
})

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemdeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function removerInformacoesAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function removerImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
