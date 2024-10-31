const display = document.getElementById("display");
const themeIcon = document.getElementById("themeIcon");
let isDarkMode = false;

function appendValue(value) {
    display.value += value;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function appendFunction(func) {
    switch (func) {
        case 'sin':
            display.value += "Math.sin(";
            break;
        case 'cos':
            display.value += "Math.cos(";
            break;
        case 'tan':
            display.value += "Math.tan(";
            break;
        case 'sqrt':
            display.value += "Math.sqrt(";
            break;
        case 'pi':
            display.value += Math.PI;
            break;
    }
}

themeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    isDarkMode = !isDarkMode;
    themeIcon.src = isDarkMode ? "moon-removebg-preview.png" : "sun.png";
    document.body.style.backgroundColor = isDarkMode ? "#333" : "#f1f2f3";
});
