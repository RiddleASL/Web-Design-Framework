function Bread(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;


    this.draw = function(){
        fill(1,100,100)
        rect(this.x, this.y, this.width, this.height)
    }
}