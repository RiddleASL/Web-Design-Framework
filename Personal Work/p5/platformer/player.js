function Player(x,y,w,h,speed = 5,jumpHeight = -300){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.speed = speed
    this.defualtSpeed = speed;
    this.jumpHeight = -jumpHeight

    this.gravity = -1;
    this.yVel = 0;
    this.xVel = 0;

    this.isGrounded = true;
    this.isJumping = false;

    let goal = this.y + this.jumpHeight;

    this.draw = function(color,s = 100,v = 100){
        fill(color, s,v)
        noStroke()
        rect(this.x, this.y, this.w, this.h)
    }

    //* Input
    this.play = function(){
        //* ~~~ INPUTS ~~~
        if(keyIsPressed){
            if(keyIsDown(RIGHT_ARROW) ){
                if(this.xVel < 15){
                    this.xVel += this.speed;
                }
                this.x += this.xVel
            } else if(keyIsDown(LEFT_ARROW) ){
                if(this.xVel > -15){
                    this.xVel -= this.speed;
                }
                this.x += this.xVel
            }

            //* ~~~ Jump ~~~
            if(keyIsDown(UP_ARROW) && this.isGrounded && !this.isJumping){
                this.isJumping = true
                this.isGrounded = false;
                // this.y += this.jumpHeight;
                goal = this.y + this.jumpHeight
                this.yVel = 13
            }
        } else {
            this.xVel = 0
        }

        if(this.isJumping){
            if(this.y > goal){
                this.yVel -= .5
                this.y -= this.yVel
            } else if(this.y <= goal){
                this.isJumping = false;
            }
        }

        if(!this.isGrounded && !this.isJumping && -this.yVel < 25){
            this.yVel += this.gravity;
        } else if(this.isGrounded){
            this.yVel = 0
            this.isJumping = false
        }
        this.y -= this.yVel

        // console.log(this.isGrounded,this.isJumping,this.yVel);

        this.isGrounded = false;
    }
}