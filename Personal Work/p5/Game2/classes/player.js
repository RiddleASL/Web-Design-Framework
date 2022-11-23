function Player(x,y,w){
    this.x = x
    this.y = y
    this.w = w    

    this.draw = function(){
        fill(0,255,255)
        rect(this.x,this.y,this.w)
    }

    this.right = function(speed){
        this.x < 500
        ?this.x += speed
        :""
    }
    this.up = function(speed){
        this.y > 0
        ?this.y -= speed
        :""
    }
    this.left = function(speed){
        this.x > 0
        ?this.x += speed
        :""
    }
    this.down = function(speed){
        this.y < 500
        ?this.y -= speed
        :""
    }
}