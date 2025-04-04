function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = noemailinput;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

function numberGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess;

    while (guess !== secretNumber) {
        guess = parseInt(prompt('Guess a number between 1 and 100:'));
        attempts++;

        if (guess < secretNumber) {
            alert('Too low! Try again.');
        } else if (guess > secretNumber) {
            alert('Too high! Try again.');
        } else {
            alert(`Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`);
        }
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
    }
});

window.onload = function() {
    numberGuessingGame();
};
