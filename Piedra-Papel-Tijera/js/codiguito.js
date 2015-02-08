var t; var b; var a; var numero; var m; var r;

function numeroAleatorio(minimo,maximo)
{
	numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo );
	return numero
}

var piedra = 0;
var papel = 1;
var tijera = 2;



function calcular()
{
	var opcionMaquina = numeroAleatorio(0,2);

	if(dato != "TIJERA" || dato != "PAPEL" || dato != "PIEDRA"){
		a.innerHTML = "<p>Elegiste mal</p>";
		r.innerHTML = "<p>Prueba de nuevo</p>";
		m.innerHTML = "<p>Escoge una opción válida</p>";
	}

	if(opcionMaquina == piedra)
	{
		m.innerHTML = "<p>La máquina elegió a Piedra</p>";
	}
	else if(opcionMaquina == papel)
	{
		m.innerHTML = "<p>La máquina eligió Papel</p>";
	}
	else if(opcionMaquina == tijera)
	{
		m.innerHTML = "<p>La máquina eligió Tijera</p>";
	}

	var dato = t.value;
	dato = dato.toUpperCase();
	t.value = "";

	if(dato == "TIJERA")
	{
		a.innerHTML = "<p>Elegiste Tijera</p>";
		if(opcionMaquina == piedra)
		{
			r.innerHTML = "<p>Perdiste :(</p>";
		}
		else if(opcionMaquina == papel){
			r.innerHTML = "<p>Ganaste :)</p>";
		}
		else if(opcionMaquina == tijera)
		{
			r.innerHTML = "<p>Empataste!!</p>"
		}
	}
	else if(dato == "PIEDRA")
	{
		a.innerHTML = "<p>Elegiste Piedra</p>";
		if(opcionMaquina == piedra)
		{
			r.innerHTML = "<p>Empataste!!</p>";
		}
		else if(opcionMaquina == papel){
			r.innerHTML = "<p>Perdiste :(</p>";
		}
		else if(opcionMaquina == tijera)
		{
			r.innerHTML = "<p>Ganaste :)</p>"
		}
	}
	else if(dato == "PAPEL")
	{
		a.innerHTML = "<p>Elegiste Papel</p>";
		if(opcionMaquina == 0)
		{
			r.innerHTML = "<p>Ganaste :)</p>";
		}
		else if(opcionMaquina == 1){
			r.innerHTML = "<p>Empataste!!</p>";
		}
		else if(opcionMaquina == 2)
		{
			r.innerHTML = "<p>Perdiste :(</p>"
		}
	}




}

function inicio()
{
	a = document.getElementById("agregar");
	t = document.getElementById("text");
	b = document.getElementById("boton");
	m = document.getElementById("maquina");
	r = document.getElementById("resultado");

	b.addEventListener("click", calcular);

    t.addEventListener('keyup', secondDisparo);

    function secondDisparo( evt ){
        if(evt.keyCode == 13){
            calcular()
        }
    }
}