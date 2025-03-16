// JavaScript code for personal portfolio interactivity

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

// Function to create a simple interactive puzzle
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

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        // Here you can add code to actually send the form data if needed
    }
});

// Call the number guessing game when the page loads
window.onload = function() {
    numberGuessingGame();
};