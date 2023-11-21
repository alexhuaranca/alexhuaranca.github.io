function canvasDimension(){
			B = document.querySelector('.cuerpo').clientWidth;
			H = document.querySelector('.cuerpo').clientHeight;

			let cdg = document.querySelector('.c_dg');		
			let ctg = document.querySelector('.c_tg');
			let cdp = document.querySelector('.c_dp');
			let ctp = document.querySelector('.c_tp');
			let cde = document.querySelector('.c_de');
			let cte = document.querySelector('.c_te');
			let cdd = document.querySelector('.c_dd');
			let ctd = document.querySelector('.c_td');
			let cdf = document.querySelector('.c_df');
			let ctf = document.querySelector('.c_tf');
			let cdq = document.querySelector('.c_dq');
			let ctq = document.querySelector('.c_tq');
			let cdc = document.querySelector('.c_dc');
			let ctc = document.querySelector('.c_tc');

			cdg.setAttribute("width",B);
			cdg.setAttribute("height",H);
			ctg.setAttribute("width",B);
			ctg.setAttribute("height",H);

			cdp.setAttribute('width',B);
			cdp.setAttribute('height',H);
			ctp.setAttribute('width',B);
			ctp.setAttribute('height',H);

			cde.setAttribute('width',B);
			cde.setAttribute('height',H);
			cte.setAttribute('width',B);
			cte.setAttribute('height',H);

			cdd.setAttribute("width",B);
			cdd.setAttribute("height",H);
			ctd.setAttribute("width",B);
			ctd.setAttribute("height",H);

			cdf.setAttribute('width',B);
			cdf.setAttribute('height',H);
			ctf.setAttribute('width',B);
			ctf.setAttribute('height',H);

			cdq.setAttribute('width',B);
			cdq.setAttribute('height',H);
			ctq.setAttribute('width',B);
			ctq.setAttribute('height',H);

			cdc.setAttribute('width',B);
			cdc.setAttribute('height',H);
			ctc.setAttribute('width',B);
			ctc.setAttribute('height',H);

			/*aqui faltan los canvas de dmf ....*/
		}		
		window.onload = canvasDimension;