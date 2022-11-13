//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board ;
var context ;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//food
var foodX;
var foodY;

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
    setInterval(update,100);
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle = "yellow";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX,snakeY,blockSize,blockSize);

    context.fillStyle = "red";
    context.fillRect(foodX,foodY,blockSize,blockSize);
}

function placeFood(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

function changeDirection(e) {
    if(e.code == "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.code == "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.code == "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    }
   else if(e.code == "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
}