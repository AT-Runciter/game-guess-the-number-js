let name = '';
let number = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit);

printMessage('Enter player name:');

input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message) {
    output.innerHTML += `<li>${message}</li>`;
}

function clearOutput() {
    output.innerHTML = '';
}

function processInput(input) {
    if (!input) return;

    if (!name) {
        name = input;
        clearOutput();
        printMessage(`${name}, there is a number between 0 and 100. Try to guess it in the fewest number of tries. After each try, I will say 'few', 'many' or 'true'`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > number) {
        printMessage('Plenty. Try again.');
    } else if (guess < number) {
        printMessage('Not enough. Try again.');
    } else {
        printMessage(`That's right, it's a number ${guess}.`);
        printMessage(`Number of attempts: ${guesses}.`);
        printMessage('GAME OVER');

        prompt.remove();
    }
}