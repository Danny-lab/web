<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $correo = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $nombre = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $ciudad = htmlspecialchars($_POST['city'], ENT_QUOTES, 'UTF-8');
    $telefono = htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8');
    $mensaje = htmlspecialchars($_POST['observations'], ENT_QUOTES, 'UTF-8');

    $destinatario = "dv58653@gmail.com"; // Reemplaza con tu correo electrónico real
    $asunto = "Envio de correo de prueba con PHP";
    $cuerpo = '
        <html>
            <head>
                <title>Prueba de envio de correo</title>
            </head>
            <body>
                <h1>Solicitud de contacto desde correo de prueba!</h1>
                <p>
                    Contacto: ' . $nombre . '<br>
                    Email: ' . $correo . '<br>
                    Ciudad y País: ' . $ciudad . '<br>
                    Teléfono: ' . $telefono . '<br>
                    Mensaje: ' . nl2br($mensaje) . '
                </p>
            </body>
        </html>
    ';

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . $nombre . " <" . $correo . ">\r\n";

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Error al enviar el correo.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Método de solicitud no permitido.']);
}
?>
