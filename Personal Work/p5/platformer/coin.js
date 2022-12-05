function Coin(x,y,r=40){
    this.x = x
    this.defaultX = x
    this.y = y
    this.defaultY = y
    this.r = r

    this.ignore = false;

    this.draw = function(){
        fill(60,100,90)
        ellipse(this.x,this.y,this.r)
    }

    this.check = function(){
        if(player.x+player.w/2 > this.x-this.r && player.x-player.w/2 < this.x+this.r && player.y+player.h > this.y+this.r && player.y-player.h < this.y-this.r){
            this.ignore = true;
            return true
        }
    }
}