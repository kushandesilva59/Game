//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board ;
var context ;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var snakebody = [];

//food
var foodX;
var foodY;

var gameOver = false;

var velocityX = 0;
var velocityY = 0;


window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup",changeDirection);
    /*update();*/
    setInterval(update,300);
}

function update() {
    if(gameOver){
        return;
    }

    context.fillStyle = "black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle = "red";
    context.fillRect(foodX,foodY,blockSize,blockSize);

    if(snakeX == foodX && snakeY == foodY){
        snakebody.push([foodX,foodY]);
        placeFood();
    }

    for (let i = snakebody.length-1; i > 0; i--) {
        snakebody[i] = snakebody[i-1];
    }

    if(snakebody.length){
        snakebody[0] = [snakeX,snakeY];
    }
    
    context.fillStyle = "yellow";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX,snakeY,blockSize,blockSize);

    for (let i = 0; i < snakebody.length; i++) {
        context.fillRect(snakebody[i][0],snakebody[i][1],blockSize,blockSize);
    }

    //game over
    if(snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize){
        gameOver = true;
        alert("Game Over :-(");
    }

    for (let i = 0; i < snakebody.length; i++) {
        if(snakeX == snakebody[i][0] && snakeY == snakebody[i][1]){
            gameOver = true;
            alert("Game Over :-(");
        }
    }
}

function placeFood(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

function changeDirection(e) {
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
   else if(e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}