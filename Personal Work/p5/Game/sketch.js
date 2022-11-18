let player;
let level;

let breads = []
let time = 0;

let moveLog = [0,0]

let levelH = 400
let levelW = 400

function setup() 
{
	angleMode(DEGREES)
	colorMode(HSB, 100)
	noStroke()
	level = new Level(600,600,40,50,100)
	player = new Player(level.x/2,level.y/2,20)
}

function draw()
{
	// --- Movement --- 
	// Right
	if(keyIsDown(RIGHT_ARROW) && !(player.x == level.x - player.width)){
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
	else if(keyIsDown(DOWN_ARROW) && !(player.y == level.y - player.height)){
		player.up(-5)
		player.newDirection(-1)
	}

	time += deltaTime
	// console.log(breads)

	if((time/1000) >= 1){
		time = 0;
		breads.push(new Bread(random(25,level.x-25),random(25,level.y-25),20,20))
	}


	level.draw()
	player.draw()
}
