const router = require("express").Router();

const { paymentController } = require("../controllers");

router.get('/pay', paymentController.index);

module.exports = router;