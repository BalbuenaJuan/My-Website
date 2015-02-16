$(document).ready(function(){

	var message = $("#message");
	var name = $("#name");
	var email = $("#email");

	var menu = $('#menu');
  	var contenedor = $('#menu-contenedor');
  	var menu_offset = menu.offset();

  	$(window).on('scroll', function() {
    	if($(window).scrollTop() > menu_offset.top) {
     		 menu.addClass('menu-fijo');
    	} else {
      		menu.removeClass('menu-fijo');
    	}
  	});

	$('#skills').click(function() {
		$('#trabajo').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#proyecto').click(function() {
		$('#proyectos').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#contact').click(function() {
		$('#contacto').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#education').click(function() {
		$('#formacion').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('form').submit(function() {
		$('input[type=submit]').attr('disabled', 'true');
	});//FIN DE ENVIO 1 SOLA VEZ

	$('form').submit(function() {
		var boton = $(this).find(':submit');
		boton.attr('disabled', 'true');
		boton.val('Enviando');

	});// FIN DE CAMBIO DE TEXTO BOTON
    message.on("focusout", function(){
        if($(this).val() == ""){

            for(var i = 0; i < message.length; i++){
                message.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok1").remove();
                $("#cancel1").remove();
                $("#bad-message").remove();
                message.after('<img id="cancel1" src="img/redes/cancel.png" width="28" height="28">');
                message.attr("placeholder", "Debes escribir un mensaje");
                message.before('<p id="bad-message">! Mensaje incorrecto</p>');
                $("#bad-message").css({"color": "red",
                    "margin-bottom": "0"});
            }
        }
        else{
            for(var i = 0; i < message.length; i++){
                message.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel1").remove();
                $("#ok1").remove();
                message.after('<img id="ok1" src="img/redes/check.png" width="28" height="28">');
                $("#bad-message").remove();

            }
        }
    });
    email.on("focusout", function(){
        if($(this).val() == "" || $("#email").val().indexOf("@") == -1 || $("#email").val().indexOf(".") == -1){

            for(var i = 0; i < email.length; i++){
                email.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok2").remove();
                $("#cancel2").remove();
                $("#bad-email").remove();
                email.after('<img id="cancel2" src="img/redes/cancel.png" width="28" height="28">');
                email.attr("placeholder", "Debes escribir tu email");
                email.before('<p id="bad-email">! Email incorrecto</p>');
                $("#bad-email").css({"color": "red",
                    "margin-bottom": "0"});
            }

        }
        else{
            for(var i = 0; i < email.length; i++){
                email.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel2").remove();
                $("#ok2").remove();
                $("#bad-email").remove();
                email.after('<img id="ok2" src="img/redes/check.png" width="28" height="28">');
                $("#bad-email").remove();
            }
        }
    });
    name.on("focusout", function(){
        if($(this).val() == ""){

            for( var i = 0; i < name.length; i++){
                name.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok3").remove();
                $("#cancel3").remove();
                $("#bad-name").remove();
                name.after('<img id="cancel3" src="img/redes/cancel.png" width="28" height="28">');
                name.attr("placeholder", "Debes escribir tu nombre");
                name.before('<p id="bad-name">! Nombre incorrecto </p>');
                $("#bad-name").css({"color": "red",
                    "margin-bottom": "0"});

            }
        }
        else{
            for(var i = 0; i < name.length; i++){
                name.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel3").remove();
                $("#ok3").remove();
                name.after('<img id="ok3" src="img/redes/check.png" width="28" height="28">');
                $("#bad-name").remove();
            }
        }
    });//FIN VALIDACIÓN VISUAL EMAIL


	$("#range").change(function(){
		$("#contador").html( this.value + "€");
	});

	var ids = ["#animacion", "#animacion2", "#animacion3", "#animacion4", "#animacion5", "#animacion6", "#animacion7"];

	function cerrarAnimaciones()
	{
		for(var i = 0; i < ids.length; i++)
		{
			$(ids[i]).hide("slow");
		}
	}

	$("#html").click( function(){
		console.log("Funciona??");
		cerrarAnimaciones();
		$(ids[0]).show("slow");
	});

	$("#css").click( function(){
		cerrarAnimaciones();
		$(ids[1]).show("slow");
	});

	$("#javascript").click( function(){
		cerrarAnimaciones();
		$(ids[2]).show("slow");
	});

	$("#stylus").click( function(){
		cerrarAnimaciones();
		$(ids[3]).show("slow");
	});

	$("#handlebars").click( function () {
		cerrarAnimaciones();
		$(ids[4]).show("slow");
	});

	$("#jquery").click( function(){
		cerrarAnimaciones();
		$(ids[5]).show("slow");
	});

    $("#balsamiq").click( function(){
        cerrarAnimaciones();
        $(ids[6]).show("slow");
    });//FIN DE TOGGLE HABILIDADES]]

	name.click( function(){
		$("#email").show(600);
	});//FIN DE FADEIN FORMULARIO
});//FIN DE READY

