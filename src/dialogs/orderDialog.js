const { nonRecognizedResponse } = require("./responses");

const { pizzaService } = require("../services/pizzaService");
const { telegramService } = require("../services/telegramService");

const orderDialog = () => {
    const handle = async (ctx, cart) => {
        if (ctx.request.type != "SimpleUtterance")
            return nonRecognizedResponse(ctx);

        const command = ctx.request.command;

        if (command.match(/(заказ)|((сделай)&(заказ))/gi))
            return orderConfirmationResponse(cart);

        if (command.match(/(да)|(давай)|(заказывай)|(подтверждаю)/gi))
            return await orderPayResponse(ctx, cart);

        if (command.match(/(нет)|(отмена)|(назад)/gi))
            return await orderCancelResponse();

        return nonRecognizedResponse(ctx);
    }

    const orderConfirmationResponse = (cart) => {
        const checkout = cart.checkout();

        if (checkout.total == 0)
            return {
                response: {
                    text: `Чтобы оформить заказ добавьте хотя-бы одну пиццу в корзину`
                },
                session_state: {
                    dialog: 'initial'
                }
            }

        return {
            response: {
                text: `Сумма вашего заказа - ${checkout.total}. Подтвердите заказ`
            },
            session_state: {
                dialog: 'order'
            }
        }
    }

    const orderPayResponse = async (ctx, cart) => {
        new Promise((resolve, reject) => {
            pizzaService.makeOrder(cart.get())
                .then((paymentUrl) => telegramService.sendPaymentLink(paymentUrl))
                .then(() => {
                    console.log(`Payment url sended via Telegram`);
                    resolve();
                })
                .catch((e) => reject(e));
        })
        .catch((e) => {
            telegramService.sendPaymentError(e).catch(() => {});
            console.error(`Error while saving order: ${e.stack ? e.stack : e.message}`);
        });

        cart.clear();

        return {
            response: {
                text: `Создаю заказ. Отправлю ссылку для оплаты вам в телеграм`
            },
            session_state: {
                dialog: 'initial'
            }
        }
    }

    const orderCancelResponse = () => {
        return {
            response: {
                text: `Отменила оформление заказа`
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

module.exports = orderDialog();