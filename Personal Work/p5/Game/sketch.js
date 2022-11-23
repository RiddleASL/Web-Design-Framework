let player;
let playerSpeed = 3;

let level;

let breads = []
let time = 0;

let moveLog = [0,0]

let levelH = 400
let levelW = 400

let score;


function counter(x){
	
}

function setup() 
{
	angleMode(DEGREES)
	colorMode(HSB, 100)
	noStroke()
	level = new Level(400,400,40,50,100)
	player = new Player(level.x/2,level.y/2,20)

	score = 0	
}

function draw()
{
	level.draw()
	
	fill(0)
	textSize(20)
	text(`Score: ${score}`, 20, 20)
	console.log(breads.length);
	// --- Movement --- 
	// Right
	if(keyIsDown(RIGHT_ARROW) && !(player.x == level.x - player.width)){
		player.right(playerSpeed)
		player.newDirection(1)
	}
	// Left
	else if(keyIsDown(LEFT_ARROW) && !(player.x == 0)){
		player.right(-playerSpeed)
		player.newDirection(-2)
	} 
	// Up
	if(keyIsDown(UP_ARROW) && !(player.y == 0)){
		player.up(playerSpeed);
		player.newDirection(2)
	} 
	// Down
	else if(keyIsDown(DOWN_ARROW) && !(player.y == level.y - player.height)){
		player.up(-playerSpeed)
		player.newDirection(-1)
	}

	breads.length < 10
	?time += deltaTime
	: time = 0

	if((time/1000) >= 1){
		time = 0;
		breads.push(new Bread(random(25,level.x-25),random(25,level.y-25),20,20))
	}
	if(breads.length > 0){
		breads.forEach((bread, i) =>{
			bread.draw()
			if(bread.check(player.x,player.y)){
				removed = breads.splice(i,1)
				score++
			}
		});
	}


	
	player.draw()

}
