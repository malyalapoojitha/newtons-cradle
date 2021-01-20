// class Connector{
//  constructor(body1,body2,xoffset) {
//      var options={
//          bodyA:body1,
//          bodyB:body2,
//          pointB:{x:xoffset,y:0}
        
         
//      }
//      this.join= Constraint.create(options);   
//      this.xoffset=xoffset; 
//      World.add(world,this.join);
//  }
//  display() {
//     var posA=this.join.bodyA.position;
//     var posB=this.join.bodyB.position;
//     stroke("white")
//     line(posA.x,posA.y,posB.x+this.xoffset,posB.y);
//  }
// }
class Connector{
    constructor(body1,body2,xoffset) {
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:xoffset,y:0}
             }
        this.join= Constraint.create(options);   
        this.xoffset=xoffset;
        World.add(world,this.join);
    }
    display() {
       var posA=this.join.bodyA.position;
       var posB=this.join.bodyB.position;
       stroke("white")
       line(posA.x,posA.y,posB.x+this.xoffset,posB.y);
    }
   }