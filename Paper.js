class Paper {
   constructor(x,y,r){
   var options={
    
    'restitution':1,
    'friction':0.3,
    'density':0.8
   }
   this.x=x;
   this.y=y;
   this.r=r;
   this.body=Matter.Bodies.circle(x,y,r,options);
   World.add(world,this.body);
   }
   display() {
   push();
  
   fill("red"); 
   ellipseMode(RADIUS)
   ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
   pop();
   }
}