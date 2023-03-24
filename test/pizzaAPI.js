const { pizzaAPI } = require("../src/services/pizzaService");

const assert = require("assert");

describe('pizzaAPI', () => {
    describe('#getCatalog', () => {
        let catalog = [];

        before(async () => {
            catalog = await pizzaAPI.getCatalog();
        });

        it('should return array with non zero items', () => {
            assert(catalog.length != 0);
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
    });
});