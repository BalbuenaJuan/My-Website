var tablero;

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var teclas = {
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	LEFT: 37
}

var zelda = {
	x: 100,
	y: 100,
	tifisURL: "diana-frente.png", 
	velocidad: 15,
	frenteOK: false,
	derOK: false,
	izqOK: false,
	atrasOK: false
};

var liz = {
	lizURL: "liz.png",
	lizOK: false,
	x: 400,
	y: 200
}

function inicio()
{	
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	zelda.frente = new Image();
	zelda.frente.src = zelda.tifisURL;
	zelda.frente.onload = confirmarFrente; 

	zelda.der = new Image();
	zelda.der.src = "diana-der.png";
	zelda.der.onload = confirmarDer; 

	zelda.izq = new Image();
	zelda.izq.src = "diana-izq.png";
	zelda.izq.onload = confirmarIzq; 

	zelda.atras = new Image();
	zelda.atras.src = "diana-atras.png";
	zelda.atras.onload = confirmarAtras; 

	liz.imagen = new Image();
	liz.imagen.src = liz.lizURL;
	liz.imagen.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);

	
}

function teclado(evento)
{
	var codigo = evento.keyCode;
	if(codigo == teclas.UP)
	{
		zelda.y -= zelda.velocidad;
	}
	if(codigo == teclas.RIGHT)
	{
		zelda.x += zelda.velocidad;
	}
	if(codigo == teclas.DOWN)
	{
		zelda.y += zelda.velocidad;
	}
	if(codigo == teclas.LEFT)
	{
		zelda.x -= zelda.velocidad;
	}
	dibujar(codigo);
}

function confirmarDer()
{
	zelda.derOK = true;
	dibujar();
}

function confirmarIzq()
{
	zelda.izqOK = true;
	dibujar();
}

function confirmarAtras()
{
	zelda.atrasOK = true;
	dibujar();
}

function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}
function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente()
{
	zelda.frenteOK = true;
	dibujar();
}

function dibujar(direccion)
{	
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}
	var zeldaOrientada = zelda.frente
	if(zelda.derOK && zelda.izqOK && zelda.atrasOK && zelda.frenteOK)
	{
		if(direccion == teclas.DOWN || direccion == undefined)
		{
			zeldaOrientada = zelda.frente;
		}
		if(direccion == teclas.RIGHT)
			{
				zeldaOrientada = zelda.der;
			}
		if(direccion == teclas.UP)
			{
				zeldaOrientada = zelda.atras;	
			}
		if(direccion == teclas.LEFT)
			{
				zeldaOrientada = zelda.izq;
			}	
	}
			tablero.drawImage(zeldaOrientada, zelda.x, zelda.y);
	
	if(liz.lizOK)
	{
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
}














































// var tablero;
// var teclas =
// {
//     UP: 38,
//     DOWN: 40,
//     LEFT: 37,
//     RIGHT: 39
// };
// var fondo = {
//     imagenURL: "fondo.png",
//     imagenOK: false
// };
// var tifis = {
//     frenteOK: false,
//     atrasOK: false,
//     derOK: false,
//     izqOK: false,
//     velocidad: 20,
//     x: 0,
//     y: 0
// };
// var liz = {
//     imagenOK: false,
//     x: 400,
//     y: 200
// };
// function inicio()
// {
//     var canvas = document.getElementById("campo");
//     tablero = canvas.getContext("2d");

//     fondo.imagen = new Image();
//     fondo.imagen.src = fondo.imagenURL;
//     fondo.imagen.onload = confirmarFondo;

//     tifis.frente = new Image();
//     tifis.frente.src = "diana-frente.png";
//     tifis.frente.onload = confirmarFrente;

//     tifis.atras = new Image();
//     tifis.atras.src = "diana-atras.png";
//     tifis.atras.onload = confirmarAtras;

//     tifis.izq = new Image();
//     tifis.izq.src = "diana-izq.png";
//     tifis.izq.onload = confirmarIzq;

//     tifis.der = new Image();
//     tifis.der.src = "diana-der.png";
//     tifis.der.onload = confirmarDer;

//     liz.imagen = new Image();
//     liz.imagen.src = "liz.png";
//     liz.imagen.onload = confirmarLiz;

//     document.addEventListener("keydown", teclado);

// }
// function teclado(evento)
// {
//     var codigo = evento.keyCode;
//     if(codigo == teclas.UP)
//     {
//         tifis.y -= tifis.velocidad;
//     }
//     if(codigo == teclas.DOWN)
//     {
//         tifis.y += tifis.velocidad;
//         if(tifis.y>300)
//         {
//             tifis.y -= tifis.velocidad;
//         }
//     }
//     if(codigo == teclas.LEFT)
//     {
//         tifis.x -= tifis.velocidad;
//     }
//     if(codigo == teclas.RIGHT)
//     {
//         tifis.x += tifis.velocidad;
//     }
//     dibujar(codigo);
// }
// function confirmarFondo()
// {
//     fondo.imagenOK = true;
//     dibujar();
// }

// function confirmarFrente()
// {
//     tifis.frenteOK = true;
//     dibujar();
// }
// function confirmarAtras()
// {
//     tifis.atrasOK = true;
//     dibujar();
// }
// function confirmarIzq()
// {
//     tifis.izqOK = true;
//     dibujar();
// }
// function confirmarDer()
// {
//     tifis.derOK = true;
//     dibujar();
// }

// function confirmarLiz()
// {
//     liz.imagenOK = true;
//     dibujar();
// }

// function dibujar(direccion)
// {
//     if(fondo.imagenOK)
//     {
//         tablero.drawImage(fondo.imagen, 0, 0);    
//     }

//     var tifisOrientada = tifis.frente;

//     if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
//     {
//         if(direccion == teclas.DOWN || direccion == undefined)
//         {
//             tifisOrientada = tifis.frente;
//         }
//         else if(direccion == teclas.UP)
//         {
//             tifisOrientada = tifis.atras;
//         }
//         else if(direccion == teclas.LEFT)
//         {
//             tifisOrientada = tifis.izq;
//         }
//         else if(direccion == teclas.RIGHT)
//         {
//             tifisOrientada = tifis.der;
//         }
//     }
//     tablero.drawImage(tifisOrientada, tifis.x, tifis.y);

//     if(liz.imagenOK)
//     {
//         tablero.drawImage(liz.imagen, liz.x, liz.y);
//     }
// }