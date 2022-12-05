let canvasX = 1280;
let canvasY = 720;
let canvasXMod = 0;
let canvasYMod = 0;
let canvasUpperCutoff = 200;
let canvasLowerCutoff = 550;
let canvasForwardCutoff = 800
let canvasBackwardCutoff = 300

let player;

let enemies = []

let coins = [];
let coinCount = 0

let assets = []

let floorH = 50
let floorY = canvasY - floorH

function setup() 
{
	createCanvas(canvasX, canvasY);
	bg = createGraphics(canvasX, canvasY)
	colorMode(HSB,360,100,100,100)
	rectMode(CENTER)
	ellipseMode(CENTER)
	frameRate(500)

	player = new Player(300,600,50,75,5,400);
	level()
	ai()
}

function draw()
{
	background(0,0,50)

	fill(0,0,0)
	text(`Coins: ${coinCount}`,25,50,)
	textSize(32)
	rectMode(CORNER)
	assets.forEach(asset => {
		asset.x = asset.defaultX + canvasXMod
		asset.y = asset.defaultY + canvasYMod
		asset.draw(0,0,0)
		asset.checkPlayer()
		enemies.forEach(enemy => {
			asset.checkEnemies(enemy)
			enemy.alive()
		})
	})
	rectMode(CENTER)

	coins.forEach((coin) => {
		if(!coin.ignore){coin.x = coin.defaultX + canvasXMod
			coin.y = coin.defaultY + canvasYMod
			coin.draw()
			if(coin.check()){
				coinCount ++
			}
		}
	})

	enemies.forEach(enemy => {
		enemy.x = enemy.defaultX + canvasXMod
		enemy.draw(0,100,100)
	})

	if(player.x > canvasForwardCutoff){
		player.x = canvasForwardCutoff;
		canvasXMod -= player.xVel
	}

	if(player.x < canvasBackwardCutoff){
		player.x = canvasBackwardCutoff;
		canvasXMod -= player.xVel
	}

	if(player.y+player.h/2 > canvasLowerCutoff){
		player.y = canvasLowerCutoff-player.h/2
		canvasYMod -= 20;
	}
	if(player.y < canvasUpperCutoff){
		player.y = canvasUpperCutoff
		canvasYMod += player.yVel*1.5;
	}

	player.draw(100,100,80)
	player.play()
}

function level(){
	assets.push(new Platform(550,floorY-50,300,floorH,player))
	assets.push(new Platform(0,floorY,canvasX*2,300,player))
}

function ai(){
	// enemies.push(new Enemy(800,floorY-400, 50,50))
}
