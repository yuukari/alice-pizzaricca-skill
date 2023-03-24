module.exports = {
    pizzaList: `
        <ul id="pizzalist">
            <li>
                <a name="tom_yam"></a>
                <div class="photo">
                    <img src="//pizzaricca.ru/items/_47.png" class="pizza pizza_tom_yam">
                </div>
                <h2>Том Ям</h2>
                <div class="parts">ананасы, креветки, моцарелла, соус том ям слабоострый, томаты, чернила каракатицы, шампиньоны</div>
                
                <div class="calories">
                
                    289,6 Ккал / 1211,5 кДж на 100г.<br>
                    Б/Ж/У: 10,5 / 18,5 / 21,9
                
                </div>
                
                <div class="labels">
                    <label>
                        <input type="radio" name="47" value="s" price="720" checked="">
                        <div>
                            33 см <span>880 г.</span>
                        </div>
                    </label>
                    
                    <label>
                        <input type="radio" name="47" value="" price="940">
                        <div>
                            40 см <span>1350 г.</span>
                        </div>
                    </label>
                </div>
                <div class="price">720</div>
                <input type="button" value="В корзину">
            </li>

            <li>
                <a name="gribnaya"></a>
                <div class="photo hit">
                    <img src="//pizzaricca.ru/items/_16.png" class="pizza pizza_gribnaya">
                </div>
                <h2>Грибная</h2>
                <div class="parts">
                    

                    грибной соус, моцарелла, орегано, томаты, шампиньоны
                </div>
                
                <div class="calories">
                
                243,2 Ккал / 1017,4 кДж на 100г.<br>
                Б/Ж/У: 7,1 / 15,2 / 21,8
                
                </div>
                
                <div class="labels">
                    <label>
                        <input type="radio" name="16" value="s" price="570" checked="">
                        <div>
                            33 см <span>810 г.</span>
                        </div>
                    </label>
                    
                    <label>
                        <input type="radio" name="16" value="" price="730">
                        <div>
                            40 см <span>1210 г.</span>
                        </div>
                    </label>
                </div>
                <div class="price">570</div>
                <input type="button" value="В корзину">
            </li>

            <li>
                <a name="4_cyra"></a>
                <div class="photo">
                    <img src="//pizzaricca.ru/items/_12.png" class="pizza pizza_4_cyra">
                </div>
                <h2>4 сыра</h2>
                <div class="parts">
                    

                    базилик, дорблю, моцарелла, пармезан, сливочный сыр, сырный соус
                </div>
                
                <div class="calories">
                
                253,2 Ккал / 1059,5 кДж на 100г.<br>
                Б/Ж/У: 25,6 / 26,4 / 41,9
                
                </div>
                
                <div class="labels">
                    <label>
                        <input type="radio" name="12" value="s" price="560" checked="">
                        <div>
                            33 см <span>650 г.</span>
                        </div>
                    </label>
                    
                    <label>
                        <input type="radio" name="12" value="" price="740">
                        <div>
                            40 см <span>960 г.</span>
                        </div>
                    </label>
                </div>
                <div class="price">560</div>
                <input type="button" value="В корзину">
            </li>
        </ul>
    `,

    orderSavedPage: `
        <!DOCTYPE HTML>
        <html prefix="og: https://ogp.me/ns#">
        <head>
            <meta http-equiv="x-ua-compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta charset="utf-8">
            <title>
            Pizza Ricca
            </title>

            <link rel="stylesheet" type="text/css" href="/css/style.css?parts"/>
            <meta property="og:title" content="Pizza Ricca" />
            <meta property="og:image" content="https://pizzaricca.ru/items/_34.png" />
            <meta property="og:url" content="https://pizzaricca.ru/" />
            <meta name="copyright" content="Pizza Ricca"/>
            
            <meta name="Keywords" content="первая, квадратная, пицца, Нижний Новгород, заказ, доставка, онлайн, вкусная, большая, особенная, гавайская, пепперони, кремлевская, крымская, баварская, 260-10-60, обратный, звонок, напитки"/>
            <script src="/js/jquery.js?12345"></script>
            <script src="/js/common.js?cartmode"></script>
            <script src="/js/maskedinput.js"></script>
            <script>
            var cities = [{"allow_orders":"1", "delivery_pay":"1", "delivery_pay_size":"40", "end_time":"22:00", "id":"1", "label":"Н.&nbsp;Новгород", "min_price":"900", "name":"Нижний Новгород", "online_pay":"1", "start_time":"10:00", "worktime":"1"}];
            </script>
        </head>
        <body>
        <header>
            <div class="logo">
                <a href='https://pizzaricca.ru'><img src="/img/logo.png?12345" border='0'></a>
                <div>
                    Первая квадратная пицца в России!<br>
                    На четыре куска больше!
                </div>
            </div>
            <div>
                Вс&#8211;Чт 10:00 &#8211; 22:00<br>
                Пт&#8211;Сб 10:00 &#8211; 00:00
            </div>
            <div class="phone">
                <div>
                    +7 831 260-10-60<br>
                    Выбрать: <a href="/selectcity">Н.&nbsp;Новгород</a>
                </div>
            </div>
            <!--<div class="city">
                Город:<br>
                <a href="/selectcity">Н.&nbsp;Новгород</a>
            </div>-->
            <div class="cart">
                <div class="order"></div>
                <img src="/img/cart.png">
            </div>
            <a href="/" id="mobile"></a>
        </header>

        <nav>
            <a href="/">Пицца</a><a href="/promo">Акции</a><a href="/feedback">Отзывы</a><a href="/dostavka">Область доставки</a><a href="/best">Наши преимущества</a><a href="/good">Добрые дела</a><a href="/contacts">Контакты</a><a href="/vacancy">Вакансии</a>
        </nav>






        <div id="content">
            <article>
            

        <script src="https://widget.cloudpayments.ru/bundles/cloudpayments"></script>

        <h1 id='pay_title'>Оплата заказа</h1>

        <p style='margin-bottom: 40px' id='pay_text'>
        На данный момент заказ успешно отправлен на обработку. В течение 10 минут с вами свяжется оператор для уточнения заказа.<br><br>

        А пока вы можете оплатить заказ: форма оплаты появится автоматически. Если этого не произошло нажмите кнопку ниже.
        </p>

        <div id='pay_form'>
        <input type="button" id='checkout' value='Оплатить'>

        <br><br>
        <p style='font-size: 10pt; max-width: 600px'>
        <b>Платежи. Оплата банковской картой онлайн</b><br><br>

        Наш сайт подключен к интернет-эквайрингу, и Вы можете оплатить Товар банковской картой Visa, MasterCard, Maestro и МИР. После подтверждения выбранного Товара откроется защищенное окно с платежной страницей процессингового центра CloudPayments, где Вам необходимо ввести данные Вашей банковской карты. Для дополнительной аутентификации держателя карты используется протокол 3D Secure. Если Ваш Банк поддерживает данную технологию, Вы будете перенаправлены на его сервер для дополнительной идентификации. Информацию о правилах и методах дополнительной идентификации уточняйте в Банке, выдавшем Вам банковскую карту.
        <br><br>
        <b>Гарантии безопасности</b><br><br>

        Процессинговый центр CloudPayments защищает и обрабатывает данные Вашей банковской карты по стандарту безопасности PCI DSS 3.2. Передача информации в платежный шлюз происходит с применением технологии шифрования SSL. Дальнейшая передача информации происходит по закрытым банковским сетям, имеющим наивысший уровень надежности. CloudPayments не передает данные Вашей карты нам и иным третьим лицам. Для дополнительной аутентификации держателя карты используется протокол 3D Secure.
        <br><br>
        В случае, если у Вас есть вопросы по совершенному платежу, Вы можете обратиться в службу поддержки клиентов платежного сервиса по электронной почте <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dcafa9acacb3aea89cbfb0b3a9b8acbda5b1b9b2a8aff2aea9f2">[email&#160;protected]</a>
        <br><br>
        <b>Безопасность онлайн платежей</b><br><br>

        Предоставляемая Вами персональная информация (имя, адрес, телефон, e-mail, номер кредитной карты) является конфиденциальной и не подлежит разглашению. Данные Вашей кредитной карты передаются только в зашифрованном виде и не сохраняются на нашем Web-сервере.
        <br><br>
        Мы рекомендуем вам проверить, что ваш браузер достаточно безопасен для проведения платежей онлайн, на специальной странице.
        <br><br>
        Безопасность обработки Интернет-платежей гарантирует ООО «КлаудПэйментс». Все операции с платежными картами происходят в соответствии с требованиями VISA International, MasterCard и других платежных систем. При передаче информации используются специальные технологии безопасности карточных онлайн-платежей, обработка данных ведется на безопасном высокотехнологичном сервере процессинговой компании.
        <br><br>

        <img src='https://cloudpayments.ru/storage/YXxkwzvZcYOtIrDEiCzpKGURka4hnMgdrZoSY4Rc.png' style='height: 80px'>
        <img src='https://static.cloudpayments.ru/wiki/docs/mastercard-securecode.png'>
        <img src='https://static.cloudpayments.ru/wiki/docs/MIRaccept.png'>
        </p>
        </div>

        <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
        let success = function( options ){
            //location.replace("https://pizzaricca.ru/cpay/success/1090909222684");
            $( '#pay_title' ).html( 'Заказ №1090909222684 успешно оплачен!' );
            $( '#pay_text' ).html( 'Мы получили оплату за ваш заказ! В течение 10 минут с вами свяжется оператор для уточнения заказа. Если этого не произошло, возможно у нас возник технический сбой, либо мы не можем дозвониться по вашему номеру телефона +79965661296.' );
            $( '#pay_form' ).hide();
            history.pushState( { id: 'Index page' }, 'Pizza Ricca', '/' );
            clear_cart();
        };

        this.pay = function () {
            var widget = new cp.CloudPayments();
            widget.charge({
                    publicId: 'pk_7e65770d29dc6a3bcf50e0bf8d210',
                    description: 'Оплата заказа №1090909222684',
                    amount: 790, 
                    currency: 'RUB', 
                    invoiceId: '1090909222684', //номер заказа
                    email: 'onericozelot@gmail.com',  
                    data: {
                        hash: 'cf226845ee26b020a6c58eab13710061'
                    }
                },
                success,
                function (reason, options) { // fail
                warning( "Во время платежа произошла ошибка! Повторите попытку.", 'Внимание!' );
                });
        };
        $( '#checkout' ).click( pay );

        $(function(){
            pay();
        });

        </script>



            </article>

            <footer>
            <div class='postfix'>
                <div class="logo">
                    <img src="/img/logo.png">
                    <div id="nav">
                        <a href="/">Пицца</a><a href="/promo">Акции</a><a href="/feedback">Отзывы</a><a href="/dostavka">Область доставки</a><a href="/best">Наши преимущества</a><a href="/good">Добрые дела</a><a href="/contacts">Контакты</a><a href="/vacancy">Вакансии</a>
                        <a href="/requisites">Реквизиты</a>
                    </div>
                </div>
                
                <div class="social">
                        Мы в социальных сетях<br> 
                        <a href="https://instagram.com/pizzaricca" target="_blank"><img src="/img/inst.png" style="border:0"></a>
                        
                        <a href="https://vk.com/pizza_ricca" target="_blank"><img src="/img/vk.png" style="border:0"></a>
                        
                        <a target="_blank" href="https://www.tripadvisor.ru/Restaurant_Review-g298515-d8505857-Reviews-Pizza_Ricca-Nizhny_Novgorod_Nizhny_Novgorod_Oblast_Volga_District.html"><img src="https://www.tripadvisor.ru/img/cdsi/img2/branding/socialWidget/20x20_white-21690-2.png"/></a>
                </div>

                <div class='warning'>
                    <img src='/img/eda.png'><br>
                    Копирование материалов сайта запрещено. Информация на сайте не является публичной офертой.
                </div>
            </div>
        </footer>

        </div>

        <script>
        worktime_check( '22:00', '00:00' );
        </script>


        <!-- Yandex.Metrika informer -->
        <a href="https://metrika.yandex.ru/stat/?id=28050606&amp;from=informer"
        target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/28050606/1_0_FFFFFFFF_EFEFEFFF_1_pageviews"
        style="width:80px; height:1px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры)" /></a>
        <!-- /Yandex.Metrika informer -->

        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(28050606, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
        });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/28050606" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->


        <!-- Rating@Mail.ru counter -->
        <script type="text/javascript">
        var _tmr = window._tmr || (window._tmr = []);
        _tmr.push({id: "2791232", type: "pageView", start: (new Date

        ()).getTime()});
        (function (d, w, id) {
        if (d.getElementById(id)) return;
        var ts = d.createElement("script"); ts.type = 

        "text/javascript"; ts.async = true; ts.id = id;
        ts.src = (d.location.protocol == "https:" ? "https:" : 

        "http:") + "//top-fwz1.mail.ru/js/code.js";
        var f = function () {var s = d.getElementsByTagName

        ("script")[0]; s.parentNode.insertBefore(ts, s);};
        if (w.opera == "[object Opera]") { d.addEventListener

        ("DOMContentLoaded", f, false); } else { f(); }
        })(document, window, "topmailru-code");
        </script>

        <noscript>
        <div style="position:absolute;left:-10000px;">
        <img src="//top-fwz1.mail.ru/counter?id=2791232;js=na" style="border:0;" height="1" width="1" alt="–ейтинг@Mail.ru" />
        </div></noscript>
        <!-- //Rating@Mail.ru counter -->

        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-79889012-1', 'auto');
        ga('send', 'pageview');

        </script>
        </body>
        </html>
    `
}