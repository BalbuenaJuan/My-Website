$(document).ready(function(){
	$("#mensaje").on("focusout", function(){
		if($(this).val() == ""){
			$("#mensaje").css({"background": "#FFCECF",
				               "border": "2px solid #FF726C"});
		}
		else{
			$("#mensaje").css({"background": "#C8FDD4",
				  		       "border": "2px solid #52FD8B"});
		}
	});
	$("#email").on("focusout", function(){
		if($(this).val() == "" || $("#email").val().indexOf("@") == -1 || $("#email").val().indexOf(".") == -1){
				$("#email").css({"background": "#FFCECF",
					             "border": "2px solid #FF726C"});
			}
			else{
				$("#email").css({"background": "#C8FDD4",
					             "border": "2px solid #52FD8B"});
			}
	});
	$("#nombre").on("focusout", function(){
		if($(this).val() == ""){
			$("#nombre").css({"background": "#FFCECF",
				              "border": "2px solid #FF726C"});
		}
		else{
			$("#nombre").css({"background": "#C8FDD4",
				              "border": "2px solid #52FD8B"});
		}
	});
	$("#range").on("change", function(){
		$("#contador").html(this.value + "");
	});
});