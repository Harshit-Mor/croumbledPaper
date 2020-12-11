class Dustbin
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
    }
}
display()
{
    var dustbinpos=this.body.position;

    push()
    tranasate(dustbinpos.x,dustbinpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(0);
    rect(0,0,this.width,this.height);
    pop();
}