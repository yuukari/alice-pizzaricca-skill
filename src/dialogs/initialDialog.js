const { pizzaService } = require("../services/pizzaService");

const { nonRecognizedResponse } = require("./responses");
const { getRandomItem } = require("../helpers");

const initialDialog = () => {
    const handle = async (ctx) => {
        if (ctx.request.type != "SimpleUtterance")
            return nonRecognizedResponse(ctx);

        const command = ctx.request.command;

        if (command.match(/(каталог)|((какие есть))/gi))
            return await catalogListingResponse();

        if (command.match(/(пицца)/gi))
            return await catalogItemResponse(ctx, command);
        
        return nonRecognizedResponse(ctx);
    }

    const catalogListingResponse = async () => {
        const text = [];
            
        try {
            const catalog = await pizzaService.getCatalog();

            for (const item of catalog)
                text.push(item.name);
                // text.push(`${item.name} - цены: маленькая - ${item.variants[0].price}; большая - ${item.variants[1].price}`);
        } catch (e){
            console.error(e.toString());
            return catalogErrorResponse(ctx);
        }

        return {
            response: {
                text: `Можно заказать следующие пиццы: ${text.join(", ")}`
            },
            session_state: {
                dialog: 'initial'
            }
        }
    }

    const catalogItemResponse = async (ctx, command) => {
        const pizzaName = command.replace(/пицца/gi, '').replace(/^\s+|\s+$|\s+(?=\s)/g, '');
        
        if (pizzaName.replace(" ", "").length == 0)
            return {
                response: {
                    text: 'Скажите: "пицца" и ее название'
                },
                session_state: ctx.state.session
            }
        
        let pizzaItem = null;

        try {
            const catalog = await pizzaService.getCatalog();
            pizzaItem = catalog.find((item) => item.name.toLowerCase().includes(pizzaName.toLowerCase()));
        } catch (e){
            console.error(e.toString());
            return catalogErrorResponse(ctx);
        }

        if (pizzaItem == null)
            return {
                response: {
                    text: getRandomItem([
                        'Не нашла такой пиццы',
                        'Увы, такой пиццы нет'
                    ])
                },
                session_state: ctx.state.session
            }

        return {
            response: {
                text: 
                    `Пицца ${pizzaItem.name}.\n` +
                    `Цены: маленькая - ${pizzaItem.variants[0].price}, большая - ${pizzaItem.variants[1].price}.\n` +
                    `Состав: ${pizzaItem.ingredients}.\n\n` +
                    `Добавить в корзину?`
            },
            session_state: {
                dialog: 'item',
                item: {...pizzaItem, id: pizzaItem.variants[0].id}
            }
        }
    }

    const catalogErrorResponse = (ctx) => {
        return {
            response: {
                text: 'Не смогла получить товары в каталоге. Попробуйте чуть позже'
            },
            session_state: ctx.state.session
        }        
    }

    return {
        handle
    }
}

module.exports = initialDialog();