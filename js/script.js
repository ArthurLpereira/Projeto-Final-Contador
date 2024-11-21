// const cabecalho = document.getElementById('turma');
// const tamanhoQuadrado = 95;


// function criarQuadrados() {
//     // Remove apenas os quadrados, mantendo a logo
//     const quadradosExistentes = cabecalho.querySelectorAll('.quadrado');
//     quadradosExistentes.forEach(quadrado => quadrado.remove());

//     // Define as dimensões do cabeçalho
//     const larguraCabecalho = cabecalho.clientWidth;
//     const alturaCabecalho = cabecalho.clientHeight;

//     // Calcula o número de quadrados horizontal e verticalmente
//     const quadradosPorLinha = Math.ceil(larguraCabecalho / tamanhoQuadrado);
//     const quadradosPorColuna = Math.ceil(alturaCabecalho / tamanhoQuadrado);

//     // Loop para criar os quadrados
//     for (let i = 0; i < quadradosPorColuna; i++) {
//         for (let j = 0; j < quadradosPorLinha; j++) {
//             const quadrado = document.createElement('div');
//             quadrado.classList.add('quadrado');

//             // Define a posição de cada quadrado
//             quadrado.style.left = `${j * tamanhoQuadrado}px`;
//             quadrado.style.top = `${i * tamanhoQuadrado}px`;

//             // Adiciona o quadrado ao cabeçalho
//             cabecalho.appendChild(quadrado);
//         }
//     }
// }

// // Chama a função pela primeira vez para criar os quadrados
// criarQuadrados();

// // Atualiza os quadrados ao redimensionar a janela
// window.addEventListener('resize', criarQuadrados);

// const SelecionarSala = document.getElementsByClassName('escolha-sala');


function AbrirDialog(escolhaSalaID){
    const DadosDialog = {
        1: { titulo: "FUNDAMENTAL 1A", botoes: ["1° Ano", "2° Ano"], backgroundColor:"#ffdf2b" },
        2: { titulo: "FUNDAMENTAL 1A", botoes: ["3° Ano", "4° Ano", "5° Ano"], backgroundColor:"#13b818" },
        3: { titulo: "FUNDAMENTAL 2", botoes: ["6° Ano", "7° Ano", "8° Ano", "9° Ano"], backgroundColor:"#ff652d" },
        4: { titulo: "ENSINO MÉDIO", botoes: ["1° Ano", "2° Ano", "3° Ano"], backgroundColor:"#ff8200" },
        5: { titulo: "CURSOS", botoes: ["Arduino", "Robótica", "Personaliza"], backgroundColor:"#8b97fd" }
    }

    const titulo = DadosDialog[escolhaSalaID].titulo;
    const botoes = DadosDialog[escolhaSalaID].botoes;

    document.querySelector("#dialog h2").innerText = titulo;

    const container = document.getElementById("botoes-container");
    container.innerHTML = "";
    botoes.forEach(botao => {
        const button = document.createElement("button");
        button.textContent = botao;
        container.appendChild(button);
    });

    const dialog = document.getElementById("dialog");
    dialog.style.backgroundColor = DadosDialog[escolhaSalaID].backgroundColor;
    dialog.showModal();
}

function fecharDialog(){
    const dialog = document.getElementById("dialog");
    dialog.close();
}

window.onclick = function(event) {
    const dialog = document.getElementById('dialog');
    if (event.target === dialog) {
        dialog.close();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const botaoMais = document.getElementById("mais");
    const botaoMenos = document.getElementById("menos");
    const inputContador = document.getElementById("numContador");

    // Evita o comportamento padrão dos botões (recarregar a página ao clicar)
    botaoMais.addEventListener("click", (event) => {
        event.preventDefault();
        alterarValor(1);
    });

    botaoMenos.addEventListener("click", (event) => {
        event.preventDefault();
        alterarValor(-1);
    });

    // Função para alterar o valor do input
    function alterarValor(incremento) {
        let valorAtual = parseInt(inputContador.value) || 0; // Converte para número (ou usa 0 se estiver vazio)
        valorAtual += incremento; // Adiciona ou subtrai
        inputContador.value = valorAtual; // Atualiza o input com o novo valor

        if(valorAtual < 0) valorAtual = 0;
        if(valorAtual > 33) valorAtual = 33;

        inputContador.value = valorAtual;
    }

    inputContador.addEventListener("input", () =>{
        if(this.value < 0) this.value = 0;
        if(this.value > 33) this.value = 33;
    })
});

