
const CartButon = document.querySelector('.cardcart__buton'),
CartDisplay = document.querySelector('.cardcartdisplay'),

token = '5784483416:AAEjn-wB_DFSWGP2LV54Uj-W43ocMlqN6wI',
chatId = '-1001812409420',
uriApi = `https://api.telegram.org/bot${ token }/sendMessage`
CartButon.addEventListener('click', () => {
    const text = CartDisplay.innerHTML,
    splitText = text.split(' - ')
    let currentText = `<b>Заявка с сайта</b>\n`
    currentText += `<b>quantity: </b> ${ splitText[0] }\n`
    currentText += `<b>prise: </b> ${ splitText[1] }`
    const message = {
        chat_id: chatId,
        text: currentText,
        parse_mode: 'html',
    }
    // axios.post(uri_api), {
    //     chat_id: chat_id,
    //     text: message,
    //     parse_mode: 'html',
    // }

})


const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    if ( !response.ok ) {
        throw new Error(`Ошибка отправки по адресу ${ url }, статус ошибки ${ response }`)
    }
    return await response.json()
}