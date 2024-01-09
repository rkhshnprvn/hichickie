let currChickTile;
let currFoodTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i ++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setChick, 1000);
    setInterval(setFood, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setChick() {

    if (gameOver) {
        return;
    }

    if(currChickTile) {
        currChickTile.innerHTML = "";
    }

    let chick =  document.createElement("img");
    chick.src = "./images/avatars/chic avatar 1.png";

    let num = getRandomTile();
    if(currFoodTile && currFoodTile.id == num) {
        return;
    }
    currChickTile = document.getElementById(num);
    currChickTile.appendChild(chick);
}

function setFood() {

    if (gameOver) {
        return;
    }

    if(currFoodTile) {
        currFoodTile.innerHTML = "";
    }

    let food =  document.createElement("img");
    food.src = "./images/food/roast chicken.png";

    let num = getRandomTile();
    if(currChickTile && currChickTile.id == num) {
        return;
    }
    currFoodTile = document.getElementById(num);
    currFoodTile.appendChild(food);
}

function selectTile() {

    if (gameOver) {
        return;
    }

    if(this == currChickTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currFoodTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;

        document.getElementById("resetButton").style.display = "block";
    }
}

function resetGame() {
    currChickTile = null;
    currFoodTile = null;
    score = 0;
    gameOver = false;

    clearGameBoard();

    setGame();
    document.getElementById("score").innerText = score.toString();
}

function clearGameBoard() {
    if(currChickTile) {
        currChickTile.innerHTML = "";
    }
    if(currFoodTile) {
        currFoodTile.innerHTML = "";
    }
}