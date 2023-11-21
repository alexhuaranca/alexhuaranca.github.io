function dibgia(i){
	switch(arrayGuia[i].di){
		case 1:
			abcisa =es*(dx + arrayGuia[i].gv); 
			pA = new objetoPunto(1,abcisa,H);
			pB = new objetoPunto(2,abcisa,0);
			linea('.c_dg',pA,pB,'lightgray', 1); /*primitiva.js*/
		break;
		case 2:
			ordenada =es*(dy + arrayGuia[i].gv);
			pA = new objetoPunto(1,0,H - ordenada);
			pB = new objetoPunto(2,B,H - ordenada);
			linea('.c_dg',pA,pB,'lightgray', 1);
		break;
		default:
	}	
}

function dibgiaT(){
	limpiaCanvas('.c_dg'); /*visualizacion.js*/
	for (let i = 0; i < g; i++) {
		dibgia(i);
	}
}

function txtgia(i){
	switch(arrayGuia[i].di){
		case 1:
			valor = 'x'+ arrayGuia[i].no + ': ' + arrayGuia[i].gv;
			abcisa	= 3 + es*(dx + arrayGuia[i].gv)
			ordenada = H - 3;			
			texto('.c_tg', valor, abcisa, ordenada); /*primitiva.js*/			
		break;
		case 2:
			valor = 'y'+ arrayGuia[i].no + ': ' + arrayGuia[i].gv;
			abcisa	= 3;
			ordenada = H - 3 - es*(dy + arrayGuia[i].gv);
			texto('.c_tg', valor, abcisa, ordenada);			
		break;
		default:
	}
}

function txtgiaT(){
	limpiaCanvas('.c_tg');
	for (let i = 0; i < g; i++) {
		txtgia(i);
	}
}


function dibpto(i){
	abcisa = es*(dx + arrayPunto[i].px);
	ordenada = H - es*(dy + arrayPunto[i].py);
	circulo('.c_dp', abcisa, ordenada, 3);
}

function dibptoT(){
	limpiaCanvas('.c_dp');
	for (let i = 0; i < p; i++) {
		dibpto(i);
	}
}

function txtpto(i){
	valor = arrayPunto[i].no;
	abcisa = 4 + es*(dx + arrayPunto[i].px);
	ordenada = H - 4 - es*(dy + arrayPunto[i].py);
	texto('.c_tp', valor, abcisa, ordenada);
}

function txtptoT(){
	limpiaCanvas('.c_tp');
	for (let i = 0; i < p; i++) {
		txtpto(i);
	}
}

function dibelm(i){	
	read(arrayPunto, 'no', p, arrayElemento[i].ei, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	read(arrayPunto, 'no', p, arrayElemento[i].ej, 0);
	xe2 = arrayPunto[pos].px;
	ye2 = arrayPunto[pos].py;

	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);
	abcisa = es * (dx + xe2);
	ordenada = H - es * (dy + ye2);
	pB = new objetoPunto(2, abcisa, ordenada);

	linea('.c_de', pA, pB, 'blue', 2);
}

function dibelmT(){
	limpiaCanvas('.c_de');
	for (let i = 0; i < b; i++) {
		dibelm(i);
	}
}

function txtelm(i){
	valor = arrayElemento[i].no;

	read(arrayPunto, 'no', p, arrayElemento[i].ei, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	read(arrayPunto, 'no', p, arrayElemento[i].ej, 0);
	xe2 = arrayPunto[pos].px;
	ye2 = arrayPunto[pos].py;

	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);
	abcisa = es * (dx + xe2);
	ordenada = H - es * (dy + ye2);
	pB = new objetoPunto(2, abcisa, ordenada);

	pC = new objetoPunto(1, 0.5*(pA.px + pB.px), 0.5*(pA.py + pB.py));
	texto('.c_te', valor, pC.px, pC.py);
}

function txtelmT(){
	limpiaCanvas('.c_te');
	for (let i = 0; i < b; i++) {
		txtelm(i);
	}
}

function dibdes(i){
	read(arrayPunto, 'no', p, arrayDesplazamiento[i].no, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);
	switch(arrayDesplazamiento[i].di){
		case 1:
			abcisa += 15;
			ordenada += 15;
			pB = new objetoPunto(2, abcisa, ordenada);
		break;
		case 2:
			abcisa += 15;
			ordenada += 30;
			pB = new objetoPunto(2, abcisa, ordenada);
		break;
		case 3:
			abcisa += 15;
			ordenada += 45;
			pB = new objetoPunto(2, abcisa, ordenada);
		break;
		default:
	}
	linea('.c_dd', pA, pB, 'red', 1);
}

