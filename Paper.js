class Paper{
    constructor(x,y,r){
        var options=
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("IMGS/paper.png")
        this.body=Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r=50
        World.add(world,this.body)


    }
  
    display(){
    var paperpos=this.body.position;
    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    imageMode(CENTER);
    fill("Purple")
    image(this.image, 0,0,this.r, this.r)
    pop()
    }
    //this.body = Bodies.rectangle(100,50,200,100)
    
}

   

