class snow {
    constructor(x,y){
var options = {
    density:0.5, 
    friction: 0.08,
    restitution:0.001
}
this.image1 = loadImage("snow4.webp")
this.image2 = loadImage("snow5.webp")
this.body = Bodies.circle(x,y,100,100)
World.add(world,this.body)

    }
display(){
    var angle = this.body.angle;
     var pos = this.body.position;
    rotate(angle); 
    translate(pos.x,pos.y); 
    imageMode(CENTER);
    var ran = Math.round(random(1,2))
    switch(ran){
        case 1: image(this.image1,pos.x,pos.y,100,100);
        break;
        case 2: image(this.image2,pos.x,pos.y,100,100);
        break;
        default: break;    }
   
}
    
}