
class DustBin{

    constructor(x,y,width,height){
        this.color = "whiteJ";
        this.body = Bodies.rectangle(x,y,width,height, {restitution:1,isStatic:true});
        this.image= loadImage("dustbingreen.png")
        this.width = width;
        this.height = height;

		this.leftWall=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWall=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
	
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color)
        image(this.image,pos.x, pos.y, 150, 170);

    }
}