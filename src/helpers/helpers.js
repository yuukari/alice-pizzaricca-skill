const random = require("random");

module.exports = {
    getRandomItem: (variants) => {
        return variants[random.int(0, variants.length - 1)];
    }
}