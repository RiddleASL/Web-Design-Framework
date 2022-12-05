function Enemy(x,y,w,h,range = 400,speed = 2){
    this.x = x
    this.defaultX = x
    this.y = y
    this.defaultY = y
    this.w = w
    this.h = h
    this.speed = speed
    this.defualtSpeed = speed;

    this.range= range;

    this.gravity = -.5;
    this.yVel = 0;
    this.xVel = 0;

    this.isGrounded = true;
    this.isAlive = true;

    this.draw = function(color,s = 100,v = 100){
        fill(color, s,v)
        noStroke()
        rect(this.x, this.y, this.w, this.h)
    }

    this.alive = function(){
        if(player.x+player.w/2 < this.x-this.w/2 && player.x+player.w/2 > this.x-this.w/2-this.range){
            this.defaultX -= this.speed
        }
        if(player.x-player.w/2 > this.x+this.w/2){
            this.defaultX += this.speed
        }

        if(!this.isGrounded && -this.yVel < 25){
            this.yVel += this.gravity;
        } else if(this.isGrounded){
            this.yVel = 0
        }
        this.y -= this.yVel

        // console.log(this.isGrounded,this.yVel);

        this.isGrounded = false;
    }
}