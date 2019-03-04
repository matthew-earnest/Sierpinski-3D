class vec{
	constructor(v1i,v2i,v3i,v4i){
		this.v1=v1i;
		this.v2=v2i;
		this.v3=v3i;
		this.v4=v4i;
	}
	
	get1(){
		return this.v1;
	}

	get2(){
		return this.v2;
	}
	
	get3(){
		return this.v3;
	}
	
	get4(){
		return this.v4;
	}
	
	disp(){
		beginShape();
		vertex(this.v1.x,this.v1.y,this.v1.z);
		vertex(this.v2.x,this.v2.y,this.v2.z);
		vertex(this.v3.x,this.v3.y,this.v3.z);
		vertex(this.v1.x,this.v1.y,this.v1.z);
		vertex(this.v2.x,this.v2.y,this.v2.z);
		vertex(this.v4.x,this.v4.y,this.v4.z);
		vertex(this.v1.x,this.v1.y,this.v1.z);
		vertex(this.v3.x,this.v3.y,this.v3.z);
		vertex(this.v4.x,this.v4.y,this.v4.z);
		endShape();
	}
}

function mid(va,vb){
	let vm;
	vm=createVector((vb.x-va.x)/2+va.x,(vb.y-va.y)/2+va.y,(vb.z-va.z)/2+va.z);
	return vm;
}

function genS(){
	let next=[];
	for(let j=0;j<vecs.length;j++){
		let vm12=mid(vecs[j].get1(),vecs[j].get2());
		let vm23=mid(vecs[j].get2(),vecs[j].get3());
		let vm31=mid(vecs[j].get3(),vecs[j].get1());
		let vm34=mid(vecs[j].get3(),vecs[j].get4());
		let vm41=mid(vecs[j].get4(),vecs[j].get1());
		let vm42=mid(vecs[j].get4(),vecs[j].get2());
		next.push(new vec(vecs[j].get1(),vm12,vm31,vm41));
		next.push(new vec(vecs[j].get2(),vm23,vm12,vm42));
		next.push(new vec(vecs[j].get3(),vm31,vm23,vm34));
		next.push(new vec(vecs[j].get4(),vm34,vm41,vm42));
	}
	vecs=next;
}