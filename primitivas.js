function linea(cvs,pi,pj,co, gr){
	let ct = document.querySelector(cvs).getContext('2d');
	ct.translate(0,0);
	ct.beginPath();
	ct.lineWidth = gr;
	ct.strokeStyle = co;
	ct.moveTo(pi.px, pi.py);
	ct.lineTo(pj.px, pj.py);
	ct.stroke();
	ct.closePath();
}

function texto(cvs, tx, px, py){
	let ct = document.querySelector(cvs).getContext('2d');
	ct.font = "12px textcontenido";
	ct.fillStyle = '#EFEC0D';
	ct.fillText(tx, px, py);
}

function circulo(cvs, xc, yc, r){
	let ct = document.querySelector(cvs).getContext('2d');
	ct.beginPath();
	ct.strokeStyle = '#3D3C3C';
	ct.fillStyle = '#EFEC0D';
	ct.linewidth = 2;
	ct.arc(xc,yc,r,0,2*Math.PI);
	ct.fill();
	ct.stroke();
	ct.closePath();
}