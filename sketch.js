let vecs=[];
let v1,v2,v3;
let can;
let size;

function setup(){
	size=100;
	can=createCanvas(1000,500,WEBGL);
	can.position(windowWidth/2-width/2,100);
	v1=createVector(size,size,size);
	v2=createVector(size,size*-1,size*-1);
	v3=createVector(size*-1,size,size*-1);
	v4=createVector(size*-1,size*-1,size);
	vecs.push(new vec(v1,v2,v3,v4));
	strokeWeight(1.5);
}

function draw(){
	background(255,64,64);
	rotateY(frameCount/100);
	for(j=0;j<vecs.length;j++){
		vecs[j].disp();
	}
}

function mousePressed(){
	genS();
}