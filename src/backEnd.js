    const questions = [
      {
        question: "Qual é a capital do Brasil?",
        options: {
          a: "São Paulo",
          b: "Rio de Janeiro",
          c: "Brasília",
          d: "Salvador"
        },
        correct: "c"
      },
      {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: {
          a: "Machado de Assis",
          b: "José de Alencar",
          c: "Clarice Lispector",
          d: "Monteiro Lobato"
        },
        correct: "a"
      },
      {
        question: "Quanto é 7 x 8?",
        options: {
          a: "54",
          b: "56",
          c: "64",
          d: "58"
        },
        correct: "b"
      },
      {
        question: "Qual o maior planeta do sistema solar?",
        options: {
          a: "Terra",
          b: "Saturno",
          c: "Júpiter",
          d: "Marte"
        },
        correct: "c"
      },
      {
        question: "Quem pintou a Mona Lisa?",
        options: {
          a: "Michelangelo",
          b: "Leonardo da Vinci",
          c: "Pablo Picasso",
          d: "Vincent Van Gogh"
        },
        correct: "b"
      }
    ];

    let currentQuestion = 0;
    let selectedOption = '';
    const questionNumberEl = document.getElementById('questionNumber');
    const questionTextEl = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackEl = document.getElementById('feedback');
    const actionButton = document.getElementById('actionButton');

    function loadQuestion() {
      const q = questions[currentQuestion];
      questionNumberEl.textContent = `Pergunta ${currentQuestion + 1} / ${questions.length}`;
      questionTextEl.textContent = q.question;

      optionsContainer.innerHTML = '';
      feedbackEl.textContent = '';
      actionButton.disabled = true;
      selectedOption = '';

      for (const key in q.options) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.option = key;
        optionDiv.textContent = `${key.toUpperCase()}: ${q.options[key]}`;

        optionDiv.addEventListener('click', () => {
          document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
          optionDiv.classList.add('selected');
          selectedOption = key;
          actionButton.disabled = false;
        });

        optionsContainer.appendChild(optionDiv);
      }
    }

    function checkAnswer() {
      const q = questions[currentQuestion];

      const correctOption = q.correct;
      const allOptions = document.querySelectorAll('.option');

      allOptions.forEach(opt => {
        if (opt.dataset.option === correctOption) {
          opt.classList.add('correct');
        } else if (opt.dataset.option === selectedOption) {
          opt.classList.add('incorrect');
        }
        opt.classList.remove('selected');
      });

      if (selectedOption === correctOption) {
        feedbackEl.textContent = '✔️ Resposta correta!';
        feedbackEl.className = 'feedback correct';
      } else {
        feedbackEl.textContent = `❌ Errado! Resposta correta: ${correctOption.toUpperCase()}`;
        feedbackEl.className = 'feedback incorrect';
      }

      actionButton.textContent = currentQuestion < questions.length - 1 ? 'Próxima' : 'Finalizar';
      actionButton.onclick = nextQuestion;
    }

    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
        actionButton.textContent = 'Confirmar';
        actionButton.onclick = checkAnswer;
      } else {
        showResult();
      }
    }

    function showResult() {
      document.getElementById('quiz').innerHTML = `
        <div class="result">
          <h2>Quiz Finalizado!</h2>
          <p>Você concluiu ${questions.length} perguntas.</p>
          <button onclick="restartQuiz()">Reiniciar</button>
        </div>
      `;
    }

    function restartQuiz() {
      currentQuestion = 0;
      document.getElementById('quiz').innerHTML = `
        <div class="question-number" id="questionNumber"></div>
        <h1 class="question" id="questionText">Carregando...</h1>
        <div class="options" id="optionsContainer"></div>
        <div class="feedback" id="feedback"></div>
        <button id="actionButton" disabled>Confirmar</button>
      `;
      // Referenciar novamente os elementos
      questionNumberEl = document.getElementById('questionNumber');
      questionTextEl = document.getElementById('questionText');
      optionsContainer = document.getElementById('optionsContainer');
      feedbackEl = document.getElementById('feedback');
      actionButton = document.getElementById('actionButton');

      loadQuestion();
      actionButton.onclick = checkAnswer;
    }

    // Inicializar
    loadQuestion();
    actionButton.onclick = checkAnswer;