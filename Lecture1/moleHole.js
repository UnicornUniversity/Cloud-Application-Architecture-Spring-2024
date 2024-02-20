let gamePoints = 0;
let timer;
const EASY_INTERVAL = 1500;
const MEDIUM_INTERVAL = 1000;
const HARD_INTERVAL = 500;
let currentInterval = MEDIUM_INTERVAL;


function getRandomInt() {
    return Math.floor(Math.random() * 2) + 1;
}

function createButtonRandomly() {
    clearButtons();
    const row = getRandomInt();
    const col = getRandomInt();
    const cellId = "cell_" + row + "_" + col;
    console.log(cellId);
    $("#" + cellId).append("<button type='button' id='dynButton' class='dynamic-button' onclick='increasePoints()'>Catch me!</button>");
}

function clearButtons() {
    $(".dynamic-button").remove();
}

function increasePoints() {
    clearButtons();
    gamePoints++;
    printScore();
}

function printScore() {
    $("#score").val(gamePoints);
}

function stopGame() {
    if (timer != null) window.clearInterval(timer);
    clearButtons();
}

function startGame() {
    stopGame();
    gamePoints = 0;
    printScore();
    timer = window.setInterval(createButtonRandomly, currentInterval);
}

function changeDifficultyLevel() {
    stopGame();
    const currentValue = parseInt($("#cbDifficulty").val());
    switch (currentValue) {
        case 0:
            currentInterval = EASY_INTERVAL;
            break;
        case 1:
            currentInterval = MEDIUM_INTERVAL;
            break;
        case 2:
            currentInterval = HARD_INTERVAL;
            break;
    }
    startGame();
}

