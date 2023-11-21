function defgia(g1,g2,g3){
	create(arrayGuia,objetoGuia,g,g1,g2,g3); /*crud.js*/
	g += 1;
}

function defmat(m1,m2,m3){
	create(arrayMaterial,objetoMaterial,m,m1,m2,m3); 
	m += 1;
}

function defsec(s1,s2,s3){
	create(arraySeccion,objetoSeccion,s,s1,s2,s3); 
	s += 1;
}

function defpto(p1,p2,p3){
	create(arrayPunto,objetoPunto,p,p1,p2,p3); 
	p += 1;
}

function defelm(b1,b2,b3){
	create(arrayElemento,objetoElemento,b,b1,b2,b3); 
	b += 1;
}

function asgdes(d1,d2,d3){
	create(arrayDesplazamiento,objetoDesplazamiento,d,d1,d2,d3); 
	d += 1;
}

function asgfza(n1,n2,n3){
	create(arrayFuerza,objetoFuerza,n,n1,n2,n3); 
	n += 1;
}

function asgcga(q1,q2,q3){
	create(arrayCarga,objetoCarga,q,q1,q2,q3); 
	q += 1;
}

function asgcpo(c1,c2,c3){
	create(arrayCuerpo,objetoCuerpo,c,c1,c2,c3); 
	c += 1;
}

/*comandos de visualizacion*/

function enfoca(i){
	es *= parseFloat(i);
}

function desplaza(i,j){
	dx += parseFloat(i);
	dy += parseFloat(j);
}

function escalar(){
	switch(cmds[1]){
		case 'f':		
			ef *= parseFloat(cmds[2]);			
			dibfzaT();
			txtfzaT();
		break;
		case 'q':

		break;
	}
	
}

/*empieza DELETE del crud*/
function borrar(o){ 
	switch(o){
		case 'g':	
			erase(arrayGuia, 'nodi', g);			
            arrayGuia = arrayGuia.filter((valor)=>{
            	return valor != undefined;
            })
			g -= 1;	
			dibgiaT(); 
			txtgiaT();	
		break;
		case 'm':
			erase(arrayMaterial, 'no', m);
			arrayMaterial = arrayMaterial.filter((valor)=>{
				return valor != undefined;
			})
			m -=1;			
		break;
		case 's':
			erase(arraySeccion, 'no', s);
			arraySeccion = arraySeccion.filter((valor)=>{
				return valor != undefined;
			})
			s -=1;
		break;
		case 'p':
			erase(arrayPunto, 'no', p);
			arrayPunto = arrayPunto.filter((valor)=>{
				return valor != undefined;
			})
			p -=1;
			dibptoT();
			txtptoT();
			/*
			dibelmT(); 
			txtelmT();*/
		break;
		case 'e':
			erase(arrayElemento, 'no', b);
			arrayElemento = arrayElemento.filter((valor)=>{
				return valor != undefined;
			})
			b -=1;
			dibelmT();
			txtelmT();
		break;
		case 'd':
			erase(arrayDesplazamiento, 'nodi', d);
			arrayDesplazamiento = arrayDesplazamiento.filter((valor)=>{
				return valor != undefined;
			})
			d -=1;
			dibdesT();
			txtdesT();
		break;
		case 'f':
			erase(arrayFuerza, 'nodi', n);
			arrayFuerza = arrayFuerza.filter((valor)=>{
				return valor != undefined;
			})
			n -=1;
			dibfzaT();
			txtfzaT();
		break;
		case 'q':
			erase(arrayCarga, 'no', q);
			arrayCarga = arrayCarga.filter((valor)=>{
				return valor != undefined;
			})
			q -=1;
			dibcgaT();
			txtcgaT();
		break;
		case 'c':
			erase(arrayCuerpo, 'no', c);
			arrayCuerpo = arrayCuerpo.filter((valor)=>{
				return valor != undefined;
			})
			c -=1;
			dibcpoT();
			txtcpoT();
		break;
	}
}

function editar(o){
	switch(o){
		case 'g':
			update(arrayGuia, 'nodi', g);	
			arrayGuia[pos].no = parseFloat(cmds[2]);
			arrayGuia[pos].di = parseFloat(cmds[3]);
			arrayGuia[pos].gv = parseFloat(cmds[4]);
			dibgiaT(); 
			txtgiaT();
		break;
		case 'm':
			update(arrayMaterial, 'no', m);
			arrayMaterial[pos].no = parseFloat(cmds[2]);
			arrayMaterial[pos].me = parseFloat(cmds[3]);
			arrayMaterial[pos].mr = parseFloat(cmds[4]);			
		break;
		case 's':
			update(arraySeccion, 'no', s);
			arraySeccion[pos].no = parseFloat(cmds[2]);
			arraySeccion[pos].sa = parseFloat(cmds[3]);
			arraySeccion[pos].si = parseFloat(cmds[4]);			
		break;
		case 'p':
			update(arrayPunto, 'no', p);
			arrayPunto[pos].no = parseFloat(cmds[2]);
			arrayPunto[pos].px = parseFloat(cmds[3]);
			arrayPunto[pos].py = parseFloat(cmds[4]);
			dibptoT();
			txtptoT();
			dibelmT();
			txtelmT();
			dibdesT();
			txtdesT();
			dibfzaT();
			txtfzaT();
			dibcgaT();
			txtcgaT();
			dibcpoT();
			txtcpoT();
		break;
		case 'e':
			update(arrayElemento, 'no', b);
			arrayElemento[pos].no = parseFloat(cmds[2]);
			arrayElemento[pos].ei = parseFloat(cmds[3]);
			arrayElemento[pos].ej = parseFloat(cmds[4]);
			dibelmT();
			txtelmT();
			dibdesT();
			txtdesT();
			dibfzaT();
			txtfzaT();
			dibcgaT();
			txtcgaT();
			dibcpoT();
			txtcpoT();
		break;
		case 'd':
			update(arrayDesplazamiento, 'nodi', d);
			arrayDesplazamiento[pos].no = parseFloat(cmds[2]);
			arrayDesplazamiento[pos].di = parseFloat(cmds[3]);
			arrayDesplazamiento[pos].dm = parseFloat(cmds[4]);
			dibdesT();
			txtdesT();
			dibfzaT();
			txtfzaT();
			dibcgaT();
			txtcgaT();
			dibcpoT();
			txtcpoT();
		break;
		case 'f':
			update(arrayFuerza, 'nodi', n);
			arrayFuerza[pos].no = parseFloat(cmds[2]);
			arrayFuerza[pos].di = parseFloat(cmds[3]);
			arrayFuerza[pos].fm = parseFloat(cmds[4]);
			dibfzaT();
			txtfzaT();
			dibcgaT();
			txtcgaT();
			dibcpoT();
			txtcpoT();
		break;
		case 'q':
			update(arrayCarga, 'no', q);
			arrayCarga[pos].no = parseFloat(cmds[2]);
			arrayCarga[pos].qi = parseFloat(cmds[3]);
			arrayCarga[pos].qj = parseFloat(cmds[4]);			
			dibcgaT();
			txtcgaT();
			dibcpoT();
			txtcpoT();
		break;
		case 'c':
			update(arrayCuerpo, 'no', c);
			arrayCuerpo[pos].no = parseFloat(cmds[2]);
			arrayCuerpo[pos].cm = parseFloat(cmds[3]);
			arrayCuerpo[pos].cs = parseFloat(cmds[4]);	
			dibcpoT();
			txtcpoT();		
		break;
		default:
	}
}

function leer(o){
	switch(o){
		case 'g':
			read(arrayGuia, 'nodi', g, parseFloat(cmds[2]), parseFloat(cmds[3]));
			t1 = arrayGuia[pos].no;
			t2 = arrayGuia[pos].di;
			t3 = arrayGuia[pos].gv;
			document.querySelector('.texto').value = "Guia: " + t1 + "  Direccion: " + t2 + "  Magnitud: " + t3;			
		break;
		case 'm':
			read(arrayMaterial, 'no', m, parseFloat(cmds[2]), 0);
			t1 = arrayMaterial[pos].no;
			t2 = arrayMaterial[pos].me;
			t3 = arrayMaterial[pos].mr;
			document.querySelector('.texto').value = "Material: " + t1 + "  Elasticidad: " + t2 + "  Resistencia: " + t3;
		break;
		case 's':
			read(arraySeccion, 'no', s, parseFloat(cmds[2]), 0);
			t1 = arraySeccion[pos].no;
			t2 = arraySeccion[pos].sa;
			t3 = arraySeccion[pos].si;
			document.querySelector('.texto').value = "Seccion: " + t1 + "  Area: " + t2 + "  Inercia: " + t3;
		break;		
		case 'p':
			read(arrayPunto, 'no', p, parseFloat(cmds[2]), 0);
			t1 = arrayPunto[pos].no;
			t2 = arrayPunto[pos].px;
			t3 = arrayPunto[pos].py;
			document.querySelector('.texto').value = "Punto: " + t1 + "  Abcisa: " + t2 + "  Ordenada: " + t3;
		break;		
			case 'e':
			read(arrayElemento, 'no', b, parseFloat(cmds[2]), 0);
			t1 = arrayElemento[pos].no;
			t2 = arrayElemento[pos].ei;
			t3 = arrayElemento[pos].ej;
			document.querySelector('.texto').value = "Elemento: " + t1 + "  Incio: " + t2 + "  Fin: " + t3;
		break;
		case 'd':
			read(arrayDesplazamiento, 'nodi', d, parseFloat(cmds[2]), parseFloat(cmds[3]));
			t1 = arrayDesplazamiento[pos].no;
			t2 = arrayDesplazamiento[pos].di;
			t3 = arrayDesplazamiento[pos].dm;
			document.querySelector('.texto').value = "Desplazamiento: " + t1 + "  Direccion: " + t2 + "  Magnitud: " + t3;
		break;
		case 'f':
			read(arrayFuerza, 'nodi', n, parseFloat(cmds[2]), parseFloat(cmds[3]));
			t1 = arrayFuerza[pos].no;
			t2 = arrayFuerza[pos].di;
			t3 = arrayFuerza[pos].fm;
			document.querySelector('.texto').value = "Fuerza: " + t1 + "  Direccion: " + t2 + "  Magnitud: " + t3;
		break;		
		case 'q':
			read(arrayCarga, 'no', q, parseFloat(cmds[2]), 0);
			t1 = arrayCarga[pos].no;
			t2 = arrayCarga[pos].qi;
			t3 = arrayCarga[pos].qj;
			document.querySelector('.texto').value = "Carga: " + t1 + "  Inicio: " + t2 + "  Fin: " + t3;
		break;
		case 'c':
			read(arrayCuerpo, 'no', c, parseFloat(cmds[2]), 0);
			t1 = arrayCuerpo[pos].no;
			t2 = arrayCuerpo[pos].cm;
			t3 = arrayCuerpo[pos].cs;
			document.querySelector('.texto').value = "Cuerpo: " + t1 + "  Material: " + t2 + "  Seccion: " + t3;
		break;
		default:
	}
}