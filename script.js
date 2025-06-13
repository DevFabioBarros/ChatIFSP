const campoInput = document.querySelector('.campo-pergunta input');
const areaMensagens = document.querySelector('.area-mensagens');
const botaoEnviar = document.querySelector('.botao-enviar');
const logo = document.querySelector('.cabecalho img');

let primeiraMensagem = true;

function adicionarMensagem(texto, classe) {
    if (primeiraMensagem) {
        areaMensagens.classList.remove('oculta');
        primeiraMensagem = false;
    }

    const div = document.createElement('div');
    div.classList.add('mensagem', classe);

    if (classe === 'bot') {
        const imagemBot = document.createElement('img');
        imagemBot.src = 'images/megatron.png';
        imagemBot.alt = 'Megatron';
        imagemBot.classList.add('imagem-bot');

        const textoMensagem = document.createElement('span');
        textoMensagem.innerText = texto;

        div.appendChild(imagemBot);
        div.appendChild(textoMensagem);
    } else {
        div.innerText = texto;
    }

    areaMensagens.appendChild(div);
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}

botaoEnviar.addEventListener('click', () => {
    const texto = campoInput.value.trim();
    if (texto !== '') {
        adicionarMensagem(texto, 'usuario');
        campoInput.value = '';

        setTimeout(() => {
            adicionarMensagem('Teste de mensagem', 'bot');
        }, 500);
    }
});

campoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        botaoEnviar.click();
    }
});

// Alternar modo claro/escuro ao clicar na logo
logo.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
});
