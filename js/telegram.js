
// const CartButon = document.querySelector('.cardcart__buton'),
const tgRequest = document.querySelector('.tgrequest'),
// CartDisplay = document.querySelector('.cardcartdisplay'),
// inputQuantity = document.querySelector('.inputquantity'),
// inputPrice = document.querySelector('.inputprice')

token = '5784483416:AAEjn-wB_DFSWGP2LV54Uj-W43ocMlqN6wI',
chatId = '-1001812409420',
uriApi = `https://api.telegram.org/bot${ token }/sendMessage` 
tgRequest.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(inputQuantity.value, inputPrice.value)
    // const text = CartDisplay.innerHTML,
    // splitText = text.split(' - ')
    // inputQuantity.value = splitText[0]
    // inputPrice.value = splitText[1]
    let currentText = `<b>Заявка с сайта</b>\n`
    currentText += `<b>quantity: </b> ${ this.quantity.value }\n`
    currentText += `<b>prise: </b> ${ this.price.value }`
    // const message = {
    //     chat_id: chatId,
    //     text: currentText,
    //     parse_mode: 'html',
    // }
    // sendData(uriApi, message)
    axios.post(uriApi), {
        chat_id: chatId,
        parse_mode: 'html',
        text: currentText,
    }

})
// 'https://api.telegram.org/bot5784483416:AAEjn-wB_DFSWGP2LV54Uj-W43ocMlqN6wI/sendMessage?chat_id=-1001812409420&text=%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0'

// const sendData = async (url, data) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         // body: data,
//         body: JSON.stringify(data),
//     })
//     if ( !response.ok ) {
//         throw new Error(`Ошибка отправки по адресу ${ url }, статус ошибки ${ response }`)
//     }
//     return await response.json()
// }