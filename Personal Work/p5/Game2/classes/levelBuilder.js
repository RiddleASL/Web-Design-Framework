let tiles 

function LevelBuilder(pattern){

    tiles = new Tiles()

    this.drawLevel = function(level,x,y,w,gridSize,positions){
        if(typeof level === typeof []){
            
            level.forEach(element => {
                levelMap = element.match(pattern)
                levelMap.forEach((element, i) => {
                    

                    yPos = Math.ceil((i+1)/gridSize)+((Math.ceil((i+1)/gridSize))-1)
                    xPos = positions[(i)%gridSize]
                    // console.log(xPos);

                    element == "x"
                        ? tiles.black(x*xPos,y*yPos,w)
                        : ""

                    element == "f"
                        ? tiles.floor(x*xPos,y*yPos,w)
                        : ""

                        element == "tl"
                        ? tiles.topLeft(x*xPos,y*yPos,w)
                        : ""

                    element == "tr"
                        ? tiles.topRight(x*xPos,y*yPos,w)
                        : ""
                
                    element == "br"
                        ? tiles.bottomRight(x*xPos,y*yPos,w)
                        : ""

                    element == "bl"
                        ? tiles.bottomLeft(x*xPos,y*yPos,w)
                        : ""

                        element == "n"
                        ? tiles.north(x*xPos,y*yPos,w)
                        : ""

                    element == "s"
                        ? tiles.south(x*xPos,y*yPos,w)
                        : ""
                
                    element == "e"
                        ? tiles.east(x*xPos,y*yPos,w)
                        : ""

                    element == "w"
                        ? tiles.west(x*xPos,y*yPos,w)
                        : ""
                })
            });

        } else {
            return console.log("Please Input Level as Array");
        }
    }
}