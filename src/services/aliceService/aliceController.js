const aliceService = require("./aliceService");

const aliceController = (app) => {
    const handle = async (req, res) => {
        const response = await aliceService.handle(req.body);

        res.json({...response, version: "1.0"});
    }
    
    app.post(`/${process.env.WEBHOOK_PATH}`, handle);
}

module.exports = aliceController;