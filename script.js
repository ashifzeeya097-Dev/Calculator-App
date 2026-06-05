const display = document.getElementById("display");

function calculate() {
    if (display.value.trim() === '') {
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}