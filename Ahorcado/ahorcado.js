var hombre, c, espacio, b, palabra, x, o;

var lista = ["Amor", "Madera", "Oxido", "Taburete", "Mandarina", "Madrid", "Vigo", "Amazonia", "Textil", "Ropa", "Tenis", "Futbol", "Asturias", "Reloj", "Libro"];

function numeroAleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var Ahorcado = function(con)
{
	this.context  = con;
	this.maximo   = 5; 
	this.intentos = 0;
	this.vivo     = true;
	this.dibujar();
}
Ahorcado.prototype.dibujar = function()
{
	var dibujo = this.context;

	dibujo.beginPath();
	dibujo.moveTo(100, 100);
	dibujo.lineTo(100, 50);
	dibujo.lineTo(350, 50);
	dibujo.lineTo(350, 380);
	dibujo.strokeStyle = "#000";
	dibujo.lineWidth = "10";
	dibujo.stroke();
	dibujo.closePath();

	if(this.intentos > 0)
	{
		dibujo.beginPath();
		dibujo.arc(100, 140, 40, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "#F00";
		dibujo.lineWidth = "5";
		dibujo.stroke();
		dibujo.closePath();
		
		if(this.intentos > 1)
		{
			dibujo.beginPath();
			dibujo.moveTo(100, 180);
			dibujo.lineTo(100, 290);
			dibujo.strokeStyle = "#F00";
			dibujo.lineWidth = "5";
			dibujo.stroke();
			dibujo.closePath();
		
			if(this.intentos > 2)
			{
				dibujo.beginPath();
				dibujo.moveTo(50, 230);
				dibujo.lineTo(100, 200);
				dibujo.lineTo(150, 230);
				dibujo.strokeStyle = "#F00";
				dibujo.lineWidth = "5";
				dibujo.stroke();
				dibujo.closePath();

				if(this.intentos > 3)
				{
					dibujo.beginPath();
					dibujo.moveTo(50, 330);
					dibujo.lineTo(100, 290);
					dibujo.lineTo(150, 330);
					dibujo.strokeStyle = "#F00";
					dibujo.lineWidth = "5";
					dibujo.stroke();
					dibujo.closePath();
						
						if(this.intentos > 4)
						{
							dibujo.beginPath();
							dibujo.moveTo(105, 120);
							dibujo.lineTo(125, 145);
							dibujo.moveTo(125, 120);
							dibujo.lineTo(100, 145);
							dibujo.strokeStyle = "blue";
							dibujo.lineWidth = "5";
							dibujo.stroke();
							dibujo.closePath();

							dibujo.beginPath();
							dibujo.moveTo(80, 120);
							dibujo.lineTo(100, 145);
							dibujo.moveTo(100, 120);
							dibujo.lineTo(80, 145);
							dibujo.strokeStyle = "blue";
							dibujo.lineWidth = "5";
							dibujo.stroke();
							dibujo.closePath();

							pista.textContent = palabra;

						}
					}
				}
		
			}
		}
}

Ahorcado.prototype.trazar = function()
{
	this.intentos++;
	if(this.intentos >= this.maximo)
	{
		this.vivo = false;
	}
	this.dibujar();
}

function inicio()
{
	c = document.getElementById("texto");
	b = document.getElementById("boton");
	var canvas  = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	hombre  = new Ahorcado(context);

	o = document.getElementById("otra");

	o.addEventListener("click", recargar);

    c.addEventListener("keyup", secondDisparo);

    function secondDisparo( evt ){
        if(evt.keyCode == 13){
            agregarLetra();
        }
    }

	x = numeroAleatorio(0,14);

	palabra = lista[x];

	palabra = palabra.toUpperCase();

	espacio = new Array(palabra.length);

	b.addEventListener("click", agregarLetra);

	mostrarPista(espacio);
}

function recargar()
{
	window.location.reload();
}

function agregarLetra()
{
	var letra = c.value;
	c.value = "";
	mostrarPalabra(palabra, hombre, letra);
}

function mostrarPalabra(palabra, ahorcado, letra)
{
	var encontrado = false;
	var p;
	letra = letra.toUpperCase();
	for(p in palabra)
	{
		if(letra == palabra[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
		
	}
	mostrarPista(espacio);

	if(!encontrado)
	{
		ahorcado.trazar();
	}
}


function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var largo = espacio.length;

	for(i = 0; i<largo; i++)
	{
		if(espacio[i] != undefined)
		{
			texto += espacio[i] + " ";
		}
		else
		{
			texto += "_ ";
		}
	}
	pista.textContent = texto;
}