const pizzaAPI = require("./pizzaAPI");

const customerData = require("../../config/customerData");

const pizzaService = () => {
    const getCatalog = async () => {
        return await pizzaAPI.getCatalog();
    }

    const makeOrder = async (cartItems) => {
        return await pizzaAPI.makeOrder(cartItems, customerData);
    }

    return {
        getCatalog,
        makeOrder
    }
}

module.exports = pizzaService();