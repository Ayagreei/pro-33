class Plinko{
    constructor(x,y,rad){

        var options={
            isStatic: true
        }
        this.rad = rad;
        this.body = Bodies.circle(x, y, this.rad, options);
        World.add(world, this.body);
    }
    display()   {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y)
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0, this.rad, this.rad);
        pop();
    }
}