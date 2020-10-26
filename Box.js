class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density : 100000000000.0,
            friction : 0.4
           
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var a = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(a);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
       
    }
    
    
    
}