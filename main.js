document.querySelector('.boton').addEventListener('click', (e)=>{
	
	e.preventDefault();
	
	cmd = document.querySelector('.texto').value;
	cmds = cmd.split(' ');

	switch(cmds[0]){
		case 'dg':
		defgia(cmds[1], cmds[2], cmds[3]); /*comando.js*/
		dibgia(g-1); /*graficos*/
		txtgia(g-1); /*graficos*/
		break;
		case 'dm':
		defmat(cmds[1], cmds[2], cmds[3]); /*comando.js*/
		break;
		case 'ds':
		defsec(cmds[1], cmds[2], cmds[3]);
		break;
		case 'dp':
		defpto(cmds[1], cmds[2], cmds[3]);
		dibpto(p-1);
		txtpto(p-1);
		break;
		case 'de':
		defelm(cmds[1], cmds[2], cmds[3]);
		dibelm(b-1);
		txtelm(b-1);
		break;
		case 'ad':
		asgdes(cmds[1], cmds[2], cmds[3]);
		dibdes(d-1);
		txtdes(d-1);
		break;
		case 'af':
		asgfza(cmds[1], cmds[2], cmds[3]);
		dibfza(n-1);
		txtfza(n-1);
		break;
		case 'aq':
		asgcga(cmds[1], cmds[2], cmds[3]);
		dibcga(q-1);
		txtcga(q-1);
		break;
		case 'ac':
		asgcpo(cmds[1], cmds[2], cmds[3]);
		dibcpo(c-1);
		txtcpo(c-1);
		break;
		case 'ya':
		solucion();
		break;
		case 'dmf':
		alert(10);
		break;
		case 'dfc':
		alert(11);
		break;
		case 'dfa':
		alert(12);
		break;
		/*hasta aqui todos los comandos equivalen a CREATE del crud*/

		/*inicia visualizacion*/
		case 'enfocar':
			enfoca(cmds[1]); /*comando.js*/
			dibgiaT(); /*graficos.js ... aqui debera ir el redibujo de todos los canvas*/
			txtgiaT();
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
		case 'desplazar':
			desplaza(cmds[1], cmds[2]);
			dibgiaT();
			txtgiaT();
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
		case 'escalar':
			escalar(); /*Comando*/
		break;	
			
		/*fin visualizacion*/

		/*inicia DELETE del crud*/
		case 'b':
			borrar(cmds[1]); /*comandos.js*/
		break;

		/*inicia UPDATE del crud*/
		case 'e':
			editar(cmds[1]);
		break;

		/*inicia READ del crud*/
		case 'l':
			leer(cmds[1]);
		break;

		/*prueba*/
		case 'prueba':
			estructuraPrueba();
		break;
		default:
			alert(13);
	}
})