<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8"/>
        <title>Lab Vichy!</title>
        <link rel="stylesheet" href="css/stylev3.css" type="text/css" media="screen, projection"/><link href="../common/message.css" rel="stylesheet"/>
        <link href="css/main.060f.css" rel="stylesheet" />
      <link href="../../common/message.css" rel="stylesheet"/>  <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
        <script type="text/javascript" src="js/common.js"></script>
        <script type="text/javascript" src="js/preloader.js"></script>
<script type="text/javascript" src="../../common/message.js"></script>
        <script type="text/javascript">
            $(document).ready(function () {
                $('form').on('submit', function () {
                    $('#please_wait').css("display", "block");
                });

                $('#report_button').click(function () {
                    $('#email_div').css("display", "block");
                });
            });
        </script>
        <style type="text/css">
            .modal.modal2.ac .modal-inner.inner2 img {max-width: 100%;max-height: 100%!important;width: auto!important;min-width: 0;min-height: 0;max-height: 100%;height: auto;}
            button#do_submit_2 {width: 100%;}
            .abs.uploaded {display: none;}
        </style>
    </head>
    <body>
            <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(69093577, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
    });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/69093577" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
        <div class="preloader">
            <div class="start__cube">
                <div class="start__cube-box start__cube-box-center">
                    <div class="logo-text">
                        <div>ACD</div>
                        <div>КОНГРЕСС</div>
                    </div>
                    <a data-id="center" class="cube cube--center">
                        <div class="cube__side cube__side--front"></div>
                        <div class="cube__side cube__side--back"></div>
                        <div class="cube__side cube__side--left"></div>
                        <div class="cube__side cube__side--right"></div>
                        <div class="cube__side cube__side--top"></div>
                        <div class="cube__side cube__side--bottom"></div>
                        <div class="cube-shadow"></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="wrap sq1">
            <div class="over-wrap">
                <div id="page">
                    <div class="sl sl1 sq1">
                        <a class="abs back" href="javascript:history.back()"></a>
                        <div class="abs step step1">
                            <div class="num">1</div>
                            <div class="desc">Сделайте снимок<br>или загрузите фото</div>
                        </div>
                        <div class="abs step step2">
                            <div class="num">2</div>
                            <div class="desc">Выберите<br>понравившийся фон
                            </div>
                        </div>
                        <div class="abs step step3">
                            <div class="num">3</div>
                            <div class="desc">Сохраните на память<br>фото с ACD конгресса 2020</div>
                        </div>
                        <div class="abs step step4">
                            <div class="num">4</div>
                            <div class="desc">Поделитесь снимком<br>в социальных сетях с хэштегом<br><span>#ACDcongress</span></div>
                        </div>
                        <form method="post" action="" id="upload_cabin">
                            <div class="abs choose">
                                <div class="t1">выберите файл</div>
                                <input name="image_file" type="file" id="image_file" accept="image/*" required />
                                <label for="image_file" class="btn btn-primary-outlined">Выбрать</label>
                                <div id="filename" class="t2">Файл не выбран</div>
                            </div>
                            <input type="radio" id="bg1" name="bg" value="1"/>
                            <label for="bg1" class="label_radio"><div class="abs q1 sel"></div></label>
                            <input type="radio" id="bg2" name="bg" value="2"/>
                            <label for="bg2" class="label_radio"><div class="abs q2"></div></label>
                            <input type="radio" id="bg3" name="bg" value="3"/>
                            <label for="bg3" class="label_radio"><div class="abs q3"></div></label>
                            <input type="radio" id="bg4" name="bg" value="4"/>
                            <label for="bg4" class="label_radio"><div class="abs q4"></div></label>
                            <input name="submit" type="submit" value="Отправить" class="abs submitbtn btn btn-primary" />
                        </form>
                        <div class="abs camera"></div>
                    </div>
                    <div class="sl2"></div>
                    <div class="sl3"></div>
                    <div class="sl4"></div>

                    <div class="modal modal1">
                        <div class="modal-inner">
                            <div class="result-text">
                                ПОЖАЛУЙСТА, ПОДОЖДИТЕ<br><br>
                                <!--скачайте фотографию,<br>чтобы узнать результат -->
                            </div>
                            <!-- div class="btn-download" id="download">
                                Скачать
                            </div -->
                            <div class="share">
                                Поделись своим фото<br>в СОЦИАЛЬНЫХ СЕТЯХ<br>с хештегом <b>#ACDCongress!</b>
                            </div>
                        </div>
                        <!-- div class="btn-dislike dislike">НЕ ПОНРАВИЛОСЬ ФОТО</div -->
                    </div>

                    <div class="modal modal2">
                        <div class="modal-inner inner2">
                            <img src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' id='uploaded_photo' />
                        </div>
                        <div class="buttons">
                            <div class="btn-dslk dislike">НЕ ПОНРАВИЛОСЬ ФОТО</div>
                            <a class="btn-dwn" onclick="ym(69093577,'reachGoal','clickfoto'); return true;">Скачать</a>
                        </div>
                    </div>
                    <div class="modal modal3">
                        <div class="dislike-img"></div>
                        <div class="form_upload ac">
                            <div class="title">Вам не понравился снимок? </div>
                            <div class="subtitle">Мы обработаем его вручную</div>
                            <form method="post" action="#" id="upload_cabin2">
                                <input type="hidden" id="resubmit" name="resubmit"/>
                                <input type="text" class="input" placeholder="email"/>
                                <button id="do_submit_2" class="btn">отправить</button>
                            </form>
                        </div>
                        <div class="abs uploaded">
                            <div class="title t3">отправлено!</div>
                            <div class="subtitle t4">Извините за испорченный кадр<br>МЫ ОТПРАВИМ ВАМ ЕГО В ТЕЧЕНИЕ<br>3 дней</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
