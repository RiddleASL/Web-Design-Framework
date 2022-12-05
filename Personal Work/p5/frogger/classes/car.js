function Car(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.draw = function(){
        fill(50,100,100)
        rect(this.x,this.y,this.w,this.h)
    }
    this.check = function(playerx, playery,playerw,playerh){
        if(((playerx + playerw/2) > (this.x-(this.w/2))) && ((playerx - playerw/2) < (this.x+(this.w/2))) && ((playery + playerh/2) > (this.y - (this.h/2))) && ((playery - playerh/2) < (this.y + (this.h/2)))){
            return true
        }
    }
}