const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const lowerCountElement = document.getElementById("hk");

const btnUpper = document.getElementById("huruf-besar");
const btnLower = document.getElementById("huruf-kecil");

const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");
const buttonSepiaElement = document.getElementById("tombol-sepia");

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

buttonLightElement.addEventListener("click", (event) => {
    document.documentElement.classList.remove("dark-mode");
});

buttonDarkElement.addEventListener("click", (event) => {
    document.documentElement.classList.add("dark-mode");
});

function setMode(mode) {
    document.documentElement.classList.remove("dark-mode", "light-mode", "sepia-mode");
    document.documentElement.classList.add(mode);
}

buttonLightElement.addEventListener("click", () => {
    setMode("light-mode");
});

buttonDarkElement.addEventListener("click", () => {
    setMode("dark-mode");
});

buttonSepiaElement.addEventListener("click", () => {
    setMode("sepia-mode");
});