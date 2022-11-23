let levelX = 500
let levelY = 500

let gridSize = 11
let positions = []

let gridX = levelX / gridSize
let gridY = levelY / gridSize

let levels
let levelPattern = /tr|tl|bl|br|x|n|s|e|w|f/g

let levelBuilder
let player

let currentLevel = 1

for (let i = 0; i < gridSize; i++) {
	positions.push(1+(2*i));
	
}

function setup() 
{
	createCanvas(levelX, levelY)
	rectMode(CENTER)
	noStroke()

	levelBuilder = new LevelBuilder(levelPattern)
	tiles = new Tiles()
	levels = new Levels()

	player = new Player(100,100,30)
}

function draw()
{
	colL = get(player.x - player.w/2, player.y - player.w/2)

	background(200)
	levelBuilder.drawLevel(levels.levels[currentLevel],gridX/2,gridY/2,gridX,gridSize,positions)

	if(keyIsDown(RIGHT_ARROW)){
		player.right(5)
	} else if(keyIsDown(LEFT_ARROW) && colL != color(25,25,25,255)){
		player.left(-5)
	}
	if(keyIsDown(UP_ARROW)){
		player.up(5)
	} else if(keyIsDown(DOWN_ARROW)){
		player.down(-5)
	}

	console.log(colL == [25,25,25,255]);
	player.draw()
}
