class Box{
    constructor(x, y, width, height) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
          density : 0.04
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
       
        display() {
            var position = this.body.position
            var angle= this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle) ;
            rectMode(CENTER);
            strokeWeight(4);
            stroke("green");
            fill(255);
            rect(0,0,this.width,this.height);
            pop();   
      }
     
}