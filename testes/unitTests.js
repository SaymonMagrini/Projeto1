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
        if (!selected || !correct) return false;
        return selected === correct;
    }


    function getNextQuestionIndex(currentIndex, totalQuestions) {
        if (typeof currentIndex !== "number" || typeof totalQuestions !== "number") return -1;
        return currentIndex + 1 < totalQuestions ? currentIndex + 1 : -1;
    }

    function calculateScore(currentScore, isCorrect) {
        if (typeof currentScore !== "number") currentScore = 0;
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
        if (typeof currentIndex !== "number" || typeof totalQuestions !== "number") return false;
        return currentIndex >= totalQuestions;
    }


    assertEquals(isCorrectAnswer("A", "A"), true, "Resposta correta retorna true");
    assertEquals(isCorrectAnswer("B", "A"), false, "Resposta incorreta retorna false");
    assertEquals(isCorrectAnswer("", "A"), false, "Resposta vazia retorna false");
    assertEquals(isCorrectAnswer(null, "B"), false, "Resposta null retorna false");
    assertEquals(isCorrectAnswer("C", ""), false, "Resposta correta vazia retorna false");
    assertEquals(isCorrectAnswer(undefined, "A"), false, "Resposta undefined retorna false");


    assertEquals(getNextQuestionIndex(0, 5), 1, "Próxima pergunta correta");
    assertEquals(getNextQuestionIndex(4, 5), -1, "Fim do quiz: retorna -1");
    assertEquals(getNextQuestionIndex(10, 5), -1, "Índice maior que total retorna -1");
    assertEquals(getNextQuestionIndex("2", 5), -1, "Índice inválido retorna -1");
    assertEquals(getNextQuestionIndex(2, "5"), -1, "Total inválido retorna -1");

    assertEquals(calculateScore(0, true), 1, "Acertou: soma ponto");
    assertEquals(calculateScore(2, false), 2, "Errou: mantém pontuação");
    assertEquals(calculateScore(undefined, true), 1, "Pontuação undefined trata como 0");
    assertEquals(calculateScore(null, true), 1, "Pontuação null trata como 0");

    const reset = restartQuizState();
    assertEquals(reset.currentQuestion, 0, "Reset: currentQuestion = 0");
    assertEquals(reset.score, 0, "Reset: score = 0");
    assertEquals(reset.finished, false, "Reset: finished = false");

    assertEquals(isQuizFinished(5, 5), true, "Quiz finalizado (igual)");
    assertEquals(isQuizFinished(6, 5), true, "Quiz finalizado (acima)");
    assertEquals(isQuizFinished(4, 5), false, "Quiz ainda em andamento");
    assertEquals(isQuizFinished("5", 5), false, "Input inválido retorna false");
    assertEquals(isQuizFinished(5, "5"), false, "Input inválido retorna false");

    assertEquals(calculateScore(3, true), 4, "Pontuação acumulada funciona");

    console.log(`Testes unitários concluídos ✅ ${passed}, ❌ ${failed}`);
}