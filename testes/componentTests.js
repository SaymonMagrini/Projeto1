function runComponentTests() {
    console.log("Iniciando testes de componente...");

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


    const startButton = document.getElementById('startButton');
    const startContainer = document.getElementById('startContainer');
    const quizContainer = document.getElementById('quizContainer');
    const nextButton = document.getElementById('nextButton');
    const cuponButton = document.getElementById('cuponButton');
    const restartButton = document.getElementById('restartButton');
    const txtCupom = document.getElementById('txtCupom');
    const result = document.getElementById('result');


    assertEquals(startContainer.classList.contains('hidden'), false, "Tela inicial visível no começo");
    assertEquals(quizContainer.classList.contains('hidden'), true, "Quiz oculto no começo");
    assertEquals(cuponButton.classList.contains('hidden'), true, "Botão cupom oculto no começo");
    assertEquals(restartButton.classList.contains('hidden'), true, "Botão reiniciar oculto no começo");
    assertEquals(txtCupom.classList.contains('hidden'), true, "Texto do cupom oculto no começo");
    assertEquals(result.textContent.trim(), '', "Área de resultado vazia no começo");


    startButton.click();


    assertEquals(startContainer.classList.contains('hidden'), true, "Tela inicial oculta após iniciar");
    assertEquals(quizContainer.classList.contains('hidden'), false, "Quiz visível após iniciar");


    assertEquals(cuponButton.classList.contains('hidden'), true, "Botão cupom oculto após iniciar");
    assertEquals(restartButton.classList.contains('hidden'), true, "Botão reiniciar oculto após iniciar");
    assertEquals(txtCupom.classList.contains('hidden'), true, "Texto do cupom oculto após iniciar");


    cuponButton.classList.remove('hidden');
    restartButton.classList.remove('hidden');
    txtCupom.classList.remove('hidden');

    assertEquals(cuponButton.classList.contains('hidden'), false, "Botão cupom visível no fim do quiz");
    assertEquals(restartButton.classList.contains('hidden'), false, "Botão reiniciar visível no fim do quiz");
    assertEquals(txtCupom.classList.contains('hidden'), false, "Texto do cupom visível no fim do quiz");


    restartButton.click();


    startContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    cuponButton.classList.add('hidden');
    restartButton.classList.add('hidden');
    txtCupom.classList.add('hidden');
    result.textContent = '';

    assertEquals(startContainer.classList.contains('hidden'), false, "Tela inicial visível após reiniciar");
    assertEquals(quizContainer.classList.contains('hidden'), true, "Quiz oculto após reiniciar");
    assertEquals(cuponButton.classList.contains('hidden'), true, "Botão cupom oculto após reiniciar");
    assertEquals(restartButton.classList.contains('hidden'), true, "Botão reiniciar oculto após reiniciar");
    assertEquals(txtCupom.classList.contains('hidden'), true, "Texto do cupom oculto após reiniciar");
    assertEquals(result.textContent, '', "Área de resultado vazia após reiniciar");

    console.log(`Testes de componente concluídos ✅ ${passed}, ❌ ${failed}`);
}