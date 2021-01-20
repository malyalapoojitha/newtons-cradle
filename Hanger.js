class Hanger{
    constructor(){
        var options={
         'isStatic':true
        }
        this.body=Matter.Bodies.rectangle(400,100,300,10,options);
        
        World.add(world,this.body);
        }
        display() {
        push();
        fill("yellow");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,300,10);
        pop();
        }
}