const processGuess = () => {
    window.num_guesses = window.num_guesses + 1;
    document.getElementById('num-guesses').innerText = 'number of guesses: ' + window.num_guesses;
    //Get the guess
    let user_guess = parseInt(document.getElementById('guess-num').value.trim())
    if (user_guess == window.correct_answer) {
        document.getElementById('message-display').innerText = 'CORRECT, YOU WIN!'
    }
    else if (user_guess > window.correct_answer) {
        document.getElementById('message-display').innerText = 'Your guess is too high! Guess again!'
    }
    else if (user_guess < window.correct_answer) {
        document.getElementById('message-display').innerText = 'Your guess is too low! Guess again!'
    }
}

const setInitialScore = () => {
    let scoreDisplay = document.getElementById('score-display')
    scoreDisplay.innerText = 'Guess a number between 1 and 100';
    document.getElementById('guess-num').value = ''
    window.correct_answer = Math.floor(Math.random() * 100) + 1;
    console.log('CORRECT ANSWER IS:' + window.correct_answer);
    window.num_guesses = 0;
}

const checkNum = () => {
    let enteredValue = document.getElementById("guess-num");
    console.log('USER GUESS:')
    console.log(enteredValue.value)
    try {
        if (enteredValue.value.trim() <= 100 && enteredValue.value.trim() >= 1) {
            inputBtn = document.getElementById("guess-btn");
            inputBtn.disabled = false;
        }
        else {
            console.log('BAD NUMBER')
            console.log("Now we need to figure out what the value is that I got here:")
            document.getElementById("guess-btn").disabled = true;
        }
    } catch {
        console.log("SOMETHING CRASHED")
    }
}



let correct_answer;
let num_guesses = 0;

window.onload = function () {
    setInitialScore()
    checkNum()
}