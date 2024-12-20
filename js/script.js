
// Função para abrir o diálogo com base na sala escolhida
function AbrirDialog(escolhaSalaID) {
    const DadosDialog = {
        1: { titulo: "FUNDAMENTAL 1A", botoes: ["1° Ano", "2° Ano"], backgroundColor: "#ffdf2b" },
        2: { titulo: "FUNDAMENTAL 1B", botoes: ["3° Ano", "4° Ano", "5° Ano"], backgroundColor: "#13b818" },
        3: { titulo: "FUNDAMENTAL 2", botoes: ["6° Ano", "7° Ano", "8° Ano", "9° Ano"], backgroundColor: "#ff652d" },
        4: { titulo: "ENSINO MÉDIO", botoes: ["1° Ano", "2° Ano", "3° Ano"], backgroundColor: "#ff8200" },
        5: { titulo: "CURSOS", botoes: ["Arduino", "Robótica", "Personaliza","SENAI", "Caça Asteroide", "Autorizados","Para Gabaritar", "TRI","Topicos Avançados","Práticas Investigativas"], backgroundColor: "#8b97fd" }
    };

    const { titulo, botoes, backgroundColor } = DadosDialog[escolhaSalaID];

    // Atualiza o título no diálogo
    document.querySelector("#dialog h2").innerText = titulo;

    // Preenche os botões no diálogo
    const container = document.getElementById("botoes-container");
    container.innerHTML = "";
    botoes.forEach(botao => {
        const button = document.createElement("button");
        button.textContent = botao;

        // Adiciona evento de click para salvar o texto e redirecionar
        button.addEventListener("click", () => {
            localStorage.setItem("textoSelecionado", botao);
            window.location.href = "contador.html";
        });

        container.appendChild(button);
        if (botao === "Práticas Investigativas") {
            button.style.fontSize = "22px"; // Define um tamanho de fonte menor
        }
    });

    // Atualiza o fundo do diálogo
    const dialog = document.getElementById("dialog");
    dialog.style.backgroundColor = backgroundColor;
    dialog.showModal();
}

// Função para fechar o diálogo
function fecharDialog() {
    const dialog = document.getElementById("dialog");
    dialog.close();
}

// Fecha o diálogo se clicar fora dele
window.onclick = function(event) {
    const dialog = document.getElementById('dialog');
    if (event.target === dialog) {
        dialog.close();
    }
};

// Atualiza o texto do título ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const textoSelecionado = localStorage.getItem("textoSelecionado");

    if (textoSelecionado) {
        const elementoH1 = document.querySelector("#nomeSala h1");
        elementoH1.innerText = textoSelecionado;
    }

    // Configuração dos botões de contador
    const botaoMais = document.getElementById("mais");
    const botaoMenos = document.getElementById("menos");
    const inputContador = document.getElementById("numContador");

    // Evita o comportamento padrão de recarregar a página
    botaoMais.addEventListener("click", (event) => {
        event.preventDefault();
        alterarValor(1);
    });

    botaoMenos.addEventListener("click", (event) => {
        event.preventDefault();
        alterarValor(-1);
    });

    // Função para alterar o valor do contador
    function alterarValor(incremento) {
        let valorAtual = parseInt(inputContador.value) || 0; // Converte para número (ou usa 0 se estiver vazio)
        valorAtual += incremento; // Adiciona ou subtrai
        valorAtual = Math.max(0, Math.min(valorAtual, 33)); // Limita entre 0 e 33
        inputContador.value = valorAtual; // Atualiza o input com o novo valor
    }

    // Valida o valor digitado no input
    inputContador.addEventListener("input", () => {
        if (inputContador.value < 0) inputContador.value = 0;
        if (inputContador.value > 33) inputContador.value = 33;
    });
});

console.log('Script foi carregado')
const btn_enviar_contagem = document.getElementById('enviar_form');
btn_enviar_contagem.addEventListener('click', () => {
    console.log('Evento acionado');
    window.location.href = "./grupamento_turma.html";

    alert('Contagem cadastrada com sucesso');

});
const btn_login = document.getElementById('fazer_login');
btn_login.addEventListener('click', () => {
    console.log('Evento acionado');
    window.location.href = "./grupamento_turma.html";

    alert('Login realizado com sucesso');

});
// console.log('antes do form')
// document.getElementById('form_cadastro').addEventListener('submit',(event)=>{
//     event.preventDefault();
//     console.log('Enviado')
//     const cads_nome = document.getElementById('txtnome').value
//     const cads_nif = document.getElementById('txtnif').value
//     const cads_senha = document.getElementById('txtsenha').value

//     const url_cadastro = "http://10.188.35.87:8000/users/usuarios"

//     const dadosCadastro = {
//         nome:cads_nome,
//         nif:cads_nif,
//         senha:cads_senha
//     };

//     fetch(url_cadastro,{
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(dadosCadastro)
//     })
//     .then(response =>{
//         if(!response.ok){
//             throw new Error(`Erro na requisição ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data=>{
//         alert("Cadastro realizado com sucesso!")
//         console.log("Resposta da API:", data);
//     })
//     .catch(error =>{
//         alert("Não foi possível realizar o cadastro")
//         console.log('erro:', error);
//     })
// })

