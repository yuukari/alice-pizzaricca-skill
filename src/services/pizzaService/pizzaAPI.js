const axios = require("axios").default;

const pizzaParser = require("./pizzaParser");

const pizzaAPI = () => {
    const getCatalog = async () => {
        const response = await makeRequest('https://pizzaricca.ru', 'GET');
        const items = pizzaParser.parseCatalog(response.data);

        return items;
    }

    const makeOrder = async (cartItems, customerData) => {
        const body = new URLSearchParams();

        body.append('action', 'orders_save');
        body.append('content', prepareCart(cartItems));
        body.append('timestamp', parseInt(new Date() / 1000));
        body.append('token', getOrderToken());
        body.append('marker', parseInt(new Date() / 1000) - 40);

        body.append('username', customerData.name);
        body.append('phone', customerData.phone);
        body.append('email', customerData.email);

        body.append('city', customerData.address.city);
        body.append('street', customerData.address.street);
        body.append('house', customerData.address.building);
        body.append('room', customerData.address.room);
        body.append('floor', customerData.address.floor ?? '');
        body.append('domofon', '');

        body.append('money', '');
        body.append('enter', '2');
        body.append('promocode', customerData.promocode ?? '');
        body.append('addinfo', customerData.comment ?? '');
        body.append('pay_type', '1');
        body.append('confirm', '1');

        const response = await makeRequest('https://pizzaricca.ru/ordsend', 'POST', body);
        const parameters = pizzaParser.parsePaymentParameters(response.data);

        const paymentQuery = Buffer.from(JSON.stringify(parameters)).toString('base64');

        return `https://${process.env.DOMAIN}/pay?q=${paymentQuery}`;
    }

    const prepareCart = (items) => {
        const content = [];

        for (const item of items)
            content.push(`1x${item.size == 'small' ? 's' : ''}${item.id}`);

        return content.join(",");
    }

    const getOrderToken = () => {
        let token = "";

        for (let i = 0; i < 3; i++)
            token += Math.random().toString(36).substr(2);

        return token;
    }

    const makeRequest = async (url, method, body = null) => {
        const response = await axios({
            url,
            method,

            data: body,

            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "Origin": ": https://pizzaricca.ru",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
            }
        });

        return response;
    }
    
    return {
        getCatalog,
        makeOrder
    }
}

module.exports = pizzaAPI();