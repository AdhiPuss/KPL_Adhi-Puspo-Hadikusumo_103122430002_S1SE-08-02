const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const lowerCountElement = document.getElementById("hk");

const btnUpper = document.getElementById("huruf-besar");
const btnLower = document.getElementById("huruf-kecil");

editorElement.addEventListener("input", (event) => {
    const text = event.target.value;
    
    const allLetters = text.match(/[a-zA-Z]/g) || [];
    charCountElement.textContent = allLetters.length;
    
    const lowerChars = text.match(/[a-z]/g) || [];
    lowerCountElement.textContent = lowerChars.length;

    const upperChars = text.match(/[A-Z]/g) || [];
    document.getElementById("hb").textContent = upperChars.length;
});

btnUpper.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    
    editorElement.dispatchEvent(new Event('input'));
});

btnLower.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    
    editorElement.dispatchEvent(new Event('input'));
});