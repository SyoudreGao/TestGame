let objPlayer;
let playerImage;

function preload(){
	loadImage("Player.png", success, failure);
}

function setup(){
	let c = createCanvas(768, 896);
	c.parent('game');
	
	objPlayer = new Player(384, 448);
}

function draw(){
	background(128);
    objPlayer.act();
}

function success(){
	print('Yessss');
}

function failure(){
	print('So over.');
}