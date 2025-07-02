function runUnitTests() {
    console.log("Iniciando testes unitários...");

    let passed = 0;
    let failed = 0;

    function assertEquals(actual, expected, testName) {
        if (actual === expected) {
            console.log(`✅ ${testName}`);
            passed++;
        } else {
            console.error(`❌ ${testName} - Esperado: ${expected}, Recebido: ${actual}`);
            failed++;
        }
    }

    function isCorrectAnswer(selected, correct) {
        return selected === correct;
    }

    function getNextQuestionIndex(currentIndex, totalQuestions) {
        return currentIndex + 1 < totalQuestions ? currentIndex + 1 : -1;
    }

    function calculateScore(currentScore, isCorrect) {
        return isCorrect ? currentScore + 1 : currentScore;
    }

    function restartQuizState() {
        return {
            currentQuestion: 0,
            score: 0,
            finished: false
        };
    }

    function isQuizFinished(currentIndex, totalQuestions) {
        return currentIndex >= totalQuestions;
    }

    // ====== Execução dos Testes ======

    assertEquals(isCorrectAnswer("A", "A"), true, "Resposta correta retorna true");
    assertEquals(isCorrectAnswer("B", "A"), false, "Resposta incorreta retorna false");

    assertEquals(getNextQuestionIndex(0, 5), 1, "Próxima pergunta está correta");
    assertEquals(getNextQuestionIndex(4, 5), -1, "Fim das perguntas retorna -1");

    assertEquals(calculateScore(0, true), 1, "Acertou: adiciona 1 ponto");
    assertEquals(calculateScore(1, false), 1, "Errou: mantém pontuação");

    const reset = restartQuizState();
    assertEquals(reset.currentQuestion, 0, "Reinício: pergunta = 0");
    assertEquals(reset.score, 0, "Reinício: pontuação = 0");
    assertEquals(reset.finished, false, "Reinício: finished = false");

    // Teste 5: Fim do quiz
    assertEquals(isQuizFinished(5, 5), true, "Quiz finalizado quando índice = total");
    assertEquals(isQuizFinished(4, 5), false, "Quiz não finalizado antes do fim");

    console.log(`Testes unitários concluídos. ✅ ${passed}, ❌ ${failed}`);
}