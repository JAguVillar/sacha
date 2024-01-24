<?php

$para = "contacto@macamedia.com.ar";
    
$asunto = "Mensaje generado desde la pagina de Macamedia";
$mensaje .= "Nombre remitente:".$_POST['nombreRemitente']."\r\n";
$mensaje .= "Teléfono remitente:".$_POST['telefonoRemitente']."\r\n";
$mensaje .= "Mail remitente:".$_POST['emailRemitente']."\r\n";
$mensaje .= "Mensaje:".$_POST['mensaje']."\r\n";
$cabeceras = 'MIME-Version 1.0' . "\r\n";
$cabeceras = 'Content-type: text/html; charset= iso-8859-1' . "\r\n";
$cabeceras = 'From:'.$_POST['email']."\r\n" . 'Reply-to: ' .$_POST['email']."\r\n" . 'X-Mailer: PHP/' . phpversion();
@mail($para, $asunto, $mensaje, $cabeceras); 

?>

<meta http-equiv="Refresh" content="1;url=http://www.macamedia.com.ar">

  
 
