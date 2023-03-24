const cartService = () => {
    let items = [];

    const handle = (ctx) => {
        if (ctx.state.session != null && ctx.state.session.cart != null)
            items = ctx.state.session.cart;
    }

    const add = (item) => {
        if (items.find((f) => f.id == item.id) != null)
            return false;

        items.push(item);
        return true;
    }

    const get = () => items;

    const remove = (name) => {
        items = items.filter((item) => item.name.toLowerCase() != name);
    }

    const clear = () => {
        items = [];
    }

    const checkout = () => {
        let total = 0;
       
        for (const item of items)
            total += item.price;

        // If cart has items and delivery not free
        if (total > 0 && total < 900)
            return {
                items: [...items, { name: 'Доставка', price: 40 }],
                total: total + 40
            }
        else
            return {
                items,
                total
            }
    }

    return {
        handle,

        add,
        get,
        remove,
        clear,

        checkout
    }
}

module.exports = cartService();