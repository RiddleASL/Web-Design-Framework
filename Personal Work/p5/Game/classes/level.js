function Level(x,y,h,s,b){
    this.x = x;
    this.y = y;
    this.h = h;
    this.s = s;
    this.b = b;

    this.draw = function(){
        createCanvas(this.x, this.y);
        background(h,s,b)
    }
}