import { films } from '/data.js'

// Some useful elements
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn')
const messageContainer = document.getElementsByClassName('message-container')[0];
const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0];
let currentFilmIndex = -1;
let lives = 3;

// Start Game
renderGame();

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    const playerGuess = guessInput.value
    checkGuess(playerGuess)
});

// Check guess func
function checkGuess(answer) {
    const currentFilm = films[currentFilmIndex];
    guessInput.value = "";

    // Trim the player's answer to remove any extra whitespace
    const trimmedAnswer = answer.trim().toLowerCase();
    const filmAnswer = currentFilm.title.toLowerCase()
    
    // Debugging: Log the current film title and the player's answer
    console.log(`Current Film: ${filmAnswer}, Player's Answer: ${trimmedAnswer}`);
    
    // Compare the player's answer with the film title
    if (filmAnswer === trimmedAnswer) {
        messageContainer.textContent = 'Correct!';
        films.splice(currentFilmIndex, 1); // Remove the film after it's guessed
        setTimeout(renderGame, 3000);
    } else {
        // Only decrement lives if they are greater than 0
        if (lives > 1) {
            lives--;
            renderGuessesRemaining(lives);
            messageContainer.textContent = `${renderGuessesRemaining(value)}`;
        } else {
            // If lives are 1 and the guess is incorrect, set lives to 0
            lives = 0;
            messageContainer.textContent = `The film was ${filmAnswer}!`;
            films.splice(currentFilmIndex, 1); // Remove the film after it's guessed
            setTimeout(renderGame, 3000);
        }
    }
}

// Render Emoji Hints
function renderEmojis() {
    const currentFilm = films[currentFilmIndex];
    emojiCluesContainer.innerHTML = `<div class="emoji-class-container" aria-label="${currentFilm.ariaLabel}" aria-live="polite">${currentFilm.emoji.join(" ")}</div>`;
}

// Render guesses remaining
function renderGuessesRemaining(value){
    messageContainer.textContent = `${value === 3 ? "" : "Incorrect!"} You have ${value} ${value > 1 ? "guesses" : "guess"} remaining.`
}

// Render Game
function renderGame(){
    if(films.length > 0){
        lives = 3
        currentFilmIndex = Math.floor(Math.random() * films.length);
        renderEmojis()
        renderGuessesRemaining(lives)
    } else {
        messageContainer.textContent = `That's all folks!`;
        submitBtn.disabled = true // Disable the button
    }
}