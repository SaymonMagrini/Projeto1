function runComponentTests() {
    console.log("Iniciando testes de componentes...");

    let passed = 0;
    let failed = 0;

    function assertElementExists(selector, description) {
        const element = document.querySelector(selector);
        if (element) {
            console.log(`✅ ${description}`);
            passed++;
        } else {
            console.error(`❌ ${description} - Elemento '${selector}' não encontrado`);
            failed++;
        }
    }

    function assertElementText(selector, expectedText, description) {
        const element = document.querySelector(selector);
        if (element && element.textContent.includes(expectedText)) {
            console.log(`✅ ${description}`);
            passed++;
        } else {
            console.error(`❌ ${description} - Esperado texto "${expectedText}" em '${selector}'`);
            failed++;
        }
    }

    // Testes de componentes
    assertElementExists(".app", "Container principal .app existe");
    assertElementExists("#quizContainer", "Container do quiz existe");
    assertElementExists("#questionText", "Texto da pergunta está presente");
    assertElementExists("#optionsContainer", "Container de opções existe");
    assertElementExists("#nextButton", "Botão de próxima pergunta existe");
    assertElementExists("#restartButton", "Botão de reinício do quiz existe");

    assertElementText("h1", "Quiz SEBO", "Título principal contém 'Quiz SEBO'");

    console.log(`Testes de componentes concluídos. ✅ ${passed}, ❌ ${failed}`);
}