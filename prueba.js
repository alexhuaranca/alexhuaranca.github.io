function estructuraPrueba(){
		defgia(1, 1, 0);
		defgia(2, 1, 3);
		defgia(3, 1, 6);
		defgia(1, 2, 0);
		defgia(2, 2, 3);
		dibgia(g-1); 
		txtgia(g-1); 

		defmat(1, 2100000, 2100);
		defmat(2, 210000, 210);
		defmat(3, 21000, 21);

		defsec(1, 0.125, 0.0026);
		defsec(2, 0.025, 0.0011);
		defsec(3, 0.001, 0.0006);

		defpto(1, 0, 0);
		defpto(2, 6, 0);
		defpto(3, 0, 3);
		defpto(4, 3, 3);
		dibpto(p-1);
		txtpto(p-1);

		defelm(1, 1, 3);
		defelm(2, 2, 4);
		defelm(3, 3, 4);
		dibelm(b-1);
		txtelm(b-1);

		asgdes(1, 1, 0);
		asgdes(1, 2, 0);
		asgdes(1, 3, 0);
		asgdes(2, 1, 0);
		asgdes(2, 2, 0);
		dibdes(d-1);
		txtdes(d-1);

		asgfza(3, 1, 2);
		dibfza(n-1);
		txtfza(n-1);

		asgcga(3, -1, -1);
		dibcga(q-1);
		txtcga(q-1);

		asgcpo(1, 1, 1);
		asgcpo(2, 2, 2);
		asgcpo(3, 3, 3);
		dibcpo(c-1);
		txtcpo(c-1);

		enfoca(50);
		desplaza(5, 5);

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
}