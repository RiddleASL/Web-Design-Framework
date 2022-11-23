let grid = [
	['h'],		['h'],		['h'],		['h'],		['h'],
	['h'],		['h'],		['h'],		['h'],		['h'],
	['h'],		['h'],		['h'],		['h'],		['h'],
	['h'],		['h'],		['h'],		['h'],		['h'],
	['h'],		['h'],		['h'],		['h'],		['h'],
]

let positions = [1,3,5,7,9]

let levelW = 500
let levelH = 500

let gridSize = levelW/5
let counter = 0

let color = 0

function setup() 
{
	createCanvas(levelW, levelH);
	background(25)
	colorMode(HSB)
	rectMode(CENTER)
	noStroke()
}

function draw()
{
	fill(color,100,100)
	color += 2
	color >= 360
		?color = 0
		:""
	grid.forEach((element, i)=> {
		yMod = positions[Math.floor(i/5)]
		xMod = positions[counter]
		fill(color+(i-10),100,100)
		if(counter == 4){
			counter = 0
		} else {
			counter = counter + 1
		}
		console.log(yMod);
		// console.log(yMod);
		element == "h"
		?rect(gridSize/2*xMod,gridSize/2*yMod,gridSize)
		:""
	})
}
