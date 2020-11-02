class Ground{

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.Ground = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.Ground);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.Ground.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}