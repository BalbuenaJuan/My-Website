<?php

if (isset($_POST[submit]) && $_POST[nombre] && $_POST[email]  && $_POST[range] != ""){

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
    </script>";
}
else{
    echo "<script type='text/javascript'>
            alert('Rellena correctamente el formulario :D ');
            window.location.href='http://juanbalbuena.info';
         </script>";
}
?>
