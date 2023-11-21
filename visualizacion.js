function limpiaCanvas(cvs){
	let cv = document.querySelector(cvs);
	let ct = cv.getContext('2d');
	ct.clearRect(0,0,cv.width, cv.height);
}