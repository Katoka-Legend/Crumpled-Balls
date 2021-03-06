class Paper {

    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,this.radius)
        World.add(world,this.body)

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        // imageMode(CENTER)
        // image(this.x,this.y,0,0,this.radius,this.radius);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }

}