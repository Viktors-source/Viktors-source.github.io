 <?php

$quantity = $_POST['quantity'];
$price = $_POST['price'];
$token = "5784483416:AAEjn-wB_DFSWGP2LV54Uj-W43ocMlqN6wI";
$chat_id = "-1001812409420";


/* ОТПРАВКА ПИСЬМА ЗАКАЗА В TELEGRAM */
/*функция для создания запроса на сервер Telegram */
$arr = array(
  'Количество (кг):' => $quantity,
  'Стоимость (грн):' => $price,
);

foreach($arr as $key => $value) {
  $txt .= '<b>'.$key.'</b> '.$value.'%0A';
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$txt}", 'd');


// $message .= "Новая завка с  сайта";
// $message .= "Количество (кг): ".$quantity;
// $message .= "Стоимость: ".$price;

// function orderSendTelegram($message) {



//     parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$message}");

// }

?> 