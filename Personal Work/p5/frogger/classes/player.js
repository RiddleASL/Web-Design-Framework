function Player(x,y,w = 10,h = w){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.draw = function(){
        fill(0,100,100)
        rect(this.x,this.y,this.w,this.h)
    }

    this.moveX = function(xSpeed){
        this.x += xSpeed;
    }
    
    this.moveY = function(ySpeed){
        this.y += ySpeed;
    }
}