<?php
header('Content-Type: application/json');

// Get the language from the request
$lang = isset($_POST['lang']) ? $_POST['lang'] : 'pt-BR';

// Get form data
$name = isset($_POST['name']) ? strip_tags($_POST['name']) : '';
$email = isset($_POST['email']) ? strip_tags($_POST['email']) : '';
$message = isset($_POST['message']) ? strip_tags($_POST['message']) : '';

// Validate inputs
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode([
        'success' => false,
        'message' => $lang === 'pt-BR' ? 'Por favor, preencha todos os campos.' : 'Please fill in all fields.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => $lang === 'pt-BR' ? 'Por favor, insira um email válido.' : 'Please enter a valid email.'
    ]);
    exit;
}

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Email subject
$subject = $lang === 'pt-BR' ? 'Nova mensagem do site - ' : 'New message from website - ';
$subject .= $name;

// Email body
$body = "
<html>
<body>
    <h2>" . ($lang === 'pt-BR' ? 'Nova mensagem de contato' : 'New contact message') . "</h2>
    <p><strong>" . ($lang === 'pt-BR' ? 'Nome' : 'Name') . ":</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>" . ($lang === 'pt-BR' ? 'Mensagem' : 'Message') . ":</strong></p>
    <p>$message</p>
</body>
</html>
";

// Send email
$to = 'contato@dicop.com.br';
$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => $lang === 'pt-BR' ? 'Contato enviado com sucesso.' : 'Contact sent successfully.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => $lang === 'pt-BR' ? 'Erro ao enviar mensagem, por favor tente novamente.' : 'Error sending message, please try again.'
    ]);
}
?> 