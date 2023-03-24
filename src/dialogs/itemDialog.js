const { nonRecognizedResponse } = require("./responses");

const itemDialog = () => {
    const handle = async (ctx) => {
        if (ctx.request.type != "SimpleUtterance")
            return nonRecognizedResponse(ctx);

        const command = ctx.request.command;

        if (command.match(/(да)|(добавить)|(в корзину)/gi))
            return addToCartResponse(ctx);

        if (command.match(/(нет)|(отмена)|(не надо)/gi))
            return backToCatalogResponse(ctx);

        return nonRecognizedResponse(ctx);
    }

    const addToCartResponse = (ctx) => {
        return {
            response: {
                text: 'Выберите размер пиццы: маленькая или большая?'
            },
            session_state: {
                dialog: 'itemSize',
                item: ctx.state.session.item
            }
        }
    }

    const backToCatalogResponse = (ctx) => {
        return {
            response: {
                text: 'Вернулась в каталог'
            },
            session_state: {
                dialog: 'initial'
            }
        }
    }

    return {
        handle
    }
}

module.exports = itemDialog();