
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
  const cupom = codigo + desconto;

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
    cuponTxt.classList.add('hidden')

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



function showResult() {
  gerarCupom()
  cuponTxt.innerHTML = `<strong>CUPOM: ${gerarCupom()} </strong>`;
  cuponTxt.classList.remove('hidden')
  questionText.textContent = "Você completou o quiz!";
  questionCount.textContent = "";
  optionsContainer.innerHTML = "";
  nextButton.classList.add('hidden');
  result.innerHTML = `✅ Você acertou <strong>${score}</strong> de <strong>${questoesEmbaralhadas.length}</strong> perguntas.`;
  restartButton.classList.remove('hidden');
}

// Inicia o quiz automaticamente ao carregar a página
//startQuiz();
