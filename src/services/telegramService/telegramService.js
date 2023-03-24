const telegramAPI = require("./telegramAPI");

const telegramService = () => {
    const sendPaymentLink = async (link) => {
        await telegramAPI.sendMessage(`🍕 Ссылка для оплаты заказа в PizzaRicca: ${link}`, process.env.TELEGRAM_BOT_RECEIVER);
    }

    const sendPaymentError = async (error) => {
        await telegramAPI.sendMessage(`⚠️ Ошибка при создании заказа в PizzaRicca: ${error.message}`, process.env.TELEGRAM_BOT_RECEIVER);
    }

    return {
        sendPaymentLink,
        sendPaymentError
    }
}

module.exports = telegramService();