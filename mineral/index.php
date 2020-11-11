<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8"/>
    <title>Mineral 89</title>
    <link rel="stylesheet" href="css/stylev3.css" type="text/css" media="screen, projection"/>
    <link rel="stylesheet" href="css/animate.css">
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
 <script type="text/javascript" src="js/cookie.js"></script>
      <script type="text/javascript" src="js/preloader.js"></script>
      <link href="css/main.060f.css" rel="stylesheet" />
<script type="text/javascript">
$(document).ready(function() {
	$('#button').on('click', function() {
        $.ajax({
			url: 'click.php',
			method: 'get',
			dataType: 'json',
			data: {id: '6'},     //id счетчика
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
            <a href="../main/index.html" class="home-move"></a>
            <a href="#" class="next-move"></a>
          </nav>
          <div class="sl sl1 _show">
            <div class="abs like">
				<?php
	$id_counter = "6"; //id счетчика
	require_once "select_count.php";
?>
              <p>
                Я рекомендую <b>MINÉRAL</b> 89<br>
                <b><span id="count"><?php echo $count; ?></span> коллег</b> рекомендуют
              </p>
             <input id="input_count" type="hidden" value="0">
       			<form class="abs">
				 <input type="button" id="button" value="" >
              </form>
            </div>
            <div class="abs tub"></div>
            <h1 class="abs">
              <b>MINÉRAL</b> 89
            </h1>
            <h2 class="abs">
              Ежедневный гель-сыворотка<br>для кожи, подверженной<br>агрессивным внешним<br>воздействиям
              <span>Эффективно восстанавливает<br>барьерную функцию кожи<br>и увлажняет ее</span>
            </h2>
          </div>
          <div class="sl sl2">
            <div class="abs tub"></div>
            <a href="#mineral-update" class="abs sl2-links sl2-link1">
              <span class="abs">актуализация</span>
            </a>
            <a href="#mineral-key" class="abs sl2-links sl2-link2">
              <span class="abs">ключевой<br />ингредиент</span>
            </a>
            <a href="#mineral-gamma" class="abs sl2-links sl2-link3">
              <span class="abs">гамма</span>
            </a>
            <a href="#mineral-scheme" class="abs sl2-links sl2-link4">
              <span class="abs">схема<br />применения</span>
            </a>
            <div class="abs ovec vec1">
              <div class="abs cube cube1"></div>
              <p class="abs text text1"><b>интервью медицинского <br>эксперта марки<br> Vichy<br>Екатерины Турубара</b></p>
              <a href="#mineral-video1" class="abs"></a>
            </div>
            <div class="abs ovec vec2">
              <div class="abs cube cube2"></div>
              <p class="abs text text2">КЛЮЧЕВЫЕ<br><b>ИНГРЕДИЕНТЫ</b></p>
              <a href="#mineral-key2" class="abs"></a>
            </div>
            <div class="abs ovec vec3">
              <div class="abs cube cube3"></div>
              <p class="abs text text3">Гамма<br><b>MINÉRAL</b> 89</p>
              <a href="#mineral-gamma2" class="abs"></a>
            </div>
            <div class="abs ovec vec4">
              <div class="abs cube cube4"></div>
              <p class="abs text text4">скачать<br><b>схему<br>применения</b></p>
              <a href="https://lorealcongress.ru/files/scheme_mineral.pdf" target="_blank" class="abs"></a>
            </div>
          </div>
          <div class="abs m_pop1">
            <div class="abs x"></div>
            <p class="abs m_pop1-p1">Почему важно защищать и укреплять кожный барьер в любом возрасте и при любых проблемах кожи?</p>
            <p class="abs m_pop1-p2">Екатерина Турубара</p>
            <div class="video">
                <iframe width="1024" height="575" src="https://www.youtube.com/embed/I3WKUsM7k-8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
          <div class="abs m_pop2">
            <div class="abs x"></div>
            <p class="abs q1"><b>MINÉRAL</b> 89</p>
            <p class="abs q2">Уникальное сочетание ингредиентов,<br>усиливающих барьерные функции кожи</p>
            <p class="abs q3">89% ВУЛКАНИЧЕСКАЯ<br>ТЕРМАЛЬНАЯ ВОДА VICHY</p>
            <p class="abs q4">0,4% ГИАЛУРОНОВАЯ<br>КИСЛОТА</p>
            <p class="abs q5">
              <span>Стимулирует дифференциацию кератиноцитов</span>
              <span>Регулирует плотные контакты</span>
              <span>Уменьшает ТЭПВ</span>
            </p>
            <p class="abs q6">Образует на поверхности кожи водоудерживающую пленку</p>
            <div class="abs f1"></div>
            <p class="abs q7">концентрация воды в коже</p>
            <p class="abs q8">Тест in vivo: 44 женщины, концентрация воды<br>в коже измерялась методом конфокальной<br>рамановской спектроскопии до нанесения<br>препарата и через 8 часов после</p>
            <div class="abs g g1">
              <span class="abs">-20<span>%</span></span>
            </div>
            <div class="abs g g2"></div>
            <div class="abs g g3">
              <span class="abs">+86<span>%</span></span>
            </div>
            <div class="abs g g4"></div>
          </div>
          <div class="abs m_pop3">
            <div class="abs x"></div>
            <p class="abs w1">гамма <b>MINÉRAL</b> 89</p>
            <p class="abs w2">ЕЖЕДНЕВНОЕ УВЛАЖНЕНИЕ И ВОССТАНОВЛЕНИЕ БАРЬЕРНОЙ<br>ФУНКЦИИ КОЖИ</p>
            <p class="abs w3">Основной уход</p>
            <p class="abs w4">Дополнительный уход</p>
            <p class="abs w5">Ежедневная<br>гель-сыворотка<br>для кожи</p>
            <p class="abs w6">Восстанавливающая<br>и укрепляющая<br>сыворотка для кожи<br>вокруг глаз</p>
            <p class="abs w7">Экспресс-маска<br>на тканевой основе<br>из микроводорослей</p>
            <div class="abs o o1"></div>
            <div class="abs o o2"></div>
            <div class="abs o o3"></div>
          </div>
          <div class="abs m_pop4">
            <div class="abs x"></div>
            <p class="abs e1"><b>MINÉRAL</b> 89</p>
            <p class="abs e2">Ежедневная гель-сыворотка для кожи,<br>подверженной агрессивным внешним<br>воздействиям</p>
            <ul class="abs list list1">
              <li>Вулканическая<br>термальная вода VICHY 89%</li>
              <li>Гиалуроновая кислота 0,4%</li>
            </ul>
            <p class="abs plsh plsh1">Восстанавливает барьерную<br>функцию кожи</p>
            <p class="abs plsh plsh2">Увлажняет</p>
            <div class="abs tub"></div>
          </div>
          <div class="abs m_pop5">
            <div class="abs x"></div>
            <p class="abs e1"><b>MINÉRAL</b> 89</p>
            <p class="abs e2">Восстанавливающий и укрепляющий<br>уход для кожи вокруг глаз</p>
            <ul class="abs list list1">
              <li>Вулканическая<br>термальная вода VICHY 89%</li>
              <li>Гиалуроновая кислота 0,2%</li>
              <li>Аденозин</li>
              <li>DERMOCHLORELLA 1%</li>
              <li>Кофеин 0,3%</li>
            </ul>
            <p class="abs plsh plsh1">Восстанавливает барьерную<br>функцию кожи</p>
            <p class="abs plsh plsh2">Увлажняет</p>
            <p class="abs plsh plsh3">Разглаживает линии<br>обезвоженности</p>
            <p class="abs plsh plsh4">Уменьшает темные круги под<br>глазами</p>
            <div class="abs tub"></div>
            <div class="abs angle"></div>
          </div>
          <div class="abs m_pop6">
            <div class="abs x"></div>
            <p class="abs e1"><b>MINÉRAL</b> 89</p>
            <p class="abs e2">Экспресс-маска на тканевой основе<br>из микроводорослей</p>
            <ul class="abs list list1">
              <li>Вулканическая<br>термальная<br>вода VICHY 89%</li>
              <li>Гиалуроновая<br>кислота 0,2%</li>
              <li>Тканевая основа<br>из альгината</li>
            </ul>
            <p class="abs plsh plsh1">Усиливает барьерные<br>функцию кожи</p>
            <p class="abs plsh plsh2">Увлажняет</p>
            <p class="abs e3">Увлажняет на 24 часа, заметно успокаивает<br>и дарит ощущение комфорта</p>
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
            <p class="abs y9">ежедневный<br>гель-сыворотка для кожи,<br>подверженной<br>агрессивным внешним<br>воздействиям</p>

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
  </body>
</html>
