<?php

$quantity = ['quantity'];
$price = $_POST['prise'];

$token = '5784483416:AAEjn-wB_DFSWGP2LV54Uj-W43ocMlqN6wI';
$chat_id = '-848766400'
$arr = array(
    'Килограм миндальной муки: ' => $quantity,
    'Стоимость ' => $price
);

foreach($arr as $key => $value) {
    $txt .= '<b>'.$key.'<b>'.$value.'%OA';
};

// $sendToTelegram = fopen('https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}','r');

// if ($se)


