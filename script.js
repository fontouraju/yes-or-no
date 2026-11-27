const botaoNao = document.getElementById("nao")

botaoNao.addEventListener("mouseover", function() {
 
    const novaPosicaoX = Math.random() * 300;
    const novaPosicaoY = Math.random() * 300;

    botaoNao.style.left = novaPosicaoX + "px";
    botaoNao.style.top = novaPosicaoY + "px";
})

const botaoSim = document.getElementById("sim")

if (botaoSim) {
    botaoSim.addEventListener("click", function() {
        window.location.href = "final.html";
    });
}




