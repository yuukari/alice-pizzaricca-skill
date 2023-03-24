const cheerio = require("cheerio");

const pizzaParser = () => {
    const parseCatalog = (html) => {
        const $ = cheerio.load(html);
        const items = $("#pizzalist li");
        
        const catalog = [];

        for (const item of items){
            const $ = cheerio.load(item);

            const variants = [];

            for (const label of $("label")){
                const $ = cheerio.load(label);

                variants.push({
                    id: parseInt($("input").attr("name")),
                    price: parseInt($("input").attr("price")),
                    size: $("input").attr("value") == "s" ? "small" : "big"
                })
            }

            const ingredients = $(".parts").text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            catalog.push({
                name: $("h2").text(),
                variants,
                ingredients
            });
        }

        return catalog;
    }

    const parsePaymentParameters = (html) => {
        if (html.indexOf('На данный момент заказ успешно отправлен на обработку') == -1)
            throw new Error(`Response on order save request wasn't success`);

        const parameters = fastCut('widget.charge({', '},', html);

        return {
            order_id: fastCut('invoiceId: \'', '\',', parameters),
            amount: fastCut('amount: ', ',', parameters),
            email: fastCut('email: \'', '\',', parameters),
            hash: fastCut('hash: \'', '\'', parameters)
        }
    }

    const fastCut = (from, to, data) => data.split(from)[1].split(to)[0];

    return {
        parseCatalog,
        parsePaymentParameters
    }
}

module.exports = pizzaParser();