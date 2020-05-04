class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.catapult1=loadImage("sprites/sling1.png")
        this.catapult2=loadImage("sprites/sling2.png")
        this.rubberband=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.catapult1,200,25)
        image(this.catapult2,175,25)
        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
             push();
            if(pointA.x<220){
                
                strokeWeight(7);
                stroke(51,38,4);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-55);
                line(pointA.x-20,pointA.y,pointB.x-20,pointB.y-55);
                image(this.rubberband,pointA.x-30,pointA.y-10,15,20);
            }
            else{
                strokeWeight(4);
                line(pointA.x+20,pointA.y,pointB.x-20,pointB.y-55);
                line(pointA.x+20,pointA.y,pointB.x+20,pointB.y-55);

            image(this.rubberband,pointA.x+25,pointA.y-5,15,20);
                
            }
            pop();
        }
        
    }
    
}