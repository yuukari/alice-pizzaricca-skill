const { pizzaParser } = require("../src/services/pizzaService")

const { pizzaList, orderSavedPage } = require("./dataSamples");

const assert = require("assert");

describe('pizzaParser', () => {
    describe('#parseCatalog', () => {
        const catalog = pizzaParser.parseCatalog(pizzaList);

        it('should return array with 3 items', () => {
            assert(catalog.length == 3);
        });

        it('array should have item with "name" property', () => {
            assert(catalog[0].name != undefined);
        });

        it('array should have item with "ingredients" property', () => {
            assert(catalog[0].ingredients != undefined);
        });

        it('array should have item with "variants" property', () => {
            assert(catalog[0].variants != undefined);
        });

        it('"variants" property must be an array with 2 items', () => {
            assert(catalog[0].variants.length == 2);
        });

        it('"variants" array should have item with "id" property', () => {
            assert(catalog[0].variants[0].id != undefined);
        })

        it('"variants" array should have item with "price" property', () => {
            assert(catalog[0].variants[0].price != undefined);
        })

        it('"variants" array should have item with "size" property', () => {
            assert(catalog[0].variants[0].size != undefined);
        })
    })

    describe('#parsePaymentParameters', () => {
        const parameters = pizzaParser.parsePaymentParameters(orderSavedPage);

        it('should return object with "order_id" parameter', () => {
            assert(parameters.order_id != undefined);
        });

        it('should return object with "amount" parameter', () => {
            assert(parameters.amount != undefined);
        });

        it('should return object with "hash" parameter', () => {
            assert(parameters.hash != undefined);
        });

        it('should return object with "email" parameter', () => {
            assert(parameters.email != undefined);
        });
    })
})