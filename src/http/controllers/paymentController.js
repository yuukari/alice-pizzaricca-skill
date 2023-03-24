const paymentController = () => {
    const index = (req, res) => {
        if (req.query.q == null){
            res.setHeader('Content-Type', 'text/plain');
            return res.status(400).send(`Payment query required`);
        }

        try {
            const jsonString = Buffer.from(req.query.q, 'base64').toString();
            const payload = JSON.parse(jsonString);

            res.send(`
                <html>
                    <body>
                        <script src="https://widget.cloudpayments.ru/bundles/cloudpayments"></script>
                        <script>
                            const widget = new cp.CloudPayments();
                            widget.charge(
                                {
                                    publicId: 'pk_7e65770d29dc6a3bcf50e0bf8d210',
                                    description: 'Оплата заказа №${payload.order_id}',
                                    amount: ${payload.amount}, 
                                    currency: 'RUB', 
                                    invoiceId: '${payload.order_id}',
                                    email: '${payload.email}',  
                                    data: {
                                        hash: '${payload.hash}'
                                    }
                                },
                                () => {
                                    alert(\`Платеж успешно проведен\`);
                                    window.close();
                                },
                                (reason, options) => {
                                    alert(\`Ошибка обработки платежа: \${reason}\`);
                                    window.close();
                                }
                            );
                        </script>
                    </body>
                </html>
            `);
        } catch (e){
            res.setHeader('Content-Type', 'text/plain');
            res.status(400).send(`Failed to parse payment query: ${e.stack ? e.stack : e.message}`);
        }
    }

    return {
        index
    }
}

module.exports = paymentController();