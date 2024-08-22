document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('button'));

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const value = event.target.innerText;

            switch(value) {
                case '=':
                    try {
                        // Evaluate the current input
                        currentInput = eval(currentInput);
                        display.value = currentInput;
                    } catch (error) {
                        display.value = 'Error';
                    }
                    break;

                case 'C':
                    // Clear the display
                    currentInput = "";
                    display.value = currentInput;
                    break;

                case 'DEL':
                    // Remove the last character
                    currentInput = currentInput.slice(0, -1);
                    display.value = currentInput;
                    break;

                default:
                    // Append the clicked value to the input
                    currentInput += value;
                    display.value = currentInput;
                    break;
            }
        });
    });
});

