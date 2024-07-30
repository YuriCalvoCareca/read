const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre que tem a habilidade de viajar no tempo. Para onde você vai primeiro?",
        alternativas: [
            {
                texto: "Vou para o futuro e ver como será a tecnologia.",
                afirmacao: "Vocẽ está ansioso para ver as inovações tecnolõgicas e como elas impactarão a vida das pessoas. "
            },
            {
                texto: "Vou para o passado para ver como está a vida antigamente.",
                afirmacao: "Vocẽ está ansioso para ver as inovações e ver como elas impactarão a vida das pessoas."
            }
        ]
    },
    {
        enunciado: "Vocẽ encontra um gênio eque pode conceder um desejo?",
        alternativas: [
            {
                texto: "Peço sabedoria infinita.",
                afirmacao: "Você valoriza o conhecimento e a sabedoria e acredita que a sabedoria pode resolver muitos problemas. "
            },
            {
                texto: "Peço Riqueza.",
                afirmacao: "Você acredita que a riqueza pode proporcionar conforto e oportunidades."
            }
        ]
    },
    {
        enunciado: "Você ganha a chance de aprender qualquer habilidade instantaneamente. Qual você escolhe? ",
        alternativas: [
            {
                texto: "Habilidade de falar todos os idiomas.",
                afirmacao: "Você quer se comunicar com qualquer pessoa no mundo sem dificuldade."
            },
            {
                texto: "Habilidade de tocar qualquer intrumento musical.",
                afirmacao: "Você tem uma paixão pela música e quer ser capaz de tocar qualquer instrumento."
            }
        ]
    },
    {
        enunciado: "Você pode viver em qualquer época da hitória. Qual você escolhe?",
        alternativas: [
            {
                texto: "Renascimento.",
                afirmacao: "Você é fascinado pelas artes e a ciência e gostaria de viver numa época de grande inovação."
            },
            {
                texto: "futuro distante",
                afirmacao: "Você quer ver como a sociedade e a tecnologia evoluíram ao longo dos séculos."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
