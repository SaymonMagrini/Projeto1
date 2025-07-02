function runComponentTests() {
    testar("COMPONENT - Container quiz-wrapper deve estar presente", () => {
        const quiz = document.getElementById("quiz");
        if (!quiz) throw new Error("Container do quiz não encontrado");
    });

    testar("COMPONENT - Número da pergunta deve estar visível e correto", () => {
        const questionNumber = document.getElementById("questionNumber");
        if (!questionNumber) throw new Error("Elemento questionNumber não encontrado");
        if (!questionNumber.textContent.match(/Pergunta \d+ \/ \d+/))
            throw new Error("Texto do número da pergunta inválido");
    });

    testar("COMPONENT - Texto da pergunta deve estar presente", () => {
        const questionText = document.getElementById("questionText");
        if (!questionText) throw new Error("Elemento questionText não encontrado");
        if (questionText.textContent.trim() === "") throw new Error("Texto da pergunta está vazio");
    });

    testar("COMPONENT - Deve haver 3 botões de opção com data-option correto", () => {
        const options = document.querySelectorAll("#options .option-btn");
        if (options.length !== 3) throw new Error("Deve haver 3 botões de opção");

        const dataOptions = Array.from(options).map(btn => btn.getAttribute("data-option"));
        const esperados = ["A", "B", "C"];
        esperados.forEach(op => {
            if (!dataOptions.includes(op)) throw new Error(`Botão com data-option="${op}" não encontrado`);
        });
    });

    testar("COMPONENT - Botões de opção aceitam receber valor e podem ser clicados", () => {
        const options = document.querySelectorAll("#options .option-btn");
        let clicked = false;

        options.forEach(btn => {
            btn.addEventListener("click", () => clicked = true);
            btn.click();
            if (!clicked) throw new Error("Evento de clique no botão de opção não disparou");
            clicked = false; // reset pra próximo botão
        });
    });

    testar("COMPONENT - Botão Confirmar inicia desabilitado", () => {
        const actionButton = document.getElementById("actionButton");
        if (!actionButton) throw new Error("Botão Confirmar não encontrado");
        if (!actionButton.disabled) throw new Error("Botão Confirmar deveria iniciar desabilitado");
    });

    testar("COMPONENT - Feedback inicia vazio", () => {
        const feedback = document.getElementById("feedback");
        if (!feedback) throw new Error("Elemento feedback não encontrado");
        if (feedback.textContent.trim() !== "") throw new Error("Feedback deveria iniciar vazio");
    });
}