function Tiles(){
    this.color = 

    this.black = function(x,y,w){
        fill(25)
        rect(x,y,w)
    }

    this.topLeft = function(x,y,w){
        fill(255,0,0)
        rect(x,y,w)
    }

    this.topRight = function(x,y,w){
        fill(200,0,0)
        rect(x,y,w)
    }

    this.bottomLeft = function(x,y,w){
        fill(100,0,0)
        rect(x,y,w)
    }

    this.bottomRight = function(x,y,w){
        fill(150,0,0)
        rect(x,y,w)
    }

    this.north = function(x,y,w){
        fill(0,250,0)
        rect(x,y,w)
    }

    this.east = function(x,y,w){
        fill(0,200,0)
        rect(x,y,w)
    }

    this.south = function(x,y,w){
        fill(0,150,0)
        rect(x,y,w)
    }


    this.west = function(x,y,w){
        fill(0,100,0)
        rect(x,y,w)
    }

    this.floor = function(x,y,w){
        fill(0,0,255)
        rect(x,y,w)
    }
}