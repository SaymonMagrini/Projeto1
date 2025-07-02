let selectedOption = null;

function selectOption(option) {
    selectedOption = option;
    const btnConfirm = document.getElementById("actionButton");
    btnConfirm.disabled = false;
}

function confirmAnswer() {
    if (!selectedOption) throw new Error("Nenhuma opção selecionada");
    const feedback = document.getElementById("feedback");

    feedback.textContent = `Você escolheu a opção ${selectedOption}`;
}

function resetQuestion() {
    selectedOption = null;
    const btnConfirm = document.getElementById("actionButton");
    btnConfirm.disabled = true;
    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}

function runUnitTests() {
    testar("UNIT - selectOption deve setar opção e habilitar botão Confirmar", () => {
        const btnConfirm = document.getElementById("actionButton");
        btnConfirm.disabled = true;
        selectOption("B");
        if (selectedOption !== "B") throw new Error("Opção selecionada incorreta");
        if (btnConfirm.disabled) throw new Error("Botão Confirmar não foi habilitado");
    });

    testar("UNIT - confirmAnswer deve atualizar feedback com opção selecionada", () => {
        const feedback = document.getElementById("feedback");
        feedback.textContent = "";
        selectedOption = "C";
        confirmAnswer();
        if (!feedback.textContent.includes("C")) throw new Error("Feedback não atualizado corretamente");
    });

    testar("UNIT - confirmAnswer lança erro se nenhuma opção selecionada", () => {
        selectedOption = null;
        let erroFoiLancado = false;
        try {
            confirmAnswer();
        } catch (e) {
            erroFoiLancado = true;
        }
        if (!erroFoiLancado) throw new Error("Erro esperado não foi lançado");
    });

    testar("UNIT - resetQuestion deve limpar seleção, desabilitar botão e limpar feedback", () => {
        selectedOption = "A";
        const btnConfirm = document.getElementById("actionButton");
        btnConfirm.disabled = false;
        const feedback = document.getElementById("feedback");
        feedback.textContent = "Mensagem";

        resetQuestion();

        if (selectedOption !== null) throw new Error("selectedOption não foi resetado");
        if (!btnConfirm.disabled) throw new Error("Botão Confirmar não foi desabilitado");
        if (feedback.textContent !== "") throw new Error("Feedback não foi limpo");
    });
}