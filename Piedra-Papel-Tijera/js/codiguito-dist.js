function numeroAleatorio(e,n){return numero=Math.floor(Math.random()*(n-e+1)+e)}function calcular(){var e=numeroAleatorio(0,2);("TIJERA"!=n||"PAPEL"!=n||"PIEDRA"!=n)&&(a.innerHTML="<p>Elegiste mal</p>",r.innerHTML="<p>Prueba de nuevo</p>",m.innerHTML="<p>Escoge una opción válida</p>"),e==piedra?m.innerHTML="<p>La máquina elegió a Piedra</p>":e==papel?m.innerHTML="<p>La máquina eligió Papel</p>":e==tijera&&(m.innerHTML="<p>La máquina eligió Tijera</p>");var n=t.value;n=n.toUpperCase(),t.value="","TIJERA"==n?(a.innerHTML="<p>Elegiste Tijera</p>",e==piedra?r.innerHTML="<p>Perdiste :(</p>":e==papel?r.innerHTML="<p>Ganaste :)</p>":e==tijera&&(r.innerHTML="<p>Empataste!!</p>")):"PIEDRA"==n?(a.innerHTML="<p>Elegiste Piedra</p>",e==piedra?r.innerHTML="<p>Empataste!!</p>":e==papel?r.innerHTML="<p>Perdiste :(</p>":e==tijera&&(r.innerHTML="<p>Ganaste :)</p>")):"PAPEL"==n&&(a.innerHTML="<p>Elegiste Papel</p>",0==e?r.innerHTML="<p>Ganaste :)</p>":1==e?r.innerHTML="<p>Empataste!!</p>":2==e&&(r.innerHTML="<p>Perdiste :(</p>"))}function inicio(){function e(e){13==e.keyCode&&calcular()}a=document.getElementById("agregar"),t=document.getElementById("text"),b=document.getElementById("boton"),m=document.getElementById("maquina"),r=document.getElementById("resultado"),b.addEventListener("click",calcular),t.addEventListener("keyup",e)}var t,b,a,numero,m,r,piedra=0,papel=1,tijera=2;