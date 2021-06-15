<?php
/* https://api.telegram.org/bot1012900809:AAEYdtjEV8spLCPBNp8gZHl7g7Ye5qAXSaY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */


$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$subject = $_POST['user_subject'];
$token = "1012900809:AAEYdtjEV8spLCPBNp8gZHl7g7Ye5qAXSaY";
$chat_id = "-343290201";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Предмет:' => $subject
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram == 'true') 
{
  echo "Сообщение успешно отправлено";
  echo "<br> <a href=index.html>Нажмите,</a> чтобы вернуться на главную страницу";
} else {
  echo "При отправке сообщения возникли ошибки";
  echo "<br> <a href=index.html>Нажмите,</a> чтобы вернуться на главную страницу";
}
?>