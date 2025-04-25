const campoInput = document.querySelector('.campo-pergunta input');
const areaMensagens = document.querySelector('.area-mensagens');
const botaoEnviar = document.querySelector('.botao-enviar');

let primeiraMensagem = true;

function adicionarMensagem(texto, classe) {
    // Exibir área de mensagens apenas após a primeira mensagem
    if (primeiraMensagem) {
        areaMensagens.classList.remove('oculta');
        primeiraMensagem = false;
    }

    const div = document.createElement('div');
    div.classList.add('mensagem', classe);

    if (classe === 'bot') {
        // Criar a imagem do bot
        const imagemBot = document.createElement('img');
        imagemBot.src = 'images/megatron.png';
        imagemBot.alt = 'Megatron';
        imagemBot.classList.add('imagem-bot');

        // Criar uma área para o texto da mensagem
        const textoMensagem = document.createElement('span');
        textoMensagem.innerText = texto;

        // Adicionar a imagem e o texto à div
        div.appendChild(imagemBot);
        div.appendChild(textoMensagem);
    } else {
        // Se for a mensagem do usuário, apenas o texto
        div.innerText = texto;
    }

    areaMensagens.appendChild(div);

    // Rolagem automática para a última mensagem
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}

botaoEnviar.addEventListener('click', () => {
    const texto = campoInput.value.trim();

    if (texto !== '') {
        // Adiciona mensagem do usuário
        adicionarMensagem(texto, 'usuario');
        campoInput.value = '';

        // Simula resposta do bot com pequeno delay
        setTimeout(() => {
            adicionarMensagem('Teste de mensagem', 'bot');
        }, 500);
    }
});

// Permitir enviar com Enter também
campoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        botaoEnviar.click();
    }
});
