function Platform(x,y,w,h){
    this.x = x
    this.defaultX = x
    this.y = y
    this.defaultY = y
    this.w = w
    this.h = h

    this.draw = function(color,s = 100,v = 100){
        fill(color, s,v)
        stroke(0,0,0)
        rect(this.x, this.y, this.w, this.h)
    }

    this.checkPlayer = function(){
        // if((player.y < this.y-(player.h/2))){
        //     player.isGrounded = false;
        // } else {
        //     player.isGrounded = true;
        // }
    
        // if(player.y >= this.y-(player.h/2)){
        //     player.y = this.y-(player.h/2)
        // }

        //* ~~~PLAYER~~~
        if(player.x+player.w/2 > this.x && player.x-player.w/2 < this.x+this.w){

            if(player.x+player.w/2 > this.x+5 && player.x-player.w/2 < this.x+this.w-5){
                if(player.y+(player.h/2) < this.y || player.y > this.y+this.h){
                    // player.isGrounded = false;
                } else if(player.yVel <= 0){
                    player.isGrounded = true;
                    player.yVel = 0
                }
            
                if(player.y+((player.h/2)+ 1) >= this.y && player.y+(player.h/8) <= this.y+1 && player.isGrounded){
                    player.y = this.y-(player.h/2)
                    player.isGrounded = true;
                }
            }

            if(player.y-player.h/2 < this.y+this.h-4 && player.y > this.y+10){
                player.yVel = 0
                player.y = this.y+this.h+(player.h/2)
            }
        } else {

        }

        console.log(player.x+player.w/2 > this.x-1 && player.x+player.w/2 < this.x+this.w/2);
        if((player.y+player.h/2 > this.y && player.y+player.h/2 < this.y+this.h+5) ){
            if( player.x+player.w/2 > this.x-1 && player.x+player.w/2 < this.x+this.w/2){
                player.x = this.x - player.w/2
            }
            if( player.x-player.w/2 > this.x+this.w/2&& player.x-player.w/2 < this.x+this.w-1){
                player.x = this.x+this.w+player.w/2
            } 
        }
    }

    this.checkEnemies = function(enemy){
        //* ~~~ENEMIES~~~
        if(enemy.x+enemy.w/2 > this.x && enemy.x-enemy.w/2 < this.x+this.w){

            if(enemy.x+enemy.w/2 > this.x+5 && enemy.x-enemy.w/2 < this.x+this.w-5){
                if(enemy.y+(enemy.h/2) < this.y || enemy.y > this.y+this.h){
                    // enemy.isGrounded = false;
                } else if(enemy.yVel <= 0){
                    enemy.isGrounded = true;
                    enemy.yVel = 0
                }
            
                if(enemy.y+((enemy.h/2)+ 1) >= this.y && enemy.y+(enemy.h/8) <= this.y+this.h && enemy.isGrounded){
                    enemy.y = this.y-(enemy.h/2)
                    enemy.isGrounded = true;
                }
            }

            if(enemy.y-enemy.h/2 < this.y+this.h-4 && enemy.y > this.y+10){
                enemy.yVel = 0
                enemy.y = this.y+this.h+(enemy.h/2)
            }
        } else {

        }


        if(enemy.y+enemy.h/2 > this.y+this.h && enemy.y-enemy.h/2 < this.y){
            if( enemy.x+enemy.w/2 > this.x-1 && enemy.x+enemy.w/2 < this.x+this.w/2){
                enemy.x = this.x-1 - enemy.w/2
            }
            if( enemy.x-enemy.w/2 > this.x+this.w/2&& enemy.x-enemy.w/2 < this.x+this.w-1){
                enemy.x = this.x+this.w+enemy.w/2
            } 
        }
    }
}