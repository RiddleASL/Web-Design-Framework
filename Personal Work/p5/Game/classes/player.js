function Player(x,y,width,height = width){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.posX = x;

        let direction = 1;
    
    this.draw = function(){
        fill(1,0,90)
        rect(this.x, this.y, this.width, this.height);

        fill(0,0,100)
        rect(this.x+this.width/6, this.y+this.height/6, this.width/1.5, this.height/1.5);

        if(direction == 1){
            fill(10,100,100)
            rect(this.x+this.width/1.25, this.y+this.height/4, this.width/2)
        }
        if(direction == -2){
            fill(10,100,100)
            rect(this.x-this.width/3, this.y+this.height/4, this.width/2)
        }
        if(direction == 2){
            fill(10,100,100)
            rect(this.x+this.width/4, this.y-this.height/3, this.width/2)
        }
        if(direction == -1){
            fill(10,100,100)
            rect(this.x+this.width/4, this.y+this.height/1.25, this.width/2)
        }
    }

    this.right = function(xSpeed){
        this.x += xSpeed
    }
    this.up = function(ySpeed){
        this.y += -ySpeed;
    }

    this.newDirection = function(newDir){
        direction = newDir;
    }


}