const SENHA = "maravilhosa";
const MODO_TESTE = false; // Mude para false para o dia real
const HORA_TESTE = "18:00";

const mensagens = [
    {   h: "06:00",
        t: "O Despertar do Grande Dia",
        m: "Bom dia, meu amor! O dia finalmente chegou. FINALMENTE! 💍\n\nEssa daqui provavelmente é a primeira vez que estamos nos falando hoje e eu queria te dizer, basicamente, três coisas:\n\n1. EU TE AMO MUITO. Vou fazer de tudo para que esse dia seja perfeito para nós. Tente, por favor, não se estressar com coisas bobas (sei que é difícil!), apenas aproveite ao máximo. Você trabalhou e se dedicou muito para que tudo fosse do nosso jeitinho, então curta cada segundo, porque esses momentos não voltam.\n\n2. Um agradecimento especial à Samira. Ela me deu um toque: \"Seria bom você pensar em alguma surpresa para ela durante o dia, talvez uma carta...\". Aí eu pensei: por que não reprisar a ideia da carta que você mais gostou de receber? E aqui estamos nós...\n\n3. Sobre o meu jeitinho. Sei que às vezes tenho dificuldades para expressar meus sentimentos com você e é algo que estou aprendendo a cada dia. Nessa reta final, estou muito ansioso com tudo o que está acontecendo e mudando; estou louco para viver essa próxima etapa da vida com você e conquistar tudo o que sonhamos. Agradeço muito a Deus por ter reservado você para mim.\n\nConforme as horas forem passando, novas mensagens serão liberadas. Espero que goste! Até a próxima...\n\nTE AMO! ❤️"},
    { 
        h: "09:00",
        t: "O Seu Momento de Rainha",
        m: "Bom, agora você já deve estar no sítio e vai começar o seu momento de rainha. ✨\n\nAproveite esse momento, tente ficar calma e esqueça o que está acontecendo fora da sua sala. Aproveite de verdade! Já foi muito estressante até aqui, principalmente nessa reta final, então simplesmente curta e descanse para o nosso momento.\n\nTe amo muito e estou muito ansioso para tudo o que ainda vai acontecer hoje.\n\nAssim como o Chorão disse: \"O seu dia mais feliz vai ser o mesmo que o meu\". Eu espero que esse dia seja hoje, e que a gente sempre substitua o nosso \"dia mais feliz\" pela nossa próxima grande conquista juntos.\n\nEnfim, era essa a mensagem. Aproveita seu momento, desconecta do mundo durante algumas horinhas porque o dia promete!\n\nTE AMO! Estou aqui fora garantindo que as coisas vão acontecer, me deseje sorte! ❤️" },
    {
        h: "12:00",
        t: "Metade do Caminho",
        m: "Já acabou a manhã do nosso dia! Eu estou escrevendo isso bem antes, mas se o que o pessoal falou para a gente é verdade, esse dia deve estar passando muito rápido.\n\nEstou muito ansioso para que tudo o que planejamos aconteça e, dada a hora, eu queria mesmo era estar comendo a comida do buffet! Mal posso esperar pela festa para conseguirmos comer tudo o que escolhemos.\n\nMas além da ansiedade para a festa, eu estou muito ansioso para começar minha vida ao seu lado, deixar de ser apenas o Guilherme para ser o Guilherme da Taynara (clichê? Acho que sim, mas nunca fez tanto sentido).\n\nTE AMO! Espero de verdade que esteja tendo um excelente dia e que esteja tudo bem calmo por aí... Agora falta muito pouco, já estamos na tarde do nosso casamento... Até daqui a pouco! ❤️"},
    {
        h: "14:00",
        t: "O Frio de Bariloche na Barriga",
        m: "É agora, né?\nNão sei se a gente já se encontrou a essa altura... mas eu sei que está bem próximo agora.\n\nVocê já deve estar quase pronta ou até já está pronta! Os padrinhos já devem estar terminando de se preparar para vir, e eu espero que já esteja pronto e no salão a essa altura... Enfim, tudo está quase pronto e só falta 1 hora e meia para começar nossa cerimônia.\n\nEu tô nervoso só de escrever isso, imagina como eu devo estar nessa hora kkkk melhor nem imaginar! A ansiedade já está a mil, queria poder pular para o momento em que assinamos o documento... Acho que a ansiedade só vai passar nesse momento ou quando tocar \"We Are The Champions\".\n\nTudo o que sei é que nunca faltou tão pouco e eu já estou conseguindo sentir o frio de Bariloche!\n\nEssa com certeza foi a melhor escolha que já fiz e a vontade de viver tudo o que estamos sonhando está muito forte.\n\nQueria poder me expressar melhor, mas não sei explicar o que estou sentindo... Só sei que estou muito feliz por tudo.\n\nTE AMO MUITO! ❤️"},
    {
        h: "15:30",
        t: "O Nosso Momento Chegou",
        m: "Meu amor, se você está lendo isso, é porque faltam apenas alguns minutos ou talvez segundos para a gente se encontrar no altar.\n\nEu sei que agora o seu coração deve estar batendo na boca e o frio na barriga parece que não vai passar, mas eu quero te pedir uma coisa: respira fundo. Esquece as câmeras, os convidados, a decoração e qualquer detalhe que tenha te preocupado até aqui. Quando estiver entrando e a música tocar, foca só em mim. Eu vou estar lá na frente, te esperando com todo o amor e ansiedade do mundo.\n\nAproveite cada passo dessa caminhada, sinta o chão sob os seus pés e olhe para as pessoas que nos amam, mas lembre-se que todo mundo que está lá é apenas para nos privilegiar e apoiar nesse momento.\n\nNão preciso nem te ver para saber que você está maravilhosa! O nosso dia está perfeito e Deus já preparou cada detalhe desse novo capítulo que começamos agora.\n\nEstou muito ansioso por tudo o que vamos viver. Obrigado por cada momento que passamos juntos e por todo o apoio que você me deu; você tem sido extremamente importante em cada passo meu e eu conto com você para ser minha companheira pelo resto da vida.\n\nTe amo muito e não sei nem como expressar. Nos vemos em instantes, minha noiva, minha esposa!\n\nTE AMO MUITO MUITO MUITO! ❤️💍"
}
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