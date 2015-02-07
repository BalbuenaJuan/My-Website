<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$presupuesto = $_POST['range'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Nombre " . $nombre . ",
 presupuesto " . $presupuesto . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'ianivigo2@gmail.com';
$asunto = 'Asunto del mail recibido';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo "<script type='text/javascript'>
    window.location.href='http://juanbalbuena.info';
    var res = document.getElementById('respuesta');
    res.textContent = 'Su mensaje se envió correctamente';
    </script>";
?>
