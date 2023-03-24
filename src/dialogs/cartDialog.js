const { nonRecognizedResponse } = require("./responses");

const cartDialog = () => {
    const handle = async (ctx, cart) => {
        if (ctx.request.type != "SimpleUtterance")
            return nonRecognizedResponse(ctx);

        const command = ctx.request.command;

        if (command.match(/(корзина)/gi))
            return cartCheckoutResponse(ctx, cart);

        if (command.match(/(удали)|(удали пиццу)/gi))
            return cartRemoveItemResponse(ctx, cart);

        if (command.match(/(очисти корзину)/gi))
            return cartClearResponse(ctx, cart);

        return nonRecognizedResponse(ctx);
    }

    const cartCheckoutResponse = (ctx, cart) => {
        const checkout = cart.checkout();

        if (checkout.items.length == 0)
            return {
                response: {
                    text: `Ваша корзина пуста`
                },
                session_state: {
                    dialog: 'initial'
                }
            }

        const itemsText = [];

        for (const item of checkout.items)
            if (item.name != 'Доставка')
                itemsText.push(`${item.name} - ${item.size == 'small' ? 'маленькая' : 'большая'}, ${item.price}`)
            else
                itemsText.push(`Доставка - ${item.price}`);

        return {
            response: {
                text: `Ваша корзина:\n${itemsText.join(";\n")}\n\nИтого ${checkout.total}\n\nЧтобы оформить заказ, скажите "заказ"`
            },
            session_state: {
                dialog: 'initial'
            }
        }
    }

    const cartRemoveItemResponse = (ctx, cart) => {
        const pizzaName = ctx.request.command
            .replace(/удали/gi, '')
            .replace(/пиццу/gi, '')
            .replace(/^\s+|\s+$|\s+(?=\s)/g, '');
        
        if (pizzaName.replace(" ", "").length == 0)
            return {
                response: {
                    text: 'Скажите: "удали пиццу" и ее название'
                },
                session_state: ctx.state.session
            }
        
        cart.remove(pizzaName);

        return {
            response: {
                text: `Удалила пиццу ${pizzaName} из корзины`
            },
            session_state: {
                dialog: 'initial'
            }
        }
    }

    const cartClearResponse = (ctx, cart) => {
        cart.clear();

        return {
            response: {
                text: `Ваша корзина пуста`
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

module.exports = cartDialog();