class Player{
	
	constructor(x, y){
		this.speed = 8;
		this.model = MODEL.ship.basic;
        this.pos = createVector(x, y);
        this.vel = createVector();
		this.r = 15	;
		image(playerImage, this.pos.x, this.pos.y);
		this.color = '#FFFFFF';
	}   
	
	act() {
        this.controls();
        this.update();
		this.display();
    }    
	
	display() {
        this.model();
    }

	
	controls() {
        this.speed = keyIsDown(16) ? 4 : 9.25;
        // Movement (arrow keys)
        let diag = this.speed / sqrt(2);
        if (keyIsDown(RIGHT_ARROW)) {
            if (keyIsDown(UP_ARROW)) {
                this.vel = createVector(diag, -diag);
            } else if (keyIsDown(DOWN_ARROW)) {
                this.vel = createVector(diag, diag);
            } else {
                this.vel = createVector(this.speed, 0);
            }
        } else if (keyIsDown(LEFT_ARROW)) {
            if (keyIsDown(UP_ARROW)) {
                this.vel = createVector(-diag, -diag);
            } else if (keyIsDown(DOWN_ARROW)) {
                this.vel = createVector(-diag, diag);
            } else {
                this.vel = createVector(-this.speed, 0);
            }
        } else if (keyIsDown(DOWN_ARROW)) {
            this.vel = createVector(0, this.speed);
        } else if (keyIsDown(UP_ARROW)) {
            this.vel = createVector(0, -this.speed);
        } else {
            this.vel.mult(0);
        }
    }
	
    update() {
        this.pos.add(this.vel);
		//ellipse(this.pos.x, this.pos.y, 8, 8);
    }
}