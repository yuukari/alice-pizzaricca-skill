require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const { aliceController } = require("./src/services/aliceService");
const { paymentRoutes } = require("./src/http/routes");

const app = express();

const init = () => {
    console.log('Running up...');

    initServices();
    initHTTPServer();
}

const initServices = () => {
    console.log('Loading services');  

    app.use(bodyParser.json({ limit: "10mb" }));

    aliceController(app);

    app.use(paymentRoutes);
}

const initHTTPServer = () => {
    app.get("/", (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
    
        res.send(`Working!`);
    });
    
    app.listen(process.env.PORT, () => {
        console.log(`Ready to delivery your favourite food`);
    });
}

init();