class Partical{
    constructor(x, y,rad){

        var options={
            restitution:0.4
        }
        this.rad = rad;

        this.body = Bodies.circle(x, y, this.rad, options);
        this.color = color(random(0,255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display()   {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y)
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0, this.rad, this.rad);
        pop();
    }
}