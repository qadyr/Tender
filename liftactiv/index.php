<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8"/>
    <title>LifTActiV</title>
    <link rel="stylesheet" href="css/stylev3.css" type="text/css" media="screen, projection"/>
    <link rel="stylesheet" href="css/animate.css">
      <link href="css/main.060f.css" rel="stylesheet" />
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
 <script type="text/javascript" src="js/cookie.js"></script>
  <script type="text/javascript" src="js/preloader.js"></script>
<script type="text/javascript" src="../common/message.js"></script>

<script type="text/javascript">
$(document).ready(function() {
	$('#button').on('click', function() {
        $.ajax({
			url: 'click.php',
			method: 'get',
			dataType: 'json',
			data: {id: '5'},     //id счетчика
			success: function(data){
				$('#count').html(data.count);
				//alert(data.ip);
				if(data.ip){
					$('#button').prop('disabled', true);
				}
			}
		});

	});


});
</script>
  </head>
  <body>
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
    <div class="wrap">
      <div class="common-bg hide"></div>
      <div class="common-bg2 hide"></div>
      <div class="over-wrap">
        <div id="page">
          <nav class="abs main-m">
            <a href="../labs/labvichy/index.html" class="prev-move"></a>
            <a href="../index.html" class="home-move"></a>
            <a href="#" class="next-move"></a>
          </nav>
          <div class="sl sl1 _show">
            <div class="abs like">
      				<?php
              	$id_counter = "5"; //id счетчика
              	require_once "select_count.php";
              ?>
              <p>
                Я рекомендую СЫВОРОТКУ<br>
                <b>LIFTACTIV SPECIALIST PEPTIDE-C</b><br>
                <b><span id="count"><?php echo $count; ?></span> коллег</b> рекомендуют
              </p>
              <input id="input_count" type="hidden" value="0">
         			<form class="abs">
  				      <input type="button" id="button" value="" >
              </form>
            </div>
            <div class="abs tub"></div>
            <h1 class="abs">
              LIFTACTIV<br>
              SPECIALIST Peptide-C
            </h1>
            <h2 class="abs">
              Концентрированная<br>антивозрастная<br>сыворотка в ампулах.
              <span>Сокращает морщины и повышает<br>упругость кожи</span>
            </h2>
            <h3 class="abs">Стимуляция естественных<br>механизмов обновления</h3>
          </div>
          <div class="sl sl2">
            <div class="abs tub"></div>
            <a href="#liftactiv-update" class="abs sl2-links sl2-link1">
              <span class="abs">актуализация</span>
            </a>
            <a href="#liftactiv-key" class="abs sl2-links sl2-link2">
              <span class="abs">ключевой<br />ингредиент</span>
            </a>
            <a href="#liftactiv-gamma" class="abs sl2-links sl2-link3">
              <span class="abs">гамма</span>
            </a>
            <a href="#liftactiv-scheme" class="abs sl2-links sl2-link4">
              <span class="abs">схема<br />применения</span>
            </a>
            <div class="abs ovec vec1">
              <div class="abs cube cube1"></div>
              <p class="abs text text1"><b>интервью к.м.н.,<br>врача<br>дерматовенеролога,<br>косметолога<br>наумчик г.а.</b></p>
              <a href="#liftactiv-video1" class="abs"></a>
            </div>
            <div class="abs ovec vec2">
              <div class="abs cube cube2"></div>
              <p class="abs text text2">КЛЮЧЕВЫЕ<br><b>ИНГРЕДИЕНТЫ</b></p>
              <a href="#liftactiv-key2" class="abs"></a>
            </div>
            <div class="abs ovec vec3">
              <div class="abs cube cube3"></div>
              <p class="abs text text3">Гамма<br><b>LIFT</b>ACTIV</p>
              <a href="#liftactiv-gamma2" class="abs"></a>
            </div>
            <div class="abs ovec vec4">
              <div class="abs cube cube4"></div>
              <p class="abs text text4">скачать<br><b>схему<br>применения</b></p>
              <a href="https://lorealcongress.ru/files/scheme_liftactiv.pdf" target="_blank" class="abs"></a>
            </div>
          </div>
          <div class="abs m_pop1">
            <div class="abs x"></div>
            <p class="abs m_pop1-p1">В каком возрасте начинается уменьшение количества коллагеновых и эластиновых волокон в коже и с чем это связано?</p>
            <p class="abs m_pop1-p2">к.м.н., врач дерматовенеролог, косметолог Наумчик Г.А.</p>
            <iframe id='player1' width="1024" height="575" src="https://www.youtube.com/embed/VWvGaLMxkFI?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="abs m_pop2">
            <div class="abs x"></div>
            <p class="abs q1"><b>LIFT</b><span>ACTIV</span> SPECIALIST <b style="color: #C71A1A;">Peptide-C</b></p>
            <p class="abs q2">Концентрированная антивозрастная<br>сыворотка в ампулах</p>
            <p class="abs q3">БИОПЕПТИДЫ</p>
            <p class="abs q4">ВИТАМИН С 10%</p>
            <p class="abs q5">пептиды риса и люпина</p>
            <p class="abs q6">(pH 2,8)</p>
            <p class="abs q7">Стимулирует синтез коллагена I, III, VII<br>типов, ламинина и эластина</p>
            <p class="abs q8">Регулирует пигментацию<br>и нейтрализует свободные радикалы</p>
            <p class="abs q9">через 4 недели применения</p>
            <p class="abs q10">
              <b>Протокол:</b> 52 женщины, возраст 40-45 лет, типы кожи<br>от нормального до жирного, использование 2 раза в<br>день (30 дней)<br><b>Метод оценки:</b> анализ отпечатков морщин «гусиных<br>лапок» (То, Т30) при помощи программы обеспечения<br>Quantiricles (измерение линейных размеров) и Toposurf<br>3D (трехмерное сканирование)
            </p>
            <p class="abs q11">
              <b>Протокол:</b> 47 женщин, возраст 40-60 лет, все типы<br>кожи, 50% характеризую кожу как чувствительную,<br>использование 2 раза в день (28 дней)<br>
              <b>Метод оценки:</b> клиническая оценка с использованием<br>Skin Aging Atlas
            </p>
            <p class="abs q12">-9%<span>морщины в уголках<br>глаз</span></p>
            <p class="abs q13">-11%<span>морщины на лбу</span></p>
            <div class="abs g g1"></div>
            <div class="abs g g2"></div>
            <div class="abs g g3"></div>
            <div class="abs g g4">
              <span>-11%</span>
            </div>
            <div class="abs g g5">
              <span>-15%</span>
            </div>
            <div class="abs g g6">
              <span>-13%</span>
            </div>
          </div>
          <div class="abs m_pop3">
            <div class="abs x"></div>
            <p class="abs w1">ГАММА <b>LIFT</b><span>ACTIV</span></p>
            <p class="abs w3">ОСНОВНОЙ УХОД</p>
            <p class="abs w4">ДОПОЛНИТЕЛЬНЫЙ УХОД</p>

            <p class="abs w12">
              <b>LIFT</b><span>ACTIV</span><br>PEPTIDE-C
            </p>
            <p class="abs w13">
              <b>LIFT</b><span>ACTIV</span><br>COLLAGEN<br>SPECIALIST
            </p>
            <p class="abs w14">
              <b>LIFT</b><span>ACTIV</span><br>COLLAGEN<br>SPECIALIST<br>SPF25
            </p>
            <p class="abs w15">
              <b>LIFT</b><span>ACTIV</span><br>HYALU MASK
            </p>
            <p class="abs w16">
              Концентрированная<br>антивозрастная<br>сыворотка в ампулах
            </p>
            <p class="abs w17">
              Крем-уход
            </p>
            <p class="abs w18">
              Крем-уход
            </p>
            <p class="abs w19">
              Гиалуроновая<br>экспресс-маска
            </p>
            <div class="abs o o1"></div>
            <div class="abs o o2"></div>
            <div class="abs o o3"></div>
            <div class="abs o o4"></div>
          </div>
          <div class="abs m_pop4">
            <div class="abs x"></div>
            <p class="abs e1"><b>LIFT</b><span style="color: #B01700;">ACTIV</span> SPECIALIST <b style="color: #B01700;">Peptide-C</b></p>
            <p class="abs e2">Концентрированная антивозрастная<br>сыворотка в ампулах</p>
            <ul class="abs list list1">
              <li>Биопептиды<br>Пептиды риса и люпина</li>
              <li>Гиалуроновая кислота</li>
            </ul>
            <ul class="abs list list2">
              <li>ВИТАМИН С 10% (pH 2,8)</li>
            </ul>
            <p class="abs plsh plsh1">ПОВЫШАЕТ УПРУГОСТЬ КОЖИ</p>
            <p class="abs plsh plsh2">СНИЖАЕТ ВЫРАЖЕННОСТЬ МОРЩИН</p>
            <p class="abs plsh plsh3">ВЫРАВНИВАЕТ ТОН И ОСВЕЖАЕТ<br>ЦВЕТ КОЖИ</p>
            <div class="abs tub"></div>
          </div>
          <div class="abs m_pop5">
            <div class="abs x"></div>
            <p class="abs e1"><b>LIFT</b><span style="color: #B01700;">ACTIV</span> COLLAGEN SPECIALIST</p>
            <p class="abs e2">крем-уход</p>
            <ul class="abs list list1">
              <li>Биопептиды<br>Пептиды гороха<br>и тетрапептид</li>
            </ul>
            <ul class="abs list list2">
              <li>ВИТАМИН СG 10%</li>
              <li>Эперулин</li>
            </ul>
            <p class="abs plsh plsh1">ПОВЫШАЕТ УПРУГОСТЬ КОЖИ</p>
            <p class="abs plsh plsh2">РАЗГЛАЖИВАЕТ МОРЩИНЫ</p>
            <p class="abs plsh plsh3">ВЫРАВНИВАЕТ ТОН КОЖИ</p>
            <div class="abs tub"></div>
          </div>
          <div class="abs m_pop6">
            <div class="abs x"></div>
            <p class="abs e1"><b>LIFT</b><span style="color: #B01700;">ACTIV</span> COLLAGEN SPECIALIST <span style="color: #B01700;">SPF 25</span></p>
            <p class="abs e2">крем-уход</p>
            <p class="abs e2s"><b>СОЛНЦЕЗАЩИТНЫЕ ФИЛЬТРЫ</b> широкого спектра против <b>UVA</b> и <b>UVB-</b>лучей</p>
            <ul class="abs list list1">
              <li>Биопептид</li>
              <li>Витамин СG</li>
            </ul>
            <ul class="abs list list2">
              <li>Гликолевая кислота</li>
              <li>Phe resorcinol</li>
            </ul>
            <ul class="abs list list3">
              <li>Гиалуроновая кислота</li>
            </ul>
            <p class="abs plsh plsh1">ЗАЩИЩАЕТ КОЖУ ОТ UV-ЛУЧЕЙ</p>
            <p class="abs plsh plsh2">ПОВЫШАЕТ УПРУГОСТЬ КОЖИ</p>
            <p class="abs plsh plsh3">СНИЖАЕТ ВЫРАЖЕННОСТЬ<br>МОРЩИН</p>
            <p class="abs plsh plsh4">ВЫРАВНИВАЕТ ТОН И ОСВЕЖАЕТ<br>ЦВЕТ КОЖИ</p>
            <div class="abs tub"></div>
          </div>
          <div class="abs m_pop7">
            <div class="abs x"></div>
            <p class="abs e1"><b>LIFT</b><span style="color: #B01700;">ACTIV HYALU MASK</span></p>
            <p class="abs e2">Гиалуроновая экспресс-маска</p>
            <ul class="abs list list1">
              <li>Экстракт агавы</li>
              <li>
                Гиалуроновая кислота 1%:
                <span>низкомолекулярная</span>
                <span>высокомолекулярная</span>
              </li>
            </ul>
            <p class="abs plsh plsh1">УВЛАЖНЯЕТ КОЖУ</p>
            <p class="abs plsh plsh2">ПОВЫШАЕТ ТОНУС<br>И ЭЛАСТИЧНОСТЬ</p>
            <div class="abs tub"></div>
          </div>
          <div class="abs m_pop8">
            <p class="abs y1">СХЕМА ПРИМЕНЕНИЯ <b>anti-age</b> средств </p>
            <p class="abs y2">slow age</p>
            <p class="abs y3">liftactiv specialist</p>
            <p class="abs y4">neovadiol</p>
            <p class="abs y5">mineral 89</p>

            <p class="abs y6">защита кожи от<br>воздействия внешних<br>экспозом-факторов</p>
            <p class="abs y7">стимуляция естественных<br>механизмов обновления<br>кожи</p>
            <p class="abs y8">физиологическая<br>регенерация кожи в период<br>менопаузального<br>старения</p>
            <p class="abs y9">ежедневная<br>гель-сыворотка для кожи,<br>подверженной<br>агрессивным внешним<br>воздействиям</p>

            <p class="abs y10">коррекция первых<br>морщин, неровного<br>тона, тусклого<br>цвета кожи</p>
            <p class="abs y11">коррекция морщин<br>и упругости кожи</p>
            <p class="abs y12">коррекция плотности<br>кожи и деформация<br>овала лица</p>
            <p class="abs y13">Может использоваться<br>в качестве бустера<br>с любым<br>из антивозрастных<br>уходов vichy</p>

            <p class="abs y14">комплекс антиоксидантов,<br>пробиотик Bifidus,<br>вулканическая вода VICHY<br>SPF 25/30</p>
            <p class="abs y15">пептиды, витамин С</p>
            <p class="abs y16">Про-ксилан, HEPES,<br>Hydrovance, Гедион,<br>гиалуроновая<br>кислота</p>
            <p class="abs y17">гиалуроновая кислота,<br>вулканическая вода<br>VICHY [89%]</p>
          </div>
        </div>
      </div>
    </div>

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
<script type="text/javascript" src="https://www.youtube.com/player_api"></script>
<script>
            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player1');               
            }            
            $(".m_pop1 .abs.x").click(function(){
                player.stopVideo();
            });

     </script>
  </body>
</html>
