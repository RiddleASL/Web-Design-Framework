let player;
let level;

let moveLog = [0,0]

let levelH = 400
let levelW = 400

function setup() 
{
	angleMode(DEGREES)
	colorMode(HSB, 100)
	noStroke()
	level = new Level(600,600,40,50,100)
	player = new Player(levelW/2,levelH/2,20)
}

function draw()
{

	// Draw Elements
	level.draw()
	player.draw()

	// --- Movement --- 
	// Right
	if(keyIsDown(RIGHT_ARROW) && !(player.x == levelW - player.width)){
		player.right(5)
		player.newDirection(1)
	}
	// Left
	else if(keyIsDown(LEFT_ARROW) && !(player.x == 0)){
		player.right(-5)
		player.newDirection(-2)
	} 
	// Up
	if(keyIsDown(UP_ARROW) && !(player.y == 0)){
		player.up(5);
		player.newDirection(2)
	} 
	// Down
	else if(keyIsDown(DOWN_ARROW) && !(player.y == levelH - player.height)){
		player.up(-5)
		player.newDirection(-1)
	}
	if(keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)){
		player.newDirection(3)
	}


}
