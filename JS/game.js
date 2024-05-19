const pertanyaan = [
    { question: "Water boils at 100 degrees Celsius.", answer: true },
    { question: "Sound travels faster in air than in water.", answer: false },
    { question: "The capital of France is Paris.", answer: true },
    { question: "Light travels faster than sound.", answer: true },
    { question: "Sharks are mammals.", answer: false },
    { question: "Mount Everest is the tallest mountain in the world.", answer: true },
    { question: "The human body has four lungs.", answer: false },
    { question: "Mice live for up to 10 years.", answer: false },
    { question: "The Great Wall of China is visible from space.", answer: false },
    { question: "Octopuses have three hearts.", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 40;
let timerId;

const questionElement = document.getElementById('question');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const trueButton = document.getElementById('trueButton');
const falseButton = document.getElementById('falseButton');
const startButton = document.getElementById('startButton');
const button_two = document.querySelectorAll('.game1-button-answer');
const song_game = document.querySelector('.song-game')
const back_game_again = document.querySelector('.back-game-2')

function shuffleQuestions() {
    for (let i = pertanyaan.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pertanyaan[i], pertanyaan[j]] = [pertanyaan[j], pertanyaan[i]];
    }
}

function displayQuestion() {
    questionElement.textContent = pertanyaan[currentQuestionIndex].question;
}

function startTimer() {
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else {
            endGame();
        }
    }, 1000);
}

function checkAnswer(givenAnswer) {
    if (givenAnswer === pertanyaan[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < pertanyaan.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

trueButton.addEventListener('click', () => checkAnswer(true));
falseButton.addEventListener('click', () => checkAnswer(false));

function endGame() {
    clearInterval(timerId);
    questionElement.textContent = "Kamu Berhasil Menjawab " + score;
    scoreElement.textContent = `${score}`;
    trueButton.disabled = true;
    falseButton.disabled = true;
    startButton.disabled = false;
    button_two.forEach(element => {
        element.style.opacity = 0;
    })
    currentQuestionIndex = 0;
    timeLeft = 41;
    score = 0;

    song_game.pause()
    song_game.currentTime = 0;
}

function startGame() {
    shuffleQuestions();
    displayQuestion();
    scoreElement.textContent = `-`;
    startTimer();
    trueButton.disabled = false;
    falseButton.disabled = false;
    startButton.disabled = true;
    button_two.forEach(element => {
        element.style.opacity = 1;
    })
    song_game.play()
}

startButton.addEventListener('click', startGame);

back_game_again.addEventListener('click', endGame);











