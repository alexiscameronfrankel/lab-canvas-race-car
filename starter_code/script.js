document.querySelector('#start-button').onclick = function() { //Start button is clicked 
  this.remove()  //removes start button
  startGame() //calls startGame
  startLines() //calls startLines
  startObstacles()//starts the obstacles
}

document.onclick = function(e){ //
  console.log(e.x, e.y)
}


const canvas = document.querySelector('#canvas'); //Get the canvas
var img = new Image(); //load an image element

canvas.width = window.innerWidth/1.5; //Set canvas width and height
canvas.height = 500

const ctx = canvas.getContext('2d'); //Get the context 



function startGame(){  
  console.log("START") 
  img.onload = function() {  //Load the car for the first time 
     ctx.drawImage(img, car.x, car.y, car.width, car.height); 
  }
  img.src = "./images/car.png";

  window.requestAnimationFrame(animate) //Starts the animation infinite loop
}


function drawBoard() {
  ctx.fillStyle = 'green'
  ctx.fillRect(0,0,canvas.width, canvas.height) //draws the green grass 
  ctx.fillStyle = 'grey'
  ctx.fillRect(100,0,canvas.width-200, canvas.height) //draws the road 
  //lines on the road 

  // drawing a rectangle 1 on right side
  ctx.fillStyle="white";
ctx.fillRect(110, 0, 10, 500);
// drawing a rectangle 2 on left side 
ctx.fillStyle="white";
ctx.fillRect(canvas.width-120, 0, 10, 500);
//rectangles down the middle of the road 


}


function drawLine(){
 lines.forEach(line => {
    ctx.fillStyle = 'white';
    ctx.fillRect(line.x, line.y++, line.width, line.height); 
     //increment each line in the line array 
  })

}

let lines = [] //this should be all our lines 
console.log(lines);
function startLines() {
setInterval(()=> {
let line = { //we create our line here 
    x:canvas.width/2-5, 
    y: 0, 
    width:10, 
    height:20
  }
  lines.push(line) // we add this line to our array
},700) }


let car = {  //Car object - also can be converted to a Class 
  x:canvas.width/2-25,
  y:canvas.height/2 +25,
  width: 50,
  height: 80
}

function drawCar() {
  ctx.drawImage(img, car.x, car.y, car.width, car.height); //draws the car depending on the coords in the obj above 
}

document.onkeydown = function(e) { //controls -- up down left and right ... 
  switch (e.keyCode) { //changes the car object 
    // case 38: car.y-=10;    console.log('up',  ); break;
    // case 40: car.y+=10;  console.log('down',); break;
    case 37: car.x-=10;  console.log('left',); 
    break;
    case 39: car.x+=10; console.log('right'); break;
  }
  
}

function isOffRoad(){
  console.log(car)
  if(car.x < 0){
    car.x = 0;
  }
  if(car.x > canvas.width - car.width){
    car.x = canvas.width - car.width
  }
}


let i = 0;


let obstacles = [];
function drawObstacle() {
  obstacles.forEach(obstacle => {
    ctx.fillStyle = 'red'
    ctx.fillRect(obstacle.x,obstacle.y++,obstacle.width,obstacle.height)
  })
}

function startObstacles(){
  setInterval(function(){
    let obs = {
      x:Math.random()*canvas.width,
      y:-10,
      width:Math.random()*300+50,
      height:40
    }
    obstacles.push(obs)
  }, 3000)
}

if ( obstacle.x <= car.x + car.sizeX &&
     obstacle.posX + obstacle.sizeX >= collider.posX &&
     obstacle.posY <= collider.posY + collider.sizeY &&
     obstacle.posY + obstacle.sizeY >= collider.posY )

function animate(){ //WHERE ALL THE MAGIC HAPPENS
  let loop = window.requestAnimationFrame(animate) //continues the loop
  
  ctx.clearRect(0,0,canvas.width, canvas.height) //clears the whole canvas, the car, the board everything in the canvas
  
  drawBoard()  //redraws the board over and over and over again
  drawLine()  //redraws the line
  drawCar()   //redraws the car over and over and over again
  drawObstacle()
  isOffRoad()
  

}

function checkCollision() {
  obstacles.forEach
}