function txtdes(i){
	read(arrayPunto, 'no', p, arrayDesplazamiento[i].no, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);
	switch(arrayDesplazamiento[i].di){
		case 1:
			abcisa += 15;
			ordenada += 15;
			pB = new objetoPunto(2, abcisa, ordenada);
			valor = 'dx = ' + arrayDesplazamiento[i].dm;
		break;
		case 2:
			abcisa += 15;
			ordenada += 30;
			pB = new objetoPunto(2, abcisa, ordenada);
			valor = 'dy = ' + arrayDesplazamiento[i].dm;
		break;
		case 3:
			abcisa += 15;
			ordenada += 45;
			pB = new objetoPunto(2, abcisa, ordenada);
			valor = 'dz = ' + arrayDesplazamiento[i].dm;
		break;
		default:
	}	
	texto('.c_td', valor, pB.px, pB.py);
}

function dibdesT(){
	limpiaCanvas('.c_dd');
	for (let i = 0; i < d; i++) {
		dibdes(i);
	}
}

function txtdesT(){
	limpiaCanvas('.c_td');
	for (let i = 0; i < d; i++) {
		txtdes(i);
	}
}

function dibfza(i){		
	read(arrayPunto, 'no', p, arrayFuerza[i].no, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);
	sf = Math.sign(arrayFuerza[i].fm);
	switch(arrayFuerza[i].di){
		case 1:
			abcisa -= 12*sf;
			ordenada += 6*sf;
			pB = new objetoPunto(2, abcisa, ordenada);
			linea('.c_df', pA, pB, '#24F209', 2);
			abcisa += 0;
			ordenada -= 12*sf;
			pA = new objetoPunto(3, abcisa, ordenada);
			/*linea('.c_df', pB, pA, '#24F209', 2);*/
			abcisa += 12*sf;
			ordenada += 6*sf;
			pB = new objetoPunto(4, abcisa, ordenada);
			linea('.c_df', pA, pB, '#24F209', 2);
			abcisa -= ef*es*arrayFuerza[i].fm;			
			ordenada += 0;
			pA = new objetoPunto(5, abcisa, ordenada);
			linea('.c_df', pB, pA, '#24F209', 2);
		break;
		case 2:
			abcisa -= 6*sf;
			ordenada += 12*sf;
			pB = new objetoPunto(2, abcisa, ordenada);
			linea('.c_df', pA, pB, '#24F209', 2)
			abcisa += 12*sf;
			ordenada -= 0;
			pA = new objetoPunto(3, abcisa, ordenada);
			/*linea('.c_df', pB, pA, '#24F209', 2);*/
			abcisa -= 6*sf;
			ordenada -= 12*sf;
			pB = new objetoPunto(4, abcisa, ordenada);
			linea('.c_df', pA, pB, '#24F209', 2);
			abcisa += 0;			
			ordenada += ef*es*arrayFuerza[i].fm;
			pA = new objetoPunto(5, abcisa, ordenada);
			linea('.c_df', pB, pA, '#24F209', 2);
		break;
		case 3:
			abcisa = pA.px + 20*sf*Math.cos(0*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(0*22.5*3.14159/180);
			pB = new objetoPunto(2, abcisa, ordenada);
			abcisa = pA.px + 20*sf*Math.cos(1*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(1*22.5*3.14159/180);
			pC = new objetoPunto(3, abcisa, ordenada);
			linea('.c_df', pB, pC, '#24F209', 2);
			abcisa = pA.px + 20*sf*Math.cos(2*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(2*22.5*3.14159/180);
			pB = new objetoPunto(4, abcisa, ordenada);
			linea('.c_df', pC, pB, '#24F209', 2);
			abcisa = pA.px + 20*sf*Math.cos(3*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(3*22.5*3.14159/180);
			pC = new objetoPunto(5, abcisa, ordenada);
			linea('.c_df', pB, pC, '#24F209', 2);
			abcisa = pA.px + 20*sf*Math.cos(4*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(4*22.5*3.14159/180);
			pB = new objetoPunto(6, abcisa, ordenada);
			linea('.c_df', pC, pB, '#24F209', 2);
			abcisa = pA.px + 20*sf*Math.cos(5*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(5*22.5*3.14159/180);
			pC = new objetoPunto(7, abcisa, ordenada);
			linea('.c_df', pB, pC, '#24F209', 2);
			abcisa = pA.px + 20*sf*Math.cos(6*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(6*22.5*3.14159/180);
			pB = new objetoPunto(8, abcisa, ordenada);
			linea('.c_df', pC, pB, '#24F209', 2);
			abcisa = pA.px + 20*sf*Math.cos(7*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(7*22.5*3.14159/180);
			pC = new objetoPunto(9, abcisa, ordenada);
			linea('.c_df', pB, pC, '#24F209', 2);
			abcisa = pA.px + 20*sf*Math.cos(8*22.5*3.14159/180);
			ordenada = pA.py - 20*Math.sin(8*22.5*3.14159/180);
			pB = new objetoPunto(10, abcisa, ordenada);
			linea('.c_df', pC, pB, '#24F209', 2);
			abcisa = pA.px + 26*sf*Math.cos(7*22.5*3.14159/180);
			ordenada = pA.py - 26*Math.sin(7*22.5*3.14159/180);
			pC = new objetoPunto(10, abcisa, ordenada);
			linea('.c_df', pB, pC, '#24F209', 2);
		break;
		default:
	}	
}

function dibfzaT(){
	limpiaCanvas('.c_df');
	for (let i = 0; i < n; i++) { 
		dibfza(i);
	}
}

function txtfza(i){
	read(arrayPunto, 'no', p, arrayFuerza[i].no, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	switch (arrayFuerza[i].di){
		case 1:
			abcisa -= ef*es*arrayFuerza[i].fm;			
			ordenada -= 3;
			pA = new objetoPunto(1, abcisa, ordenada);
			valor = arrayFuerza[i].no + 'x: ' + arrayFuerza[i].fm;
			texto('.c_tf', valor, pA.px, pA.py);			
		break;
		case 2:
			abcisa += 3;			
			ordenada += ef*es*arrayFuerza[i].fm;
			pA = new objetoPunto(1, abcisa, ordenada);
			valor = arrayFuerza[i].no + 'y: ' + arrayFuerza[i].fm;
			texto('.c_tf', valor, pA.px, pA.py);
		break;
		case 3:			
			if(sf < 0){
				abcisa = pA.px - 20;
				ordenada = pA.py +12;		
			} else {
				abcisa = pA.px + 20;
				ordenada = pA.py -3;	
			}						
			pA = new objetoPunto(1, abcisa, ordenada);
			valor = arrayFuerza[i].no + 'z: ' + arrayFuerza[i].fm;
			texto('.c_tf', valor, pA.px, pA.py);
		break;
		default: 
	}
}

function txtfzaT(){
	limpiaCanvas('.c_tf');
	for (let i = 0; i < n; i++) {
		txtfza(i);
	}
}

function dibcga(i){
	read(arrayElemento, 'no', b, arrayCarga[i].no, 0);
	read(arrayPunto, 'no', p, arrayElemento[pos].ei, 0);	
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);

	read(arrayElemento, 'no', b, arrayCarga[i].no, 0);	
	read(arrayPunto, 'no', p, arrayElemento[pos].ej, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);	
	pB = new objetoPunto(1, abcisa, ordenada);

	lg = Math.sqrt((pB.px - pA.px)**2 + (pB.py - pA.py)**2);	

	abcisa = pA.px + sq*es*arrayCarga[i].qi * (-pB.py + pA.py)/lg;
	ordenada = pA.py + sq*es*arrayCarga[i].qi * (pB.px - pA.px)/lg;
	pC = new objetoPunto(1, abcisa, ordenada);

	abcisa = pB.px + sq*es*arrayCarga[i].qj * (-pB.py + pA.py)/lg;
	ordenada = pB.py + sq*es*arrayCarga[i].qj * (pB.px - pA.px)/lg;
	pD = new objetoPunto(1, abcisa, ordenada);

	linea('.c_dq', pA, pC, '#ED2E71', 2);
	linea('.c_dq', pC, pD, '#ED2E71', 2);
	linea('.c_dq', pB, pD, '#ED2E71', 2);
}

function dibcgaT(){
	limpiaCanvas('.c_dq');
	for (let i = 0; i < q; i++) {
		dibcga(i);
	}
}

function txtcga(i){
	read(arrayElemento, 'no', b, arrayCarga[i].no, 0);
	read(arrayPunto, 'no', p, arrayElemento[pos].ei, 0);	
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);

	read(arrayElemento, 'no', b, arrayCarga[i].no, 0);	
	read(arrayPunto, 'no', p, arrayElemento[pos].ej, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);	
	pB = new objetoPunto(1, abcisa, ordenada);

	lg = Math.sqrt((pB.px - pA.px)**2 + (pB.py - pA.py)**2);	

	abcisa = pA.px + sq*es*arrayCarga[i].qi * (-pB.py + pA.py)/lg;
	ordenada = pA.py + sq*es*arrayCarga[i].qi * (pB.px - pA.px)/lg;
	pC = new objetoPunto(1, abcisa, ordenada);

	valor = arrayCarga[i].no + 'i: ' + arrayCarga[i].qi;
	texto('.c_tq', valor, pC.px, pC.py);

	abcisa = pB.px + sq*es*arrayCarga[i].qj * (-pB.py + pA.py)/lg;
	ordenada = pB.py + sq*es*arrayCarga[i].qj * (pB.px - pA.px)/lg;
	pD = new objetoPunto(1, abcisa, ordenada);

	valor = arrayCarga[i].no + 'j: ' + arrayCarga[i].qj;
	texto('.c_tq', valor, pD.px, pD.py);	
}

function txtcgaT(){
	limpiaCanvas('.c_tq');
	for (let i = 0; i < q; i++) {
		txtcga(i);
	}
}

function dibcpo(i){
	read(arrayPunto, 'no', p, arrayElemento[i].ei, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	read(arrayPunto, 'no', p, arrayElemento[i].ej, 0);
	xe2 = arrayPunto[pos].px;
	ye2 = arrayPunto[pos].py;

	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);
	abcisa = es * (dx + xe2);
	ordenada = H - es * (dy + ye2);
	pB = new objetoPunto(2, abcisa, ordenada);

	pC = new objetoPunto(1, 0.5*(pA.px + pB.px), 0.5*(pA.py + pB.py));
	pD = new objetoPunto(1, pC.px + 15, pC.py + 15);
	linea('.c_dc', pC, pD, 'red', 1);
	pD = new objetoPunto(1, pC.px + 15, pC.py + 30);
	linea('.c_dc', pC, pD, 'red', 1);	
	pD = new objetoPunto(1, pC.px + 15, pC.py + 45);
	linea('.c_dc', pC, pD, 'red', 1);
}	

function dibcpoT(){
	limpiaCanvas('.c_dc');
	for (let i = 0; i < c; i++) {
		dibcpo(i);
	}
}

function txtcpo(i){
	read(arrayPunto, 'no', p, arrayElemento[i].ei, 0);
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;
	read(arrayPunto, 'no', p, arrayElemento[i].ej, 0);
	xe2 = arrayPunto[pos].px;
	ye2 = arrayPunto[pos].py;

	abcisa = es * (dx + xe1);
	ordenada = H - es * (dy + ye1);
	pA = new objetoPunto(1, abcisa, ordenada);
	abcisa = es * (dx + xe2);
	ordenada = H - es * (dy + ye2);
	pB = new objetoPunto(2, abcisa, ordenada);

	pC = new objetoPunto(1, 0.5*(pA.px + pB.px), 0.5*(pA.py + pB.py));
	
	pD = new objetoPunto(1, pC.px + 15, pC.py + 15);
	read(arrayMaterial, 'no', m, arrayCuerpo[i].cm);
	valor = arrayMaterial[pos].me;
	texto('.c_tc', valor, pD.px, pD.py);

	pD = new objetoPunto(1, pC.px + 15, pC.py + 30);
	read(arraySeccion, 'no', s, arrayCuerpo[i].cs);
	valor = arraySeccion[pos].sa;	
	texto('.c_tc',valor, pD.px, pD.py);	
	
	pD = new objetoPunto(1, pC.px + 15, pC.py + 45);
	valor = arraySeccion[pos].si;
	texto('.c_tc',valor, pD.px, pD.py);	
}

function txtcpoT(){
	limpiaCanvas('.c_tc');
	for (let i = 0; i < c; i++) {
		txtcpo(i);
	}
}