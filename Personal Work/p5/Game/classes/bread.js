function Bread(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;


    this.draw = function(){
        fill(1,100,100)
        rect(this.x, this.y, this.width, this.height)
    }

    this.check = function(playerX,playerY){
        if(playerX >= this.x - this.width && playerX <= this.x + this.width && playerY >= this.y - this.height && playerY <= this.y + this.height){
            return true
        }
    }
}