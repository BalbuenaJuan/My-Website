/**
 * Created by Juan on 19/01/2015.
 */

var calcular = $("#calcular");
var resultado = $("#resultado");
var calculo = $("#Opciones");

calcular.on("click", function(){
    var numero1 =  parseInt($("#numero1").val());
    var numero2 = parseInt($("#numero2").val());
    var res;
    console.log(numero1);
    console.log(numero2);

    if(calculo.val() == 'sumar'){
        res = numero1 + numero2;
        resultado.html(res);
    }
    else if(calculo.val() == 'restar'){
        res = numero1 - numero2;
        resultado.html(res);
    }
    else if(calculo.val() == 'multiplicar'){
        res = numero1 * numero2;
        resultado.html(res);
    }
    else{
        res = numero1 / numero2;
        resultado.html(res);
    }
});

