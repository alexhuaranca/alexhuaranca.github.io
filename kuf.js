function solucion(){
/*CODIGOS DE ENSAMBLE GLOBALES*/	
	codEG();

/*MATRICES GLOBALES*/
	matKUF();

/*HALLAMOS LAS RIGIDECES ELEMENTALES*/
	for (let i = 0; i < b; i++) {
		matKe(i);
	}
/*
	console.log(Kcc);
	console.log(Kcd);
	console.log(Kdc);
	console.log(Kdd);
*/

/*HALLAMOS LAS FUERZAS NODALES*/
	for (let i = 0; i < n; i++) {
		vecFn(i);
	}

/*HALLAMOS LAS FUERZAS ELEMENTALES*/	
	for (let i = 0; i < q; i++) {
		vecFe(i);
	}

/*HALLAMOS LAS FUERZAS CONOCIDAS*/
	matXvec(Kdc, Uc, ved.length, vec.length, Fmv);
	for (let i = 0; i < ved.length; i++) {
		Fc[i] = Fc[i] - Fmv[i];
	}
/*
	console.log(Fc);
*/

/*RESOLVEMOS*/
	gauss(Kdd, Fc, ved.length, Ud);

	console.log("DESPLAZAMIENTOS");
	console.log(Ud);


/*HALLAMOS LAS REACCIONES*/
	matXvec(Kcc, Uc, vec.length, vec.length, Fr1);
	matXvec(Kcd, Ud, vec.length, ved.length, Fr2);
	for (let i = 0; i < vec.length; i++) {
		Fd[i] = Fr1[i] + Fr2[i];
	}

	console.log("REACCIONES:");
	console.log(Fd);


/*HALLAMOS LAS FUERZAS EN LOS ELEMENTOS*/
	for (let i = 0; i < b; i++) {
		Felm(i);
	}

	console.log("FUERZAS INTERNAS");
	console.log(Vres);
	

/*MOSTRAMOS LOS DIAGRAMAS*/	

}

/*----------Modelo Matematico----------*/

function codEG(){
	/*creamos vec*/
	for (let i = 0; i < d; i++) {
		switch(arrayDesplazamiento[i].di){
			case 1:
			vec[i] = 3 * arrayDesplazamiento[i].no - 2;
			break;
			case 2:
			vec[i] = 3 * arrayDesplazamiento[i].no - 1;
			break;
			case 3:
			vec[i] = 3 * arrayDesplazamiento[i].no;
			break;
			default:
		}
	}
	/*console.log(vec);*/

	/*creamos ved*/
	for (let i = 0; i < p; i++) {
		ved[3*(i+1)-3] = 3 * arrayPunto[i].no - 2;
		ved[3*(i+1)-2] = 3 * arrayPunto[i].no - 1;
		ved[3*(i+1)-1] = 3 * arrayPunto[i].no;
	}
	/*console.log(ved);*/

	for (let i = 0; i < 3*p; i++) {
		for (let j = 0; j < d; j++) {
			if(vec[j] === ved[i]){
				delete ved[i];
				ved = ved.filter((valor)=>{
					return valor != undefined;
				})
			}
		}
	}
	/*console.log(ved);*/
}

function matKUF(){
	/*creamos Kcc*/
	for (let i = 0; i < d; i++) {		
		Kcc[i] = new Array(d-1);
	}

	for (let i = 0; i < d; i++) {
		for (let j = 0; j < d; j++) {
			Kcc[i][j] = 0;
		}
	}
	/*console.log(Kcc);	*/

	/*creamos Kcd*/
	for (let i = 0; i < d; i++) {
		Kcd[i] = new Array(ved.length -1);
	}

	for(let i = 0; i< d; i++){
		for(let j = 0; j< ved.length; j++){
			Kcd[i][j]=0;
		}
	}
	/*console.log(Kcd);*/

	/*creamod Kdc*/
	for(let i = 0; i < ved.length; i++){
		Kdc[i] = new Array(d-1);
	}

	for(let i = 0; i < ved.length; i++){
		for(let j = 0; j < d; j++){
			Kdc[i][j] = 0;
		}
	}
	/*console.log(Kdc);*/

	/*creamos Kdd*/
	for(let i = 0; i < ved.length; i++){
		Kdd[i] = new Array(ved.length -1);
	}

	for(let i = 0; i < ved.length; i++){
		for(let j = 0; j < ved.length; j++){
			Kdd[i][j] = 0;
		}
	}
	/*console.log(Kdd);*/

	/*creamos Uc*/
	for (let i = 0; i < d; i++) {
		Uc[i] = arrayDesplazamiento[i].dm;
	}
	/*console.log(Uc)*/

	/*creamos Ud*/
	for (let i = 0; i < ved.length; i++) {
		Ud[i]=0;
	}
	/*console.log(Ud);*/

	/*Creamos Fd*/
	for (let i = 0; i < d; i++) {
		Fd[i]=0;
	}
	/*console.log(Fd);*/

	/*Creamos Fc*/
	for (let i = 0; i < ved.length; i++) {
		Fc[i]=0;
	}
	/*console.log(Fc);*/
}

/*----------Matriz de Rigidez----------*/

function matKe(elm){
	/*codigos de ensamble de */
	codEL(elm); 
	
	/*buscamos las propiedades read(array, opcion, cont, comp1, comp2 )*/
	read(arrayCuerpo, 'no', c, arrayElemento[elm].no, 0);
	read(arrayMaterial, 'no', m, arrayCuerpo[pos].cm, 0);
	E=arrayMaterial[pos].me;

	read(arrayCuerpo, 'no', c, arrayElemento[elm].no, 0);
	read(arraySeccion, 'no', s, arrayCuerpo[pos].cm, 0);
	A=arraySeccion[pos].sa;
	I=arraySeccion[pos].si;

	/*buscamos la longitud y los catetos*/
	read(arrayElemento, 'no', b, arrayElemento[elm].no, 0);
	read(arrayPunto, 'no', p, arrayElemento[pos].ei ,0);	
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;

	read(arrayElemento, 'no', b, arrayElemento[elm].no, 0 );
	read(arrayPunto, 'no', p, arrayElemento[pos].ej ,0);	
	xe2 = arrayPunto[pos].px;
	ye2 = arrayPunto[pos].py;

	L = Math.sqrt( (xe2-xe1)**2 + (ye2-ye1)**2);
	C = (xe2 - xe1)/L;
	S = (ye2 - ye1)/L;

	ke = C**2 * E*A/L + S**2 * 12 * E * I / L**3;
	lanzadorRigidez(ce[0], ce[0], ke);
/*kr[0][0]=ke;*/
	ke = C*S * E*A/L - C*S * 12 * E * I / L**3;
	lanzadorRigidez(ce[0], ce[1], ke);
/*kr[0][1]=ke;*/
	ke = -S * 6 * E * I / L**2;
	lanzadorRigidez(ce[0], ce[2], ke);
/*kr[0][2]=ke;*/
	ke = -(C**2) * E*A/L - (S**2) * 12 * E * I / L**3;
	lanzadorRigidez(ce[0], ce[3], ke);
/*kr[0][3]=ke;*/
	ke = -C*S * E*A/L + C*S * 12 * E * I / L**3;
	lanzadorRigidez(ce[0], ce[4], ke);
/*kr[0][4]=ke;*/
	ke = -S * 6 * E * I / L**2;
	lanzadorRigidez(ce[0], ce[5], ke);	
/*kr[0][5]=ke;*/
	/**********************************/

	ke = C*S * E*A/L - C*S * 12 * E * I / L**3;
	lanzadorRigidez(ce[1], ce[0], ke);
/*kr[1][0]=ke;*/
	ke = S**2 * E*A/L + C**2 * 12 * E * I / L**3;
	lanzadorRigidez(ce[1], ce[1], ke);
/*kr[1][1]=ke;*/
	ke = C * 6 * E * I / L**2;
	lanzadorRigidez(ce[1], ce[2], ke);
/*kr[1][2]=ke;*/
	ke = -C*S * E*A/L + C*S * 12 * E * I / L**3;
	lanzadorRigidez(ce[1], ce[3], ke);
/*kr[1][3]=ke;*/
	ke = -(S**2) * E*A/L - (C**2) * 12 * E * I / L**3;
	lanzadorRigidez(ce[1], ce[4], ke);
/*kr[1][4]=ke;*/
	ke = C * 6 * E * I / L**2;
	lanzadorRigidez(ce[1], ce[5], ke);	
/*kr[1][5]=ke;*/
	/**********************************/

	ke = -S * 6 * E * I / L**2;
	lanzadorRigidez(ce[2], ce[0], ke);
/*kr[2][0]=ke;*/
	ke = C * 6 * E * I / L**2 ;
	lanzadorRigidez(ce[2], ce[1], ke);
/*kr[2][1]=ke;*/
	ke = 4 * E * I / L;
	lanzadorRigidez(ce[2], ce[2], ke);
/*kr[2][2]=ke;*/
	ke = S * 6 * E * I / L**2;
	lanzadorRigidez(ce[2], ce[3], ke);
/*kr[2][3]=ke;*/
	ke = -C * 6 * E * I / L**2;
	lanzadorRigidez(ce[2], ce[4], ke);
/*kr[2][4]=ke;*/
	ke = 2 * E * I / L;
	lanzadorRigidez(ce[2], ce[5], ke);	
/*kr[2][5]=ke;*/
	/**********************************/

	ke = -(C**2) * E*A/L - (S**2) * 12 * E * I / L**3;
	lanzadorRigidez(ce[3], ce[0], ke);
/*kr[3][0]=ke;*/
	ke = -C*S * E*A/L + C*S * 12 * E * I / L**3;
	lanzadorRigidez(ce[3], ce[1], ke);
/*kr[3][1]=ke;*/
	ke = S * 6 * E * I / L**2;
	lanzadorRigidez(ce[3], ce[2], ke);
/*kr[3][2]=ke;*/
	ke = C**2 * E*A/L + S**2 * 12 * E * I / L**3;
	lanzadorRigidez(ce[3], ce[3], ke);
/*kr[3][3]=ke;*/
	ke = C*S * E*A/L - C*S * 12 * E * I / L**3;
	lanzadorRigidez(ce[3], ce[4], ke);
/*kr[3][4]=ke;*/
	ke = S * 6 * E * I / L**2;
	lanzadorRigidez(ce[3], ce[5], ke);	
/*kr[3][5]=ke;*/
	/**********************************/

	ke = -C*S * E*A/L + C*S * 12 * E * I / L**3;
	lanzadorRigidez(ce[4], ce[0], ke);
/*kr[4][0]=ke;*/
	ke = -(S**2) * E*A/L - (C**2) * 12 * E * I / L**3;
	lanzadorRigidez(ce[4], ce[1], ke);
/*kr[4][1]=ke;*/
	ke = -C * 6 * E * I / L**2;
	lanzadorRigidez(ce[4], ce[2], ke);
/*kr[4][2]=ke;*/
	ke = C*S * E*A/L - C*S * 12 * E * I / L**3;
	lanzadorRigidez(ce[4], ce[3], ke);
/*kr[4][3]=ke;*/
	ke = (S**2) * E*A/L + C**2 * 12 * E * I / L**3;
	lanzadorRigidez(ce[4], ce[4], ke);
/*kr[4][4]=ke;*/
	ke = -C * 6 * E * I / L**2;
	lanzadorRigidez(ce[4], ce[5], ke);	
/*kr[4][5]=ke;*/
	/**********************************/

	ke = -S * 6 * E * I / L**2;
	lanzadorRigidez(ce[5], ce[0], ke);
/*kr[5][0]=ke;*/
	ke = C * 6 * E * I / L**2 ;
	lanzadorRigidez(ce[5], ce[1], ke);
/*kr[5][1]=ke;*/
	ke = 2 * E * I / L;
	lanzadorRigidez(ce[5], ce[2], ke);
/*kr[5][2]=ke;*/
	ke = S * 6 * E * I / L**2;
	lanzadorRigidez(ce[5], ce[3], ke);
/*kr[5][3]=ke;*/
	ke = -C * 6 * E * I / L**2;
	lanzadorRigidez(ce[5], ce[4], ke);
/*kr[5][4]=ke;*/
	ke = 4 * E * I / L;
	lanzadorRigidez(ce[5], ce[5], ke);	
/*kr[5][5]=ke;*/
	/**********************************/
}

function codEL(i){ 
	read(arrayPunto, 'no', p, arrayElemento[i].ei, 0);
	ce[0] = 3*arrayPunto[pos].no - 2;
	ce[1] = 3*arrayPunto[pos].no - 1;
	ce[2] = 3*arrayPunto[pos].no;
	read(arrayPunto, 'no', p, arrayElemento[i].ej, 0);
	ce[3] = 3*arrayPunto[pos].no - 2;
	ce[4] = 3*arrayPunto[pos].no - 1;
	ce[5] = 3*arrayPunto[pos].no;	
}

function lanzadorRigidez(fil, col, k){
	/*lanzar a Kcc*/
	for (let i = 0; i < vec.length; i++) {
		if(fil === vec[i]){
			for (let j = 0; j < vec.length; j++) {
				if(col === vec[j]){
					Kcc[i][j] = Kcc[i][j] + k;
				}
			}	
		}		
	}

	/*lanzar a Kcd*/
	for (let i = 0; i < vec.length; i++) {
		if(fil === vec[i]){
			for (let j = 0; j < ved.length; j++) {
				if(col === ved[j]){
					Kcd[i][j] = Kcd[i][j] + k;
				}
			}	
		}	
	}

	/*lanzar a Kdc*/
	for (let i = 0; i < ved.length; i++) {
		if(fil === ved[i]){
			for (let j = 0; j < vec.length; j++) {
				if(col === vec[j]){
					Kdc[i][j] = Kdc[i][j] + k;
				}
			}	
		}
		
	}

	/*lanzar a Kdd*/	
	for (let i = 0; i < ved.length; i++) {
		if(fil === ved[i]){
			for (let j = 0; j < ved.length; j++) {
				if(col === ved[j]){
					Kdd[i][j] = Kdd[i][j] + k;
				}
			}	
		}
		
	}
}

/*----------Vector de Fuerzas----------*/

function vecFn(fza){
	let code;
	switch(arrayFuerza[fza].di){
		case 1:
			code = 3*arrayFuerza[fza].no -2;
		break;
		case 2:
			code = 3*arrayFuerza[fza].no -1;
		break;
		case 3:
			code = 3*arrayFuerza[fza].no;
		break;
		default:
	}
	lanzadorFuerza(code, arrayFuerza[fza].fm);
}

function vecFe(cga){
	/*codigo de ensamble*/
	read(arrayElemento,'no' ,b , arrayCarga[cga].no, 0);
	codEL(pos);

	/*hallamos L*/
	read(arrayElemento,'no' ,b , arrayCarga[cga].no, 0);
	read(arrayPunto, 'no', p, arrayElemento[pos].ei, 0);	
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;

	read(arrayElemento,'no' ,b , arrayCarga[cga].no, 0);
	read(arrayPunto, 'no', p, arrayElemento[pos].ej, 0);	
	xe2 = arrayPunto[pos].px;
	ye2 = arrayPunto[pos].py;

	L = Math.sqrt( (xe2-xe1)**2 + (ye2-ye1)**2);
	C = (xe2 - xe1)/L;
	S = (ye2 - ye1)/L;

	/*hallamos qi qj*/	

	Vi0 = (arrayCarga[cga].qi * L * 7 + arrayCarga[cga].qj * L * 3)/20;	
	Mi0 = arrayCarga[cga].qi * L**2 / 20 + arrayCarga[cga].qj * L**2 /30;
	lanzadorFuerza(ce[0], S*Vi0); /*falta testear*/
	lanzadorFuerza(ce[1], C*Vi0);
	lanzadorFuerza(ce[2], Mi0);

	Vj0 = (arrayCarga[cga].qi * L * 3 + arrayCarga[cga].qj * L * 7)/20;	
	Mj0 = -(arrayCarga[cga].qi * L**2 / 30 + arrayCarga[cga].qj * L**2 /20);
	lanzadorFuerza(ce[3], S*Vj0);
	lanzadorFuerza(ce[4], C*Vj0);
	lanzadorFuerza(ce[5], Mj0);	
}

function lanzadorFuerza(fil, f){
	/*lanzar Fd*/
	for (let i = 0; i < vec.length ; i++) {
		if(fil === vec[i]){
			Fd[i]= Fd[i] + f;
		}
	}	

	/*lanzar Fc*/
	for (let i = 0; i < ved.length ; i++) {
		if(fil === ved[i]){
			Fc[i]= Fc[i] + f;
		}
	}	
}

function matXvec(mat, vec, fil, col, pro){
	for (let i = 0; i < fil; i++) {
		pro[i] = 0;
	}	

	for(let i = 0; i < fil; i++){
		for (let j = 0; j < col; j++) {
			pro[i] = pro[i] + mat[i][j]*vec[j];
		}
	}
	
}

function gauss(mat, vec, dim, sol){
	let tr;
	/*Eliminacion frontal*/
	for (let h = 0; h < dim-1; h++) {
		for (let i = h + 1; i < dim; i++) {
			tr = - mat[i][h]/mat[h][h];
			mat[i][h]=0;
			for(let j = h + 1; j < dim; j++){
				mat[i][j] = mat[h][j]*tr + mat[i][j];
			}
			vec[i] = vec[h]*tr + vec[i];
		}
	}
	/*Sustitucion inversa*/
	sol[dim - 1] = vec[dim - 1] / mat[dim - 1][dim - 1];
	for (let h = dim - 2; h >= 0; h--) {		
		sol[h] = vec[h]/mat[h][h];
		for(let j = dim - 1; j >= h+1; j--){
			sol[h] = sol[h]- mat[h][j]*sol[j]/mat[h][h];		
		}				
	}
}

function Felm(elm){
	/*codigos de ensamble de */
	codEL(elm); 
/*
console.log(ce[0] + ',' + ce[1] + ',' + ce[2] + ',' + ce[3] + ',' + ce[4] + ',' + ce[5]);	
*/
	/*Desplazamientos globales*/
	ui = Des(ce[0], vec, ved);
	vi = Des(ce[1], vec, ved);
	wi = Des(ce[2], vec, ved);
	uj = Des(ce[3], vec, ved);
	vj = Des(ce[4], vec, ved);
	wj = Des(ce[5], vec, ved);
/*
console.log(ui + ',' + vi + ',' + wi + ',' + uj + ',' + vj + ',' + wj);	
*/	
	/*buscamos las propiedades read(array, opcion, cont, comp1, comp2 )*/
	read(arrayCuerpo, 'no', c, arrayElemento[elm].no, 0);
	read(arrayMaterial, 'no', m, arrayCuerpo[pos].cm, 0);
	E=arrayMaterial[pos].me;

	read(arrayCuerpo, 'no', c, arrayElemento[elm].no, 0);
	read(arraySeccion, 'no', s, arrayCuerpo[pos].cm, 0);
	A=arraySeccion[pos].sa;
	I=arraySeccion[pos].si;

	/*buscamos la longitud y los catetos*/
	read(arrayElemento, 'no', b, arrayElemento[elm].no, 0);
	read(arrayPunto, 'no', p, arrayElemento[pos].ei ,0);	
	xe1 = arrayPunto[pos].px;
	ye1 = arrayPunto[pos].py;

	read(arrayElemento, 'no', b, arrayElemento[elm].no, 0 );
	read(arrayPunto, 'no', p, arrayElemento[pos].ej ,0);	
	xe2 = arrayPunto[pos].px;
	ye2 = arrayPunto[pos].py;

	L = Math.sqrt( (xe2-xe1)**2 + (ye2-ye1)**2);
	C = (xe2 - xe1)/L;
	S = (ye2 - ye1)/L;
/*
console.log('barra: ' + elm);
console.log('elasticidad: ' + E);
console.log('area: ' + A);
console.log('inercia: ' + I);
console.log('longitud: ' + L);
console.log('coseno: ' + C);
console.log('seno: ' + S);
*/
	/* buscamos las fuerzas iniciales*/
	Fij0(elm);
/*
console.log('axial i: ' + Pi0);
console.log('corte i: ' + Vi0);
console.log('momento i: ' + Mi0);
console.log('axial j: ' + Pj0);
console.log('corte j: ' + Vj0);
console.log('momento j: ' + Mj0);
*/
	/*fuerzas elementales*/
	let fzaElm = new Array();
	Pi = Pi0 + (C*(ui-uj)+S*(vi-vj))*E*A/L;
	Vi = Vi0 + (S*(-ui+uj)+C*(vi-vj))*12*E*I/L**3 + (wi+wj)*6*E*I/L**2;
	Mi = Mi0 + (S*(-ui+uj)+C*(vi-vj))*6*E*I/L**2 + (2*wi+wj)*2*E*I/L;
	Pj = Pj0 + (C*(-ui+uj)+S*(-vi+vj))*E*A/L;
	Vj = Vj0 + (S*(ui-uj)+C*(-vi+vj))*12*E*I/L**3 - (wi+wj)*6*E*I/L**2;
	Mj = Mj0 + (S*(-ui+uj)+C*(vi-vj))*6*E*I/L**2 + (wi+2*wj)*2*E*I/L;
	fzaElm[0] = Pi;
	fzaElm[1] = Vi;
	fzaElm[2] = Mi;
	fzaElm[3] = Pj;
	fzaElm[4] = Vj;
	fzaElm[5] = Mj;
	Vres[elm] = fzaElm;
/*
console.log('axial i: ' + Pi);
console.log('corte i: ' + Vi);
console.log('momento i: ' + Mi);
console.log('axial j: ' + Pj);
console.log('corte j: ' + Vj);
console.log('momento j: ' + Mj);
*/
}

function Des(co, vd1, vd2){
	let di;

	for (let i = 0; i < vd1.length; i++) {
		if (co === vd1[i]) {
			di = Uc[i];
			break;
		} 	
	}

	for (let j = 0; j < vd2.length; j++) {
		if (co === vd2[j]) {
			di = Ud[j];
			break;
		}
	}	

	return di;
}

function Fij0(bar){
	Pi0 = 0;
	Vi0 = 0;	
	Mi0 = 0;	
	Pj0 = 0;
	Vj0 = 0;	
	Mj0 = 0;
	for (let i = 0; i < q; i++) {
		if (arrayElemento[bar].no === arrayCarga[i].no) {
			Pi0 = 0;
			Vi0 = -(arrayCarga[i].qi * L * 7 + arrayCarga[i].qj * L * 3)/20;	
			Mi0 = -(arrayCarga[i].qi * L**2 / 20 + arrayCarga[i].qj * L**2 /30);	
			Pj0 = 0;
			Vj0 = -(arrayCarga[i].qi * L * 3 + arrayCarga[i].qj * L * 7)/20;	
			Mj0 = (arrayCarga[i].qi * L**2 / 30 + arrayCarga[i].qj * L**2 /20);
			break;
		} 
	}
}

function DMF(elm){

}

function DFC(elm){

}

function DFA(elm){

}

function DCE(elm){
	
}
