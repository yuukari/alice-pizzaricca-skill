const { getRandomItem } = require("../helpers");

const nonRecognizedResponse = (ctx) => {
    return {
        response: {
            text: getRandomItem([
                'Не совсем поняла вас',
                'Кажется, я так не умею или не могу'
            ])
        },
        session_state: ctx.state.session
    }
}

module.exports = {
    nonRecognizedResponse
}