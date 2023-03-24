const { nonRecognizedResponse } = require("./responses");

const itemSizeDialog = () => {
    const handle = async (ctx, cart) => {
        if (ctx.request.type != "SimpleUtterance")
            return nonRecognizedResponse(ctx);

        const command = ctx.request.command;

        if (command.match(/(маленькая)|(большая)/gi))
            return selectSizeResponse(ctx, cart);

        return unknownSizeResponse(ctx);
    }

    const selectSizeResponse = (ctx, cart) => {
        const item = ctx.state.session.item;
        const size = ctx.request.command.match(/(маленькая)/gi) ? 'small' : 'big';
        
        const isAdded = cart.add({
            id: item.variants[0].id,
            name: item.name,
            size,
            price: item.variants[size == 'small' ? 0 : 1].price
        });
        
        if (isAdded)
            return {
                response: {
                    text: `Добавила пиццу ${item.name} в корзину`
                },
                session_state: {
                    dialog: 'initial'
                }
            }
        else
            return {
                response: {
                    text: `В корзине уже есть такая пицца. Если вы хотите изменить размер - сначала удалите ее из корзины`
                },
                session_state: {
                    dialog: 'initial'
                }
            }
    }

    const unknownSizeResponse = (ctx) => {
        return {
            response: {
                text: `Такого размера нет. Выберите размер пиццы: маленькая или большая`
            },
            session_state: ctx.state.session
        }
    }

    return {
        handle
    }
}

module.exports = itemSizeDialog();