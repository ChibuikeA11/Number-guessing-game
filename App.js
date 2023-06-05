// Global variables
// Global variables
let actual_val;
let guess;
let isGameStarted;

// Function to start a new game
function startGame() {
    actual_val = Math.floor(Math.random() * 10 + 1);
    guess = 1;
    isGameStarted = true;
    document.getElementById("guessField").value = "";
}

const text_element = document.getElementById("messageContainer");
text_element.style.color = "Green"
// Function to display message
function displayMessage (message) {
    messageContainer.innerHTML = message;
}

// Function to handle the user's guess
function handleGuess() {
    if (!isGameStarted) {
        ("Please start a new game.");
        return;
    }

    const user_guess = parseInt(document.getElementById("guessField").value);

    if (isNaN(user_guess)) {
        displayMessage("Please enter a valid number.");
        return;
    }

    if (user_guess === actual_val) {
        displayMessage(`Congratulations! ${user_guess} is the correct guess. You took ${guess} attempt(s).`);
        
        
        isGameStarted = false;
        startGame();
    } else if (user_guess > actual_val) {
        guess++;
        displayMessage("Oops! Try a smaller number.");
       
    } else {
        guess++;
        displayMessage("Oops! Try a greater number.");
    }
}

// Event listener for button click
document.getElementById("submitGuess").addEventListener("click", handleGuess);

// Start a new game initially
startGame();

