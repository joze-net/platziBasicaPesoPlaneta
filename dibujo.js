    var usuario = prompt('cual es tu peso');//con promp solicitamos datos al usuario
	var planeta=prompt('elije el planeta\n1:es marte, 2 es jupiter')
	var peso = parseFloat(usuario);//convertimos lo que el susuario dgigito en un numero flotante
	var g_tierra = 9.8;
	var g_marte = 3.7;
	var g_jupiter = 24.8;
	var nombrePlaneta;
	var peso_final;

	if(planeta==1){
		peso_final= peso*g_marte/g_tierra;
		nombrePlaneta="marte";
	}else if(planeta==2){
		peso_final= peso*g_jupiter/g_tierra;
		nombrePlaneta="jupiter";
	}else {
		peso_final=1000000;
	}

	
	peso_final=parseFloat(peso_final.toFixed(2));//tofixed controla el numero de decimales
	document.write('<p>tu peso en '+nombrePlaneta+' <strong>'+peso_final+' Kilos </strong></p>');

	var dib=document.getElementById('dibujito');
	var lienzo=dib.getContext('2d');

	function dibujarLinea(xinicial, yinicial, xfinal, yfinal, color){
	    lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.moveTo(xinicial,yinicial);
		lienzo.lineTo(xfinal,yfinal);
		lienzo.stroke();
		lienzo.closePath();
		//console.log(lienzo);
	}

	var lineaLimite=20;
	var linea=0;

	while (linea<lineaLimite) {
		yinicial=linea*10;
		xfinal=(linea*10)+10;
		
		dibujarLinea(0,yinicial,xfinal,200,"blue");
		
		linea++;
	}
	dibujarLinea(1,1,1,200,"green");
	dibujarLinea(0,199,199,199,"green");

//voy a dar la vuelta al dibujo opuestamente
    linea=0;
    while (linea<lineaLimite) {
		yinicial=linea*10;
		xfinal=(linea*10)+10;
		
		dibujarLinea(200,yinicial,xfinal,0,"blue");
		
		linea++;
	}
	dibujarLinea(199,199,199,0,"green");
	dibujarLinea(199,0,0,0,"green");

//voy a mover el dibujo ahora a la parte superior
	linea=0;
    while (linea<lineaLimite) {
		yinicial=200-(linea*10);
		xfinal=(linea*10);
		
		dibujarLinea(0,yinicial,xfinal,0,"black");
		console.log(linea);
		linea++;
	}

	//voy a mover el dibujo ahora a la parte inferior
	linea=0;
    while (linea<lineaLimite) {
		xinicial=(linea*10);
		yfinal=200-(linea*10);
		
		dibujarLinea(xinicial,200,200,yfinal,"black");
		console.log(linea);
		linea++;
	}
	dibujarLinea(199,199,199,0,"green");
	dibujarLinea(199,0,0,0,"green");
	
	


	
	
	
    
