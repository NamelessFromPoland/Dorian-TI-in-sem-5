document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const resultBox = document.getElementById("resultBox");
    const generatedCodeInput = document.getElementById("generatedCode");
    const copyBtn = document.getElementById("copyBtn");
    const copyFeedback = document.getElementById("copyFeedback");
    const form = document.getElementById("groupSelectionForm");

    generateBtn.addEventListener("click", () => {
        const formData = new FormData(form);
        let selectionParts = [];
        
        // Zbieramy każdy wybór w czytelny format np. "Sieci Komputerowe_Laboratorium:3"
        for (let [key, value] of formData.entries()) {
            selectionParts.push(`${key}:${value}`);
        }

        // Łączymy całość w czytelny kod rozdzielony ukośnikami (bez prefiksu planu)
        const finalCode = selectionParts.join("/");

        generatedCodeInput.value = finalCode;
        resultBox.style.display = "block";
        copyFeedback.textContent = "";
    });

    copyBtn.addEventListener("click", () => {
        if (!generatedCodeInput.value) return;

        navigator.clipboard.writeText(generatedCodeInput.value)
            .then(() => {
                copyFeedback.textContent = "Skopiowano do schowka!";
                setTimeout(() => {
                    copyFeedback.textContent = "";
                }, 3000);
            })
            .catch((err) => {
                console.error("Błąd kopiowania: ", err);
            });
    });
});
