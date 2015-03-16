$(document).ready(function(){

	var message = $("#message"); var email = $("#email"); var name = $("#name");

	$('form').submit(function() {
		$('input[type=submit]').attr('disabled', 'true');
	});

	$('form').submit(function() {
		var boton = $(this).find(':submit');
		boton.attr('disabled', 'true');
		boton.val('process');
	});
    message.on("focusout", function(){
        if($(this).val() == ""){

                message.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok1").remove();
                $("#cancel1").remove();
                $("#bad-message").remove();
                message.after('<img id="cancel1" src="img/cancel.png" width="28" height="28">');
                message.attr("placeholder", "You must write a message");
                message.before('<p id="bad-message">! Bad message</p>');
                $("#bad-message").css({"color": "red",
                    "margin-bottom": "0"});

        }
        else{
                message.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel1").remove();
                $("#ok1").remove();
                message.after('<img id="ok1" src="img/check.png" width="28" height="28">');
                $("#bad-message").remove();


        }
    });
    email.on("focusout", function(){
        if($(this).val() == "" || $("#email").val().indexOf("@") == -1 || $("#email").val().indexOf(".") == -1){
                email.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok2").remove();
                $("#cancel2").remove();
                $("#bad-email").remove();
                email.after('<img id="cancel2" src="img/cancel.png" width="28" height="28">');
                email.attr("placeholder", "You must write a email");
                email.before('<p id="bad-email">! Bad email</p>');
                $("#bad-email").css({"color": "red",
                    "margin-bottom": "0"});

        }
        else{

                email.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel2").remove();
                $("#ok2").remove();
                $("#bad-email").remove();
                email.after('<img id="ok2" src="img/check.png" width="28" height="28">');
                $("#bad-email").remove();

        }
    });
    name.on("focusout", function(){
        if($(this).val() == ""){
                name.css({"background": "#FFCECF",
                    "border": "2px solid #FF726C"});
                $("#ok3").remove();
                $("#cancel3").remove();
                $("#bad-name").remove();
                name.after('<img id="cancel3" src="img/cancel.png" width="28" height="28">');
                name.attr("placeholder", "You must write a name");
                name.before('<p id="bad-name">! Bad name </p>');
                $("#bad-name").css({"color": "red",
                    "margin-bottom": "0"});


        }
        else{
                name.css({"background": "#C8FDD4",
                    "border": "2px solid #52FD8B"});
                $("#cancel3").remove();
                $("#ok3").remove();
                name.after('<img id="ok3" src="img/check.png" width="28" height="28">');
                $("#bad-name").remove();

        }
    });

	$("#range").on("change", function(){
		$("#count").html(this.value + "€");
	});
});