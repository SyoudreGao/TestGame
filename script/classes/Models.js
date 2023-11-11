const MODEL = {};
MODEL.bullet = {};
MODEL.item = {};
MODEL.particle = {};
MODEL.ship = {};


// Bullet models

MODEL.bullet.basic = function() {
    fill(this.color);
    stroke(0, 128);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
};

MODEL.ship.basic = function() {
    fill(this.color);
    stroke(0, 128);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
	image(playerImage, this.pos.x, this.pos.y, 80, 80);
};