<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8"/>
    <title>CeraVE</title>
    <link rel="stylesheet" href="css/stylev3.css" type="text/css" media="screen, projection"/><link href="../common/message.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/animate.css">
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
	<script src="js/cookie.js"></script>

       <script type="text/javascript" src="js/preloader.js"></script>
<script type="text/javascript" src="../common/message.js"></script>
       <link href="css/main.060f.css" rel="stylesheet" />
<script type="text/javascript">
$(document).ready(function() {
	$('#button').on('click', function() {
        $.ajax({
			url: 'click.php',
			method: 'get',
			dataType: 'json',
			data: {id: '9'},     //id счетчика
			success: function(data){
				$('#count').html(data.count);
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
      <div class="common-bg1">
        <div class="abs lside"></div>
        <div class="abs rside"></div>
      </div>
      <div class="common-bg1add hide">
        <div class="abs lside"></div>
        <div class="abs rside"></div>
      </div>
      <div class="common-bg2 hide"></div>
      <div class="common-bg3 hide">
        <div class="abs lside"></div>
        <div class="abs rside"></div>
      </div>

      <div class="common-bg4 hide">
        <div class="abs lside"></div>
        <div class="abs rside"></div>
      </div>
      <div class="common-bg5 hide">
        <div class="abs lside"></div>
        <div class="abs rside"></div>
      </div>
      <div class="common-bg6 hide">
        <div class="abs lside"></div>
        <div class="abs rside"></div>
      </div>
      <div class="common-bg7 hide">
        <div class="abs lside"></div>
        <div class="abs rside"></div>
      </div>
      <div class="over-wrap">
        <div id="page">
          <nav class="abs main-m">
            <a href="../labs/labcerave/index.html" class="prev-move"></a>
            <a href="../index.html" class="home-move"></a>
            <!-- <a href="#" class="next-move hide"></a> -->
          </nav>
          <div class="sl sl2 _show">
            <a href="#cerave-update" class="abs sl2-links sl2-link1">
              <span class="abs">актуализация</span>
            </a>
            <a href="#cerave-key" class="abs sl2-links sl2-link2">
              <span class="abs">ключевой<br>ингредиент</span>
            </a>
            <a href="#cerave-gamma" class="abs sl2-links sl2-link3">
              <span class="abs">гамма</span>
            </a>
            <a href="#cerave-scheme" class="abs sl2-links sl2-link4">
              <span class="abs">схема<br>применения</span>
            </a>
            <div class="abs ovec vec1">
              <div class="abs cube cube1"></div>
              <p class="abs text text1"><b>интервью д.м.н.,<br>проф.<br>тамразовой о.б.</b></p>
              <a href="#cerave-video1" class="abs"></a>
            </div>
            <div class="abs ovec vec2">
              <div class="abs cube cube2"></div>
              <p class="abs text text2">КЛЮЧЕВЫЕ<br><b>АКТИВНЫЕ<br>ИНГРЕДИЕНТЫ</b></p>
              <a href="#cerave-video2" class="abs"></a>
            </div>
            <div class="abs ovec vec3">
              <div class="abs cube cube3"></div>
              <p class="abs text text3">Гамма<br><b>увлажняющих<br>средств</b></p>
              <a href="#cerave-gamma2" class="abs"></a>
            </div>
            <div class="abs ovec vec4">
              <div class="abs cube cube4"></div>
              <p class="abs text text4">скачать<br><b>схему<br>применения</b></p>
              <a href="https://lorealcongress.ru/files/scheme_ceravesa.pdf" target="_blank" class="abs"></a>
            </div>
          </div>
          <div class="abs m_pop1">
            <div class="abs x"></div>
            <p class="abs m_pop1-p1">Какова роль эмолентов в уходе за сухой кожей?</p>
            <p class="abs m_pop1-p2">д.м.н., проф. Тамразова О.Б.</p>
            <iframe id='player1' width="1024" height="575" src="https://www.youtube.com/embed/Q__I2ijSyY0?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="abs m_pop2">
            <div class="abs x"></div>
            <p class="abs q1"><span>гамма</span> увлажняющих средств</p>
            <p class="abs q2">ключевые &nbsp;&nbsp;<span>ингредиенты</span></p>
            <p class="abs q3">ЗапатЕнтованная<br>технология mve<span>®</span></p>
            <p class="abs q4">ИНГРЕДИЕНТЫ НАХОДЯТСЯ В МНОГОСЛОЙНЫХ СФЕРАХ</p>
            <p class="abs q5">
              СФЕРЫ ПОСТЕПЕННО «открываются»,<br>
              ПОСЛЕДОВАТЕЛЬНО ВЫСВОБОЖДАЯ АКТИВНЫЕ<br>
              КОМПОНЕНТЫ В ТЕЧЕНИЕ ДНЯ, ЧТО ОБЕСПЕЧИВАЕТ<br>
              <span>ДЛИТЕЛЬНЫЙ ЭФФЕКТ, ПЕРЕНОСИМОСТЬ<br>
              И ПОВЫШЕНИЕ КОМПЛАЕНТНОСТИ</span>
            </p>
            <div class="abs f1">
              <span class="abs">комбинация<br>трех церамидов</span>
            </div>
            <div class="abs f2">
              <span class="abs">ВЫСОКОМОЛЕКУЛЯРНАЯ<br>ГИАЛУРОНОВАЯ КИСЛОТА</span>
            </div>
            <div class="abs f3"></div>
          </div>
          <div class="abs m_pop3">
            <div class="abs like">
				<?php
	$id_counter = "9"; //id счетчика
	require_once "select_count.php";
?>
              <p>
                Я рекомендую увлажняющие средства CeraVe<br>
                <b><span id="count"><?php echo $count; ?></span> коллег</b> рекомендуют
              </p>
              <input id="input_count" type="hidden" value="0">
       			<form class="abs">
				 <input type="button" id="button" value="">
              </form>
            </div>
            <div class="abs x"></div>
            <p class="abs w1">Гамма увлажняющих средств</p>
            <p class="abs w2">бережное очищение</p>
            <p class="abs w3">УХОД</p>
            <p class="abs we we1">увлажняющая<br>мицеллярная вода</p>
            <p class="abs we we2">очищающий<br>гель</p>
            <p class="abs we we3">ДЛЯ ВСЕХ<br>ТИПОВ КОЖИ</p>
            <p class="abs we we4">для нормальной<br>и жирной кожи</p>
            <p class="abs we we5">увлажняющий<br>очищающий<br>крем-гель </p>
            <p class="abs we we6">ОЧИЩАЮЩАЯ<br>ПЕНКА</p>
            <p class="abs we we7">для нормальной<br>и сухой кожи</p>

            <p class="abs wr wr1">лосьон</p>
            <p class="abs wr wr2">крем</p>
            <p class="abs wr wr3">Восстанавливающий<br>крем</p>
            <p class="abs wr wr4">ДЛЯ ЛИЦА И ТЕЛА</p>
            <p class="abs wr wr5">для рук</p>
            <p class="abs wr wr6">увлажняющий<br>лосьон</p>
            <p class="abs wr wr7">увлажняющий<br>крем</p>
            <p class="abs wr wr8">для лица</p>
            <p class="abs wr wr9">для лица<br>spf</p>
            <p class="abs wr wr10">для глаз</p>

            <div class="abs o o1"></div>
            <div class="abs o o2"></div>
            <div class="abs o o3"></div>
            <div class="abs o o4"></div>
            <div class="abs o o5"></div>
            <div class="abs o o6"></div>
            <div class="abs o o7"></div>
          </div>
          <div class="abs m_pop4">
            <p class="abs z1">СХЕМА ПРИМЕНЕНИЯ <b>средств Cerave</b></p>
            <p class="abs z2">очищение</p>
            <p class="abs z3">уход</p>
            <p class="abs z4">сухая кожа/ксероз<br>(сенильный, метеорологический, при сахарном диабете)</p>
            <p class="abs z5">атопический дерматит</p>
            <p class="abs z6">Псориаз, ихтиоз, фолликулярный кератоз</p>

            <p class="abs zz zz1">увлажняющий<br>очищающий крем-гель</p>
            <p class="abs zz zz2">увлажняющая<br>очищающая пенка</p>
            <p class="abs zz zz3">увлажняющий<br>крем</p>
            <p class="abs zz zz4">увлажняющий<br>лосьон</p>
            <p class="abs zz zz5">увлажняющий<br>очищающий крем-гель</p>
            <p class="abs zz zz6">увлажняющая<br>очищающая пенка</p>
            <p class="abs zz zz7">увлажняющий<br>крем</p>
            <p class="abs zz zz8">увлажняющий<br>лосьон</p>
            <p class="abs zz zz9">SA смягчающий<br>очищающий гель</p>
            <p class="abs zz zz10">SA смягчающий<br>крем</p>

            <p class="abs z7">ЧАСТОТА ПРИМЕНЕНИЯ ЗАВИСИТ ОТ ИНДИВИДУАЛЬНОЙ ПОТРЕБНОСТИ ПАЦИЕНТА</p>
          </div>

          <div class="abs x_pop1">
            <div class="abs x"></div>
            <h1 class="abs">бережное очищение</h1>
            <h2 class="abs">для нормальной и сухой кожи лица и тела</h2>

            <div class="abs l l1">Мягко очищают</div>
            <div class="abs l l2">
              подходят для<br>
              кожи склонной<br>
              к атопическому<br>
              дерматиту и ксерозу
            </div>
            <div class="abs l l3">гипоаллергенно<br>без отдушек</div>

            <div class="abs r r1">
              <div>
                восстанавливают<br>гидролипидный барьер
                <span>церамиды 1, 3, 6-II<br>Жирные кислоты и холестерол</span>
              </div>
            </div>
            <div class="abs r r2">
              <div>
                ОБЕСПЕЧИВАют<br>ПРОЛОНГИРОВАННЫЙ<br>ЭФФЕКТ
                <span>Технология доставки MVE</span>
              </div>
            </div>
            <div class="abs r r3">
              <div>
                увлажняют
                <span>гиалуроновая кислота</span>
              </div>
            </div>

            <div class="abs tub"></div>
            <h3 class="abs">увлажняющий очищающий крем-гель<br>для нормальной и сухой кожи</h3>
            <h4 class="abs">увлажняющая очищающая пенка<br>для нормальной и сухой кожи</h4>
          </div>

          <div class="abs x_pop2">
            <div class="abs x"></div>
            <h1 class="abs">интенсивно очищающий гель</h1>
            <h2 class="abs">для нормальной и жирной кожи лица и тела</h2>

            <div class="abs l l1">интенсивно очищает,<br>не сушит кожу</div>
            <div class="abs l l2">эффективно удаляет<br>загрязнения, макияж,<br>себум</div>
            <div class="abs l l3">гипоаллергенно</div>
            <div class="abs l l4">
              без отдушек<br>
              без мыла<br>
              без сульфатов
            </div>

            <div class="abs r r1">
              <div>
                восстанавливает<br>гидролипидный барьер
                <span>церамиды 1, 3, 6-II<br>Жирные кислоты и холестерол</span>
              </div>
            </div>
            <div class="abs r r2">
              <div>
                ОБЕСПЕЧИВАет<br>ПРОЛОНГИРОВАННЫЙ<br>ЭФФЕКТ
                <span>Технология доставки MVE</span>
              </div>
            </div>
            <div class="abs r r3">
              <div>
                увлажняет
                <span>гиалуроновая кислота</span>
              </div>
            </div>
            <div class="abs r r4">
              <div>
                оказывает<br>противовоспалительное<br>действие
                <span>ниацинамид</span>
              </div>
            </div>

            <div class="abs tub"></div>
          </div>

          <div class="abs x_pop3">
            <div class="abs x"></div>
            <h1 class="abs">увлажняющая мицеллярная вода</h1>
            <h2 class="abs">для любого типа кожи лица</h2>

            <div class="abs l l1">
              <div>
                эффективно очищает кожу,<br>удаляя загрязнения,<br>макияж
                <span>не требует смывания водой</span>
              </div>
            </div>
            <div class="abs l l2">
              <div>
                протестировано<br>под контролем<br>офтальмологов
                <span>подходит для периорбитальной<br>области</span>
              </div>
            </div>
            <div class="abs l l3">без отдушек<br>без парабенов<br>без мыла</div>

            <div class="abs r r1">
              <div>
                восстанавливает<br>гидролипидный барьер
                <span>церамиды 1, 3, 6-II<br>Жирные кислоты и холестерол</span>
              </div>
            </div>
            <div class="abs r r2">
              <div>
                ОБЕСПЕЧИВАет<br>ПРОЛОНГИРОВАННЫЙ<br>ЭФФЕКТ
                <span>Технология доставки MVE</span>
              </div>
            </div>
            <div class="abs r r3">
              <div>
                оказывает<br>противовоспалительное<br>действие
                <span>ниацинамид</span>
              </div>
            </div>

            <div class="abs tub"></div>
          </div>

          <div class="abs x_pop4">
            <div class="abs x"></div>
            <h1 class="abs">увлажняющий крем и лосьон</h1>
            <h2 class="abs">для сухой и очень сухой кожи лица и тела</h2>

            <div class="abs l l1">
              <div>
                подходят для кожи,<br>склонной к атопии<br>и ксерозу
              </div>
            </div>
            <div class="abs l l2">
              <div>
                некомедогенно
              </div>
            </div>
            <div class="abs l l3">без отдушек<br>без парабенов</div>

            <div class="abs r r1">
              <div>
                восстанавливают<br>гидролипидный барьер
                <span>церамиды 1, 3, 6-II<br>Жирные кислоты и холестерол</span>
              </div>
            </div>
            <div class="abs r r2">
              <div>
                ОБЕСПЕЧИВАют<br>ПРОЛОНГИРОВАННЫЙ<br>ЭФФЕКТ
                <span>Технология доставки MVE</span>
              </div>
            </div>
            <div class="abs r r3">
              <div>
                увлажняют
                <span>гиалуроновая кислота</span>
              </div>
            </div>

            <div class="abs tub"></div>

            <h3 class="abs">легкая,<br>нежная текстура</h3>
            <h4 class="abs">насыщенная<br>текстура</h4>
          </div>

          <div class="abs x_pop5">
            <div class="abs x"></div>
            <h1 class="abs">увлажняющий лосьон</h1>
            <h2 class="abs">для нормальной и сухой кожи лица</h2>

            <div class="abs l l1">
              <div>
                некомедогенно
              </div>
            </div>
            <div class="abs l l2">
              <div>
                гипоаллергенно
              </div>
            </div>
            <div class="abs l l3">без отдушек<br>без мыла<br>без сульфатов</div>

            <div class="abs r r1">
              <div>
                восстанавливают<br>гидролипидный барьер
                <span>церамиды 1, 3, 6-II<br>Жирные кислоты и холестерол</span>
              </div>
            </div>
            <div class="abs r r2">
              <div>
                ОБЕСПЕЧИВАют<br>ПРОЛОНГИРОВАННЫЙ<br>ЭФФЕКТ
                <span>Технология доставки MVE</span>
              </div>
            </div>
            <div class="abs r r3">
              <div>
                увлажняют
                <span>гиалуроновая кислота</span>
              </div>
            </div>
            <div class="abs r r4">
              <div>
                оказывают<br>противовоспалительное<br>действие
                <span>ниацинамид</span>
              </div>
            </div>

            <div class="abs tub"></div>

            <h3 class="abs">SPF 25</h3>
          </div>

          <div class="abs x_pop6">
            <div class="abs x"></div>
            <h1 class="abs">увлажняющий лосьон вокруг глаз</h1>
            <h2 class="abs">для всех типов кожи</h2>

            <div class="abs l l1">
              <div>
                уменьшает первые<br>признаки старения кожи
              </div>
            </div>
            <div class="abs l l2">
              <div>
                гипоаллергенно<br>
                БЕЗ ОТДУШЕК<br>
                БЕЗ ПАРАБЕНОВ
              </div>
            </div>
            <div class="abs l l3">УЛЬТРАЛЕГКАЯ ФОрМУЛА</div>

            <div class="abs r r1">
              <div>
                восстанавливает<br>гидролипидный барьер
                <span>церамиды 1, 3, 6-II<br>Жирные кислоты и холестерол</span>
              </div>
            </div>
            <div class="abs r r2">
              <div>
                ОБЕСПЕЧИВАет<br>ПРОЛОНГИРОВАННЫЙ<br>ЭФФЕКТ
                <span>Технология доставки MVE</span>
              </div>
            </div>
            <div class="abs r r3">
              <div>
                увлажняет
                <span>гиалуроновая кислота</span>
              </div>
            </div>
            <div class="abs r r4">
              <div>
                оказывает<br>противовоспалительное<br>действие
                <span>ниацинамид</span>
              </div>
            </div>
            <div class="abs r r5">
              <div>
                уменьшает отечность<br>вокруг глаз
                <span>комплекс морских водорослей<br>и растительные экстракты</span>
              </div>
            </div>

            <div class="abs tub"></div>
          </div>

          <div class="abs x_pop7">
            <div class="abs x"></div>
            <h1 class="abs">Восстанавливающий крем</h1>
            <h2 class="abs">для очень сухой кожи рук</h2>

            <div class="abs l l1">
              <div>
                подходит для кожи,<br>склонной к атопии<br>и ксерозу
              </div>
            </div>
            <div class="abs l l2">
              <div>
                гипоаллергенно<br>
                БЕЗ ОТДУШЕК<br>
                БЕЗ ПАРАБЕНОВ
              </div>
            </div>
            <div class="abs l l3">НЕЖИРНАЯ ТЕКСТУРА</div>

            <div class="abs r r1">
              <div>
                восстанавливает<br>гидролипидный барьер
                <span>церамиды 1, 3, 6-II<br>Жирные кислоты и холестерол</span>
              </div>
            </div>
            <div class="abs r r2">
              <div>
                ОБЕСПЕЧИВАет<br>ПРОЛОНГИРОВАННЫЙ<br>ЭФФЕКТ
                <span>Технология доставки MVE</span>
              </div>
            </div>
            <div class="abs r r3">
              <div>
                увлажняет
                <span>гиалуроновая кислота</span>
              </div>
            </div>
            <div class="abs r r4">
              <div>
                оказывает<br>противовоспалительное<br>действие
                <span>ниацинамид</span>
              </div>
            </div>

            <div class="abs tub"></div>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="https://www.youtube.com/player_api"></script>
<script>
            var player;
            function onYouTubePlayerAPIReady() {
                player = new YT.Player('player1');

            }
            //so on jquery event or whatever call the play or stop on the video.
            //to play player.playVideo();
            //to stop player.stopVideo();
            $(".m_pop1 .abs.x").click(function(){
                player.stopVideo();
            });

     </script>
  </body>
</html>
