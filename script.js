const SENHA = "Maravilhosa";
const MODO_TESTE = true; // Mude para false para o dia real
const HORA_TESTE = "18:00";

const mensagens = [
    {   h: "06:00",
        t: "O Despertar do Grande Dia",
        m: "Bom dia, meu amor! O dia finalmente chegou. FINALMENTE! 💍\n\nEssa daqui provavelmente é a primeira vez que estamos nos falando hoje e eu queria te dizer, basicamente, três coisas:\n\n1. EU TE AMO MUITO. Vou fazer de tudo para que esse dia seja perfeito para nós. Tente, por favor, não se estressar com coisas bobas (sei que é difícil!), apenas aproveite ao máximo. Você trabalhou e se dedicou muito para que tudo fosse do nosso jeitinho, então curta cada segundo, porque esses momentos não voltam.\n\n2. Um agradecimento especial à Samira. Ela me deu um toque: \"Seria bom você pensar em alguma surpresa para ela durante o dia, talvez uma carta...\". Aí eu pensei: por que não reprisar a ideia da carta que você mais gostou de receber? E aqui estamos nós...\n\n3. Sobre o meu jeitinho. Sei que às vezes tenho dificuldades para expressar meus sentimentos com você e é algo que estou aprendendo a cada dia. Nessa reta final, estou muito ansioso com tudo o que está acontecendo e mudando; estou louco para viver essa próxima etapa da vida com você e conquistar tudo o que sonhamos. Agradeço muito a Deus por ter reservado você para mim.\n\nConforme as horas forem passando, novas mensagens serão liberadas. Espero que goste! Até a próxima...\n\nTE AMO! ❤️"},
    { h: "10:00", t: "Dia de Noiva", m: "Você deve estar no salão agora. Aproveite, rainha!" },
    { h: "12:00", t: "Tarde do nosso Dia", m: "O coração já está batendo forte por aqui!" },
    { h: "14:00", t: "Últimos preparativos", m: "Falta muito pouco para te ver de branco!" },
    { h: "15:30", t: "Nosso momento", m: "Te espero no altar. Eu te amo, Taynara!" }
];

function validarAcessoDia() {
    const agora = new Date();
    // No JS, Janeiro é 0, Fevereiro é 1, Março é 2, Abril é 3.
    const eDiaDezoito = (agora.getDate() === 18 && agora.getMonth() === 3);

    if (eDiaDezoito || MODO_TESTE) {
        abrirLogin();
    } else {
        alert("Nosso dia está chegando e logo você vai poder acessar minha carta para nosso momento, volte aqui no nosso dia ❤️");
    }
}

function abrirLogin() { 
    document.getElementById('tela-login').style.display = 'flex'; 
}

function fecharLogin() { 
    document.getElementById('tela-login').style.display = 'none'; 
}

function fecharModal() { 
    document.getElementById('modal').style.display = 'none'; 
    document.body.style.overflow = 'auto'; 
}

function checarSenha() {
    const val = document.getElementById('senha').value.toLowerCase().trim();
    if(val === SENHA) {
        for(let i=0; i<15; i++) setTimeout(createHeart, i*150);
        document.getElementById('tela-login').style.display = 'none';
        document.getElementById('calendar-view').style.display = 'none';
        document.getElementById('app-mensagens').style.display = 'flex';
        gerarMenu();
    } else {
        document.getElementById('erro').style.display = 'block';
    }
}

function gerarMenu() {
    const lista = document.getElementById('lista-mensagens');
    let agora = new Date();
    if(MODO_TESTE) {
        const [h, m] = HORA_TESTE.split(':').map(Number);
        agora.setHours(h, m);
    }
    const minAtual = agora.getHours() * 60 + agora.getMinutes();
    
    lista.innerHTML = "";
    mensagens.forEach(item => {
        const [h, m] = item.h.split(':').map(Number);
        const minItem = h * 60 + m;
        const btn = document.createElement('button');
        btn.className = 'btn-msg';
        
        if(minAtual >= minItem) {
            btn.innerHTML = `<strong>${item.h}</strong> — ${item.t}`;
            btn.onclick = () => {
                document.getElementById('modal-hora-top').innerText = item.h + " - " + item.t;
                document.getElementById('modal-texto').innerText = item.m;
                document.getElementById('modal').style.display = 'block';
                document.getElementById('modal-scroll-area').scrollTop = 0;
                document.body.style.overflow = 'hidden';
            };
        } else {
            btn.innerHTML = `<strong>${item.h}</strong> — Em breve... 🔒`;
            btn.className += ' bloqueado';
        }
        lista.appendChild(btn);
    });
}

function createHeart() {
    const h = document.createElement("div");
    h.className = "heart"; h.innerHTML = "💙";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (Math.random()*2+2)+"s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
}

document.getElementById("senha").addEventListener("keyup", function(event) {
    if (event.key === "Enter") { checarSenha(); }
});