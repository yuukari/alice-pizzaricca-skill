const { cartService } = require("../cartService");

const { initialDialog, itemDialog, itemSizeDialog, cartDialog, orderDialog } = require("../../dialogs");

const { getRandomItem } = require("../../helpers");

const aliceService = () => {
    const handle = async (ctx) => {
        if (isFirstInteraction(ctx))
            return firstInteractionResponse();

        cartService.handle(ctx);
    
        let response = await handleCommandMatch(ctx);
        if (response != null)
            return applyCartState(response);

        response = await handleStateMatch(ctx);
        return applyCartState(response);
    }

    const handleCommandMatch = async (ctx) => {
        if (ctx.request.command == null)
            return null;

        const command = ctx.request.command;

        if (
            command.match(/(корзина)/gi) ||
            command.match(/(удали)|(удали пиццу)/gi) ||
            command.match(/(очисти корзину)/gi)
        )
            return await cartDialog.handle(ctx, cartService);

        if (command.match(/(заказ)|((сделай)&(заказ))/gi))
            return await orderDialog.handle(ctx, cartService);

        return null;
    }

    const handleStateMatch = async (ctx) => {
        switch (ctx.state.session.dialog){
            case 'item':
                return await itemDialog.handle(ctx);
            case 'itemSize':
                return await itemSizeDialog.handle(ctx, cartService);
            case 'order':
                return await orderDialog.handle(ctx, cartService);
            case 'initial': 
            default:
                return await initialDialog.handle(ctx, cartService);
        }
    }

    const isFirstInteraction = (ctx) => {
        if (ctx.state.session == null || ctx.state.session.dialog == null)
            return true;

        return false;
    }

    const firstInteractionResponse = () => {
        return {
            response: {
                text: getRandomItem([
                    'Какую пиццу закажем?',
                    'Я бы сегодня поела чего-нибудь сырного. Какую пиццу хотите?'
                ])
            },
            session_state: {
                dialog: 'initial'
            }
        }
    }

    const applyCartState = (response) => {
        response.session_state.cart = cartService.get();
        return response;
    }

    return {
        handle
    };
}

module.exports = aliceService();