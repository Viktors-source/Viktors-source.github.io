<?

$quantity = $_POST['quantity'];
$price = $_POST['price'];


/* ОТПРАВКА ПИСЬМА ЗАКАЗА В TELEGRAM */
/*функция для создания запроса на сервер Telegram */
function parser($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    if($result == false){     
      echo "Ошибка отправки запроса: " . curl_error($curl);
      return false;
    }
    else{
      return true;
    }
}

$message .= "Новая завка с  сайта";
$message .= "Количество (кг): ".$quantity;
$message .= "Стоимость:".$price;

function orderSendTelegram($message) {

    /*токен который выдаётся при регистрации бота */
    $token = "5784483416:AAEjn-wB_DFSWGP2LV54Uj-W43ocMlqN6wI";
    /*идентификатор группы*/
    $chat_id = "-1001812409420";

    /*делаем запрос*/
    parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}");

}

?>