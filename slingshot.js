class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            lenght:20,
          }
           this.Sling=  Matter.Constraint.create(options)
           this.pointB=pointB
          World.add(world, this.Sling);
    }

    fly(){
        this.Sling.bodyA=null;
    }
    display(){
        if(this.Sling.bodyA){
    var pointA=this.Sling.bodyA.position
    var pointB=this.pointB
    line( pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}