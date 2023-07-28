const container= document.querySelector('.container');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const ball = document.getElementById('ball');

let ballX =290;
let ballY = 190;
let ballSpeedX = -3;
let ballSpeedY = 3;

const paddlespeed =40;
const paddleHeight =100;

const update=() =>{

ballX += ballSpeedX; 
ballY += ballSpeedY; 

if(ballY<=0 || ballY>=385)
{
  ballSpeedY = -ballSpeedY; 
}

const player1Y = parseInt(player1.style.top);
const player2Y = parseInt(player2.style.top);


if(ballX<=20 && ballY >=player2Y && ballY<= player2Y +paddleHeight)
{
  ballSpeedX = -ballSpeedX;
}
if(ballX >=550 && ballY >=player1Y && ballY <= player1Y+paddleHeight)
{
  ballSpeedX = -ballSpeedX;
  
}

if(ballX<0) 
{
  alert("red GOAL!")
  arttir('redgoal')
  ballX =290;
  ballY = 190;
  ballSpeedX = -3;
   ballSpeedY = 3;
  ballSpeedX= -ballSpeedX;
}
else if(ballX>585)
 {
  alert("blue GOAL!")
  arttir('bluegoal')
  ballX =290;
  ballY = 190;
   ballSpeedX = -3;
   ballSpeedY = 3;
  ballSpeedX= -ballSpeedX;

 } 

ball.style.left =ballX+'px';
ball.style.top= ballY+'px';
ballSpeedX += ballSpeedX/1000;
ballSpeedY += ballSpeedY/1000;

} 

const movepaddle = (paddle,direction) =>{  //okey
 const currentY = parseInt(paddle.style.top) || 0;
 const newY = currentY + (direction * paddlespeed);

  if(newY >= 0 && newY<300)
  {
    paddle.style.top = newY+'px';
  }

};

document.addEventListener('keydown',(event) =>{ //okey
 if(event.key ==='w')
 {movepaddle(player2,-1)}
 else if(event.key ==='s')
 {movepaddle(player2,1)}
 else if(event.key ==='ArrowUp')
 {movepaddle(player1,-1)}
 else if(event.key ==='ArrowDown')
 {movepaddle(player1, 1)}


})

function arttir(id) {

  var deger = parseInt(document.getElementById(id).innerText);
  deger += 1;

  document.getElementById(id).innerText = deger;
}

setInterval(update,1000/60);