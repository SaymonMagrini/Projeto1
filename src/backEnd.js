const questions = [
  {
    question: "Quem é o autor do livro Crônicas de Gelo e Fogo?",
    options: ["A) George R. R. Martin", "B) J. K. Rowling", "C) Rick Riordan", "D) William Shakespeare"],
    correct: 0
  },
  {
    question: "Quem é chamada de ‘A Mãe dos Dragões’ no livro Crônicas de Gelo e Fogo?",
    options: ["A) John Snow", "B) Daenerys Targaryen", "C) Tyrion Lannister", "D) Arya Stark"],
    correct: 1
  },
  {
    question: "Qual é o nome do trono disputado no livro Crônicas de Gelo e Fogo?",
    options: ["A) Trono de Ferro", "B) Trono dos 7 Reinos", "C) Trono Real", "D) Trono das Lamentações"],
    correct: 0
  },
  {
    question: "Como são chamados os dragões de Daenerys no livro Crônicas de Gelo e Fogo?",
    options: ["A) Drogon, Balerion e Viserion", "B) Vhagar, Rhaegal e Viserion", "C) Rhaegal e Syrax; Drogon", "D) Drogon, Rhaegal e Viserion"],
    correct: 3
  },
  {
    question: "Qual a família que governa Winterfell no livro Crônicas de Gelo e Fogo?",
    options: ["A) Lannister", "B) Targaryen", "C) Stark", "D) Tully"],
    correct: 2
  },
  {
    question: "Quem é a autora de Harry Potter?",
    options: ["A) Franz Kafka", "B) J. K. Rowling", "C) Colleen Hoover", "D) Matt Haig"],
    correct: 1
  },
  {
    question: "Quem faz parte do trio principal da saga Harry Potter?",
    options: ["A) Harry Potter, Cedrico e Hermione", "B) Harry Potter, Rony e Luna", "C) Harry Potter, Luna e Voldemort", "D) Harry Potter, Rony e Hermione"],
    correct: 3
  },
  {
    question: "Qual é o apelido dado ao Voldemort em Harry Potter?",
    options: ["A) Aquele que não deve ser nomeado", "B) Aquele que não deve ser chamado", "C) Aquele que não deve ser provocado", "D) Aquele que não deve ser chateado"],
    correct: 0
  },
  {
    question: "Como se chama o tio de Harry Potter?",
    options: ["A) Sirius Berny", "B) Rony Weasley", "C) Sirius Black", "D) Luna Lovegood"],
    correct: 2
  },
  {
    question: "Do que é feita a Varinha das Varinhas em Harry Potter?",
    options: ["A) Árvore de Macieira", "B) Árvore de Sabugueiro", "C) Árvore de Cipreste", "D) Árvore de Ébano"],
    correct: 1
  },
  {
    question: "Quem é o autor do livro A Biblioteca da Meia Noite?",
    options: ["A) Colleen Hoover", "B) Matt Haig", "C) Arthur Conan Doyle", "D) John Green"],
    correct: 1
  },
  {
    question: "Qual é o nome da protagonista do livro A Biblioteca da Meia Noite?",
    options: ["A) Nora Seed", "B) Srª Elm", "C) Joe Seed", "D) Dan"],
    correct: 0
  },
  {
    question: "Quando a biblioteca aparece no livro A Biblioteca da Meia Noite?",
    options: ["A) Ao dormir", "B) Ao ser atropelada", "C) Após suicídio", "D) Ao ser assassinada"],
    correct: 2
  },
  {
    question: "Quais são os temas do livro A Biblioteca da Meia Noite?",
    options: ["A) Morte, saúde mental, filosofia", "B) Romance, viagens", "C) Moda e beleza", "D) Mistério e espionagem"],
    correct: 0
  },
  {
    question: "Quem orienta Nora Seed no livro A Biblioteca da Meia Noite?",
    options: ["A) Dan", "B) Volts", "C) Ash", "D) Srª Elm"],
    correct: 3
  },
  {
    question: "Quem é o autor do livro É Assim que Acaba?",
    options: ["A) Colleen Hoover", "B) J. K. Rowling", "C) Dante Alighieri", "D) John Green"],
    correct: 0
  },
  {
    question: "Quem é Lily Bloom na história do livro É Assim que Acaba?",
    options: ["A) A melhor amiga", "B) A irmã", "C) A protagonista", "D) A mãe"],
    correct: 2
  },
  {
    question: "Qual é a profissão de Ryle no livro É Assim que Acaba?",
    options: ["A) Psicólogo", "B) Neurocirurgião", "C) Engenheiro", "D) Professor"],
    correct: 1
  },
  {
    question: "Temas abordados no livro É Assim que Acaba?",
    options: ["A) Política", "B) História", "C) Violência doméstica", "D) Carreira"],
    correct: 2
  },
  {
    question: "Significado do título do livro 'É Assim que Acaba'?",
    options: ["A) Rompimento de amizade", "B) Interrupção do ciclo de abuso", "C) Descoberta pessoal", "D) Superação paterna"],
    correct: 1
  },
  {
    question: "Quem é o autor de A Culpa é das Estrelas?",
    options: ["A) Matt Haig", "B) William Shakespeare", "C) John Green", "D) Franz Kafka"],
    correct: 2
  },
  {
    question: "Qual o nome da protagonista que tem câncer em A Culpa é das Estrelas?",
    options: ["A) Hazel Grace", "B) Augustus Waters", "C) Peter Van", "D) Caroline Mathers"],
    correct: 0
  },
  {
    question: "Quem é Augustus Waters em A Culpa é das Estrelas?",
    options: ["A) Um ex-professor de física", "B) Um ex-jogador de basquete", "C) Um ex-jogador de futebol", "D) Um ex-policial"],
    correct: 1
  },
  {
    question: "Onde Hazel e Augustus viajam juntos em A Culpa é das Estrelas?",
    options: ["A) Para Finlândia", "B) Para Nova York", "C) Para Amsterdã", "D) Para Hawaii"],
    correct: 2
  },
  {
    question: "Qual é o papel do livro fictício 'Uma Aflição Imperial' em A Culpa é das Estrelas?",
    options: ["A) A busca por sentido sobre a vida e a morte", "B) A busca por autocuidado", "C) A busca por superação de traumas", "D) A busca por autopreservação"],
    correct: 0
  },
  {
    question: "Quem é o autor de Romeu e Julieta?",
    options: ["A) William Shakespeare", "B) George R. R. Martin", "C) John Green", "D) Nicolau Maquiavel"],
    correct: 0
  },
  {
    question: "Qual o nome das duas famílias rivais em Romeu e Julieta?",
    options: ["A) Montéquio e Capuleto", "B) Família do Príncipe de Verona e Capuleto", "C) Montéquio e Família do Conde Paris", "D) Família do Conde Paris e Capuleto"],
    correct: 0
  },
  {
    question: "Como Romeu e Julieta se conhecem?",
    options: ["A) Durante uma execução em praça pública", "B) Durante um baile na casa dos Capuleto", "C) Durante uma reunião da Família Montéquio", "D) Durante um golpe de Estado"],
    correct: 1
  },
  {
    question: "Que decisão trágica os protagonistas tomam no final de Romeu e Julieta?",
    options: ["A) Romeu mata Julieta", "B) Ambos são assassinados", "C) Ambos cometem suicídio", "D) Julieta comete suicídio"],
    correct: 2
  },
  {
    question: "Em que cidade se passa a maior parte da história de Romeu e Julieta?",
    options: ["A) Em Vicenza", "B) Em Verona", "C) Em Lago di Garda", "D) Em Veneza"],
    correct: 1
  },
  {
    question: "Quem é o autor de Sherlock Holmes?",
    options: ["A) William Shakespeare", "B) John Green", "C) Arthur Conan Doyle", "D) Dante Alighieri"],
    correct: 2
  },
  {
    question: "Qual é a profissão de Sherlock Holmes?",
    options: ["A) Detetive consultor", "B) Assassino de aluguel", "C) Policial florence", "D) Historiador"],
    correct: 0
  },
  {
    question: "Quem é o fiel companheiro e narrador das histórias de Sherlock Holmes?",
    options: ["A) Dr. John H. Watson", "B) Tobias Gregson", "C) Stanford", "D) Irene Adler"],
    correct: 0
  },
  {
    question: "Em que cidade Sherlock Holmes vive?",
    options: ["A) Luton", "B) Windsor", "C) Londres", "D) Oxford"],
    correct: 2
  },
  {
    question: "Qual é o nome do arqui-inimigo de Sherlock Holmes?",
    options: ["A) Tobias Gregson", "B) Inspetor Lestrade", "C) Mary Morstan", "D) Professor James Moriarty"],
    correct: 3
  },
  {
    question: "Quem é o autor do livro O Príncipe?",
    options: ["A) Dante Alighieri", "B) Arthur Conan Doyle", "C) Nicolau Maquiavel", "D) George R. R. Martin"],
    correct: 2
  },
  {
    question: "A obra 'O Príncipe' é dirigida a qual tipo de leitor?",
    options: ["A) Aos governantes e aspirantes ao poder", "B) Aos religiosos", "C) Aos estudiosos", "D) Aos que creem em magia"],
    correct: 0
  },
  {
    question: "Que conceito político é mais associado a Maquiavel no livro O Príncipe?",
    options: ["A) Anarquismo político", "B) Liberalismo econômico", "C) Democracia direta", "D) Realismo político"],
    correct: 3
  },
  {
    question: "Qual a visão do autor sobre manter o poder no livro O Príncipe?",
    options: ["A) Defende que o governante deve usar todos os meios necessários, éticos ou não", "B) O governante deve sempre agir com bondade e seguir a Igreja", "C) O poder deve ser compartilhado igualmente entre todos os cidadãos", "D) Manter o poder depende exclusivamente da sorte e da vontade divina"],
    correct: 0
  },
  {
    question: "Por que “O Príncipe” é considerado polêmico?",
    options: ["A) Porque incentiva a participação popular direta nas decisões políticas", "B) Porque defende que a religião deve ser a base principal do governo", "C) Porque rompe com a tradição moralista da política da época", "D) Porque propõe um modelo de governo baseado no comunismo"],
    correct: 2
  },
  {
    question: "Quem é o autor do livro A Metamorfose?",
    options: ["A) Franz Kafka", "B) Dante Alighieri", "C) Matt Haig", "D) Nicolau Maquiavel"],
    correct: 0
  },
  {
    question: "O que acontece com Gregor Samsa no início do livro A Metamorfose?",
    options: ["A) Acorda transformado em um inseto gigante", "B) Ele ganha superpoderes para salvar sua família", "C) Acorda transformado em um pássaro", "D) Ele recebe uma grande herança que muda sua vida"],
    correct: 0
  },
  {
    question: "Como a família reage à transformação de Gregor em A Metamorfose?",
    options: ["A) Celebraram a transformação como um milagre", "B) O levaram para um tratamento médico imediato e o ajudaram", "C) Ficaram chocados e o rejeitaram, isolando-o", "D) Ignoraram completamente a situação agindo como se nada tivesse acontecido"],
    correct: 2
  },
  {
    question: "Qual é o clima predominante da narrativa do livro A Metamorfose?",
    options: ["A) Aventura e mistério", "B) Angústia, opressão e alienação", "C) Alegria e celebração familiar", "D) Romance e esperança"],
    correct: 1
  },
  {
    question: "Que metáforas podem ser associadas ao livro A Metamorfose?",
    options: ["A) Ascensão ao poder político", "B) A descoberta de um tesouro escondido", "C) Uma transformação física que traz felicidade e sucesso", "D) Alienação social, perda de identidade e rejeição ao diferente"],
    correct: 3
  },
  {
    question: "Quem é o autor de A Divina Comédia?",
    options: ["A) Franz Kafka", "B) William Shakespeare", "C) Dante Alighieri", "D) Nicolau Maquiavel"],
    correct: 2
  },
  {
    question: "Quais são as três partes que compõem a obra A Divina Comédia?",
    options: ["A) Inferno, Purgatório e Paraíso", "B) Vida, Morte e Ressurreição", "C) Luz, Trevas e Esperança", "D) Céu, Terra e Inferno"],
    correct: 0
  },
  {
    question: "Quem guia Dante pelo Inferno em A Divina Comédia?",
    options: ["A) Ulisses", "B) Virgílio", "C) Caronte", "D) São Pedro"],
    correct: 1
  },
  {
    question: "Qual o significado simbólico da jornada em A Divina Comédia?",
    options: ["A) Viagem da alma humana em direção à redenção e à salvação", "B) A busca pelo poder político e fama na Itália medieval", "C) Um relato histórico das guerras entre Florença e Roma", "D) Uma aventura para descobrir tesouros escondidos"],
    correct: 0
  },
  {
    question: "Qual é o papel de Beatriz na narrativa de A Divina Comédia?",
    options: ["A) É a irmã de Dante que o ajuda a escapar do Inferno", "B) É uma personagem mítica que guia Dante pelo Purgatório", "C) Representa a justiça divina e julga as almas condenadas", "D) Beatriz representa a inspiração divina e o amor espiritual"],
    correct: 3
  }
];// Array das questões

// Função para embaralhar
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

//função para gerar o cupom
function gerarCupom() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let codigo = '';
  for (let i = 0; i < 10; i++) {
    const randIndex = Math.floor(Math.random() * letras.length);
    codigo += letras[randIndex];
  }

  const desconto = Math.min(score * 5, 50); // Usa a variável global score
  const cupom = codigo+desconto ;

  return cupom;
}

let questoesEmbaralhadas = shuffleArray(questions).slice(0, 10);

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quizContainer');
const questionText = document.getElementById('questionText');
const questionCount = document.getElementById('questionCount');
const optionsContainer = document.getElementById('optionsContainer');
const nextButton = document.getElementById('nextButton');
const result = document.getElementById('result');
const restartButton = document.getElementById('restartButton');
const cuponButton = document.getElementById('cuponButton')
const cuponTxt = document.getElementById('txtCupom')
const quizTitle = document.getElementById('quizTitle');

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  quizContainer.classList.remove('hidden');
  quizTitle.textContent = "Quiz Geral"; // título fixo, pois não tem seleção
  result.innerHTML = "";
  restartButton.classList.add('hidden');
  nextButton.classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  const q = questoesEmbaralhadas[currentQuestion];
  questionText.textContent = q.question;
  questionCount.textContent = `Questão ${currentQuestion + 1} de ${questoesEmbaralhadas.length}`;
  optionsContainer.innerHTML = "";
  nextButton.disabled = true;

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, index);
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(button, selectedIndex) {
  const q = questoesEmbaralhadas[currentQuestion];
  const buttons = document.querySelectorAll('.option');
  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === q.correct) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('incorrect');
    buttons[q.correct].classList.add('correct');
  }

  nextButton.disabled = false;
}

nextButton.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questoesEmbaralhadas.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

restartButton.onclick = () => {
  startQuiz();
};
cuponButton.onclick = () => {
  cuponTxt.innerHTML = `O seu código de cupom é: <strong>${gerarCupom()} </strong>`;
  cuponTxt.classList.remove('hidden')
}


function showResult() {
  questionText.textContent = "Você completou o quiz!";
  questionCount.textContent = "";
  optionsContainer.innerHTML = "";
  nextButton.classList.add('hidden');
  result.innerHTML = `✅ Você acertou <strong>${score}</strong> de <strong>${questoesEmbaralhadas.length}</strong> perguntas.`;
  cuponButton.classList.remove('hidden');
  restartButton.classList.remove('hidden');
}

// Inicia o quiz automaticamente ao carregar a página
//startQuiz();//
