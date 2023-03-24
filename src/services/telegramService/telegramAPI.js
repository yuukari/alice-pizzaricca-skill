const axios = require("axios").default;

const telegramAPI = () => {
    const sendMessage = async (text, chatID) => {
        await makeRequest('sendMessage', {
            chat_id: chatID,
            text: prepareMessageText(text),
            parse_mode: "MarkdownV2"
        });
    }

    const prepareMessageText = (text) => {
        const source = ["[", "]", "(", ")", "~", ">", "#", "+", "-", "=", "|", "{", "}", ".", "!"];
        const replace = ["\\[", "\\]", "\\(", "\\)", "\\~", "\\>", "\\#", "\\+", "\\-", "\\=", "\\|", "\\{", "\\}", "\\.", "\\!"];
        
        for (let i = 0; i < source.length; i++)
            text = text.replaceAll(source[i], replace[i]);
        
        return text;
    }

    const makeRequest = async (method, data) => {
        const response = await axios({
            url: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/${method}`,
            method: "post",
            data
        });

        return response;
    }

    return {
        sendMessage
    }
}

module.exports = telegramAPI();