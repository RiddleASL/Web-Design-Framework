let canvasX = 1000
let canvasY = 1200
let rowCount = 19
let colCount = 15

let isEven = (rowCount % 2 == 0)

let rowY = canvasY / rowCount
let halfRow = rowY/2
let rows = []
let centerRow = 0

let colX = canvasX / colCount
let halfCol = colX/2
let cols = []

let player;
let xSpeed = colX/10
let ySpeed = -rowY/10

let cars = []

let testCar;

isEven == false
	? centerRow = Math.ceil(rowCount/2) - 1
	: ""



for (let index = 0; index < rowCount; index++) {
	rows.push(canvasY / rowCount * index)
}

for (let index = 0; index < colCount; index++) {
	cols.push(colX * index)
}

function setup() 
{
	createCanvas(canvasX, canvasY);
	colorMode(HSB,360,100,100,100)
	rectMode(CENTER)
	frameRate(60)
	// noStroke()

	player = new Player(canvasX/2,rows[rows.length-1]+halfRow,rowY-20);
	testCar = new Car(300,300,100,50)
}

function draw()
{
	background(40)

	rows.forEach((row, i) => {
		if(i == 0 || i == rows.length - 1 || i == centerRow){
			fill(0,0,15)
		} else {
			fill((360/rowCount) * i,100,100)
		}

		rect(canvasX/2,row+halfRow,canvasX,rowY)
	});

	cols.forEach((col,i) => {
		fill(10*i,100,100,0)
		rect(col+halfCol,canvasY/2,colX,canvasY)
	})

	if(keyIsDown(RIGHT_ARROW) && ((player.x + player.w) < canvasX)){
		player.moveX(xSpeed)
	} else if(keyIsDown(LEFT_ARROW) && (player.x - player.w) > 0){
		player.moveX(-xSpeed)
	}
	if(keyIsDown(UP_ARROW) && ((player.y - player.h) > -10)){
		player.moveY(ySpeed)
	} else if(keyIsDown(DOWN_ARROW) && (player.y + player.h) < canvasY+10){
		player.moveY(-ySpeed)
	}

	player.draw()

	// testCar.check(player.x,player.y,player.w,player.h)
}


// function keyPressed(){
// 	if(keyCode === RIGHT_ARROW && ((player.x + player.w) < canvasX)){
// 		player.moveX(xSpeed)
// 	}
// 	if(keyCode === LEFT_ARROW && (player.x - player.w) > 0){
// 		player.moveX(-xSpeed)
// 	}
// 	if(keyCode === UP_ARROW && ((player.y - player.h) > -10)){
// 		player.moveY(ySpeed)
// 	}
// 	if(keyCode === DOWN_ARROW && (player.y + player.h) < canvasY+10){
// 		player.moveY(-ySpeed)
// 	}
// }