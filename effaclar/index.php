<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8"/>
    <title>EFFaclaR</title>

    <link rel="preload" href="../images/02/bg2.png" as="image">
    <link rel="preload" href="../images/02/bg3.png" as="image">
    <link rel="preload" href="../images/02/bg4.png" as="image">

    <link rel="stylesheet" href="css/stylev3.css" type="text/css" media="screen, projection"/>
    <link rel="stylesheet" href="css/animate.css" type="text/css" media="screen, projection"/>
    <link href="css/main.060f.css" rel="stylesheet" />
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
      <script type="text/javascript" src="js/preloader.js"></script>
	<script src="js/cookie.js">
<script type="text/javascript">
$(document).ready(function() {
	$('#button').on('click', function() {
        $.ajax({
			url: 'click.php',
			method: 'get',
			dataType: 'json',
			data: {id: '7'},     //id счетчика
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
      <div class="common-bg3 hide">
        <div class="abs r"></div>
      </div>
      <div class="common-bg4 hide"></div>
      <div class="over-wrap">
        <div id="page">
          <nav class="abs main-m">
            <a href="../labs/lablrp/index.html" class="prev-move"></a>
            <a href="../index.html" class="home-move"></a>
            <a href="#menu" class="next-move"></a>
          </nav>
          <img src="#" data-src="shared/vid.gif" width="344" height="344" alt="" class="abs mvid main-vid lazy">
          <img src="#" data-src="shared/vid2.gif" width="344" height="344" alt="" class="abs mvid main-vid2 lazy">
          <img src="#" data-src="shared/vid3.gif" width="344" height="344" alt="" class="abs mvid main-vid3 lazy">
          <div class="sl sl1 _show">
            <div class="abs like">

				<?php
	$id_counter = "7"; //id счетчика
	require_once "select_count.php";
?>

              <p>
                Я рекомендую <b>EFFACLAR</b> УЛЬТРА<br>
                КОНЦЕНТРИРОВАННУЮ СЫВОРОТКУ<br>
                <b><span id="count"><?php echo $count; ?></span> коллег</b> рекомендуют
              </p>
				<input id="input_count" type="hidden" value="0">
       			<form class="abs">
				 <input type="button" id="button" value="" >
              </form>
            </div>
            <h1 class="abs">
              <b>EFFACLAR</b>
              <span>УЛЬТРА КОНЦЕНТРИРОВАННАЯ<br>СЫВОРОТКА</span>
            </h1>
            <h2 class="abs">
              Уменьшает выраженность акне<br>благодаря синергическому<br>действию четырех кислот
            </h2>
            <div class="abs drop"></div>
            <div class="abs tub mv"></div>
          </div>
          <div class="sl sl2">
            <div class="abs mtub"></div>
            <a href="#effaclar-update" class="abs sl2-links sl2-link1">
              <span class="abs">актуализация</span>
            </a>
            <a href="#effaclar-key" class="abs sl2-links sl2-link2">
              <span class="abs">ключевой<br />ингредиент</span>
            </a>
            <a href="#effaclar-gamma" class="abs sl2-links sl2-link3">
              <span class="abs">гамма</span>
            </a>
            <a href="#effaclar-scheme" class="abs sl2-links sl2-link4">
              <span class="abs">схема<br />применения</span>
            </a>
            <div class="abs ovec vec1">
              <div class="abs cube cube1"></div>
              <p class="abs text text1"><b>интервью д.м.н.,<br>проф.<br>Хлебниковой А.Н.</b></p>
              <a href="#effaclar-video1" class="abs"></a>
            </div>
            <div class="abs ovec vec2">
              <div class="abs cube cube2"></div>
              <p class="abs text text2">КЛЮЧЕВЫЕ<br><b>АКТИВНЫЕ<br>ИНГРЕДИЕНТЫ</b></p>
              <a href="#effaclar-key2" class="abs"></a>
            </div>
            <div class="abs ovec vec3">
              <div class="abs cube cube3"></div>
              <p class="abs text text3">Гамма<br><b>EFFACLAR</b></p>
              <a href="#effaclar-gamma2" class="abs"></a>
            </div>
            <div class="abs ovec vec4">
              <div class="abs cube cube4"></div>
              <p class="abs text text4">скачать<br><b>схему<br>применения</b></p>
              <a href="https://lorealcongress.ru/files/scheme_effaclar.pdf" target="_blank" class="abs"></a>
            </div>
          </div>
          <div class="abs m_pop1">
            <div class="abs x"></div>
            <p class="abs m_pop1-p1">Каким пациентам с акне необходимы кератолитические средства ухода?</p>
            <p class="abs m_pop1-p2">д.м.н., проф. Хлебникова А.Н.</p>
            <iframe width="1024" height="575" src="https://www.youtube.com/embed/BUjCKjhwSC8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="abs m_pop2">
            <div class="abs x"></div>
            <p class="abs q1">effaclar<span>ультра концентрированная сыворотка</span></p>
            <p class="abs q2">1<span class="abs">УМЕНЬШАЕТ<br>ПРОЯВЛЕНИЯ АКНЕ</span></p>
            <p class="abs q3">2<span class="abs">СОХРАНЯЕТ ЭФФЕКТИВНОСТЬ<br>ПОСЛЕ ЗАВЕРШЕНИЯ<br>ПРИМЕНЕНИЯ</span></p>
            <p class="abs q4">Синергическое<br>кератолитическое действие<br>4 кислот</p>

            <p class="abs q5">LHA<span>(липогидрокси кислота)</span></p>
            <p class="abs q6">Салициловая кислота</p>
            <p class="abs q7">гликолевая кислота</p>
            <p class="abs q8">лимонная кислота</p>

            <p class="abs q9">ЭФФЕКТИВНОСТЬ ЧЕРЕЗ 28 ДНЕЙ</p>
            <div class="abs g g1"></div>
            <div class="abs g g2"><span class="abs">-20%</span></div>
            <div class="abs g g3"></div>
            <div class="abs g g4"><span class="abs">-45%</span></div>
            <div class="abs g g5"></div>
            <div class="abs g g6"><span class="abs">-49%</span></div>
            <div class="abs f1"></div>
            <div class="abs f2"></div>
            <p class="abs q10">
              Протокол: 51 женщина, 18-37 лет.<br>
              Использование 1 раз в день в течение 28 дней<br>
              в сочетании с увлажняющим средством
            </p>
          </div>
          <div class="abs m_pop3">
            <div class="abs x"></div>
            <p class="abs w1">гамма <b>effaclar</b></p>
            <p class="abs w2">Комплексный уход для пациентов с акне<br>при различной степени тяжести</p>
            <p class="abs w3">очищение</p>
            <p class="abs w4">уход</p>

            <p class="abs ww ww1">легкая степень тяжести</p>
            <p class="abs ww ww2">легкая и средняя степени тяжести</p>
            <p class="abs ww ww3">средняя и тяжелая степени тяжести</p>
            <p class="abs ww ww4">легкая и средняя степени тяжести</p>
            <p class="abs ww ww5">легкая и средняя степени тяжести</p>
            <p class="abs ww ww6">средняя и тяжелая степени тяжести</p>

            <p class="abs we we1">Очищающий<br>пенящийся гель</p>
            <p class="abs we we2">Микроотшелушивающий<br>очищающий гель</p>
            <p class="abs we we3">Очищающий<br>увлажняющий<br>успокаивающий<br>крем-гель</p>
            <p class="abs we we4">Корректирующий<br>крем-гель<br>+ тонирующая текстура</p>
            <p class="abs we we5">Ультра концентрированная<br>сыворотка</p>
            <p class="abs we we6">Мульти-<br>восстанавливающее<br>увлажняющее<br>успокаивающее<br>средство</p>

            <div class="abs o o1"></div>
            <div class="abs o o2"></div>
            <div class="abs o o3"></div>
            <div class="abs o o4"></div>
            <div class="abs o o5"></div>
            <div class="abs o o6"></div>
          </div>
          <div class="abs m_pop4">
            <div class="abs x"></div>
            <p class="abs e4">effaclar</p>
            <p class="abs e5">очищающий пенящийся гель</p>
            <div class="abs tub1"></div>
            <div class="abs plsh plsh1">эффективно удаляет<br>загрязнения, макияж и себум</div>
            <div class="abs plsh plsh2">оказывает антибактериальное<br>действие</div>
            <div class="abs plsh plsh3">не пересушивает кожу</div>
            <div class="abs plsh plsh4">успокаивает кожу</div>
            <div class="abs mlist">
              <p>+ [ Пидолат цинка ]</p>
              <p>+ [ Термальная вода<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Roche-Posay ]</p>
            </div>
            <p class="abs e6">
              Без этилового спирта<br>
              Без красителей<br>
              Без парабенов<br>
              физиологический pН
            </p>
          </div>
          <div class="abs m_pop5">
            <div class="abs x"></div>
            <p class="abs e4">effaclar</p>
            <p class="abs e5">очищающий пенящийся гель<span>для лица и тела</span></p>
            <div class="abs tub1"></div>
            <div class="abs plsh plsh1">интенсивно очищает кожу</div>
            <div class="abs plsh plsh2">обеспечивает мягкий<br>кератолитический эффект</div>
            <div class="abs plsh plsh3">оказывает себорегулирующее<br>действие</div>
            <div class="abs plsh plsh4">Увлажняет, предотвращая<br>пересушивание кожи</div>
            <div class="abs mlist">
              <p>+ [ 2% салициловая кислота ]</p>
              <p>+ [ LHA (липо-гидрокси-кислота) ]</p>
              <p>+ [ Глицерин ]</p>
              <p>+ [ Цинк ]</p>
            </div>
            <p class="abs e6">
              Без спирта<br>
              физиологический pН
            </p>
          </div>
          <div class="abs m_pop6">
            <div class="abs x"></div>
            <p class="abs e4">effaclar <span>H</span></p>
            <p class="abs e5">очищающий увлажняющий<br>успокаивающий крем-гель</p>
            <div class="abs tub1"></div>
            <div class="abs plsh plsh1">бережно очищает и увлажняет<br>кожу</div>
            <div class="abs plsh plsh2">оказывает<br>противовоспалительное<br>и себорегулирующее действие</div>
            <div class="abs plsh plsh3">предотвращает и уменьшает<br>побочные эффекты<br>медикаментозной терапии</div>
            <div class="abs mlist">
              <p>+ [ Ниацинамид ]</p>
              <p>+ [ Пидолат цинка ]</p>
              <p>+ [ Термальная вода<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Roche-Posay ]</p>
            </div>
          </div>
          <div class="abs m_pop7">
            <div class="abs x"></div>
            <p class="abs e4">effaclar <span>duo (+)</span></p>
            <p class="abs e5">корректирующий крем-гель</p>
            <div class="abs tub1"></div>
            <div class="abs plsh plsh1">действует на все звенья<br>патогенеза акне</div>
            <div class="abs plsh plsh2">нормализует микробиом кожи</div>
            <div class="abs plsh plsh3">предотвращает появление<br>поствоспалительной<br>гиперпигментации</div>
            <div class="abs plsh plsh4">предупреждает обострения,<br>увеличивая периоды ремиссии</div>
            <div class="abs mlist">
              <p class="e1">
                <span>+ [ LHA (липо-гидрокси-кислота) ]</span>
                <span>+ [ Ниацинамид ]</span>
                <span>+ [ Пироктон оламин ]</span>
                <span>+ [ Пидолат цинка ]</span>
                <span>+ [ Прокерад ]</span>
                <span>+ [ Aqua posae filiformis ]</span>
                <span>+ [ Линолевая кислота ]</span>
                <span>+ [ Термальная вода<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Roche-Posay ]</span>
              </p>
              <p class="e2">
                <b>+минеральные пигменты,</b><br>
                обеспечивающие легкий<br>тонирующий эффект
              </p>
            </div>
          </div>
          <div class="abs m_pop9">
            <div class="abs x"></div>
            <p class="abs e4">effaclar</p>
            <p class="abs e5">ультра концентрированная<br>сыворотка</p>
            <div class="abs tub1"></div>
            <div class="abs plsh plsh1">оказывает кератолитический<br>эффект</div>
            <div class="abs plsh plsh2">обладает<br>противовоспалительным<br>действием</div>
            <div class="abs plsh plsh3">ПРЕДОТВРАЩАЕТ ПОВТОРНОЕ<br>ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ</div>
            <div class="abs mlist">
              <p class="e1">
                <span>+ [ LHA (липо-гидрокси-кислота) ]</span>
                <span>+ [ Салициловая кислота ]</span>
                <span>+ [ Гликолевая кислота ]</span>
                <span>+ [ Лимонная кислота ]</span>
                <span>+ [ ХЕПЕС ]</span>
                <span>+ [ Ниацинамид ]</span>
                <span>+ [ Термальная вода<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Roche-Posay ]</span>
              </p>
            </div>
          </div>
          <div class="abs m_pop10">
            <div class="abs x"></div>
            <p class="abs e4">effaclar <span>H</span></p>
            <p class="abs e5">мультивосстанавливающее<br>увлажняющее успокаивающее средство</p>
            <div class="abs tub1"></div>
            <div class="abs plsh plsh1">восстанавливает<br>гидролипидный барьер</div>
            <div class="abs plsh plsh2">оказывает<br>противовоспалительное<br>действие</div>
            <div class="abs plsh plsh3">предотвращает и уменьшает<br>побочные эффекты<br>медикаментозной терапии</div>
            <div class="abs mlist">
              <p class="abs e1">
                <span>+ [ МП-липиды) ]</span>
                <span>+ [ Керамид 5 ]</span>
                <span>+ [ Сквален ]</span>
                <span>+ [ Масло Карите ]</span>
                <span>+ [ Глицерин ]</span>
                <span>+ [ Ниацинамид ]</span>
              </p>
            </div>
          </div>
          <div class="abs m_pop8">
            <p class="abs y1">СХЕМА ПРИМЕНЕНИЯ ГАММЫ <b>Effaclar</b></p>
            <p class="abs y2">для пациентов с акне различной степени тяжести по шкале GEA</p>
            <p class="abs qq1">Очищение</p>
            <p class="abs qq2">УХОД</p>
            <p class="abs qq3">дОПОЛНИТЕЛЬНЫЕ<br>СРЕДСТВА</p>
            <p class="abs qw1">СТЕПЕНЬ ТЯЖЕСТИ 0</p>
            <p class="abs qw2">СТЕПЕНЬ ТЯЖЕСТИ 1 и 2</p>
            <p class="abs qw3">СТЕПЕНЬ ТЯЖЕСТИ 3</p>
            <p class="abs qw4">СТЕПЕНЬ ТЯЖЕСТИ 4 И 5</p>
            <p class="abs qe1">
              НЕТ ВЫСЫПАНИЙ ИЛИ ТОЛЬКО<br>ЭРИТЕМА, ИЛИ ПОСТВОСПАЛИТЕЛЬНАЯ<br>ПИГМЕНТАЦИЯ
            </p>
            <p class="abs qe2">
              Рассеянные папулы или пустулы<br>и/или закрытые комедоны
            </p>
            <p class="abs qe3">
              Папулы и пустулы и/или<br>закрытые комедоны<br>25% оцениваемой зоны<br>1 узел/киста
            </p>
            <p class="abs qe4">
              Многочисленные папулы или<br>пустулы и/или закрытые комедоны<br>25% оцениваемой зоны<br>2 узла/кисты
            </p>
            <p class="abs qr1">anthelios<br>anti-imperfections</p>
            <p class="abs qr2">anthelios<br>anti-imperfections</p>
            <p class="abs qr4">anthelios<br>ФЛЮИД</p>
            <p class="abs qr5">anthelios<br>ФЛЮИД</p>

            <p class="abs rr rr1">ОЧИЩАЮЩИЙ<br>ПЕНЯЩИЙСЯ ГЕЛЬ</p>
            <p class="abs rr rr2">ультраконцентрированная<br>сыворотка</p>
            <p class="abs rr rr3">ВЕЧЕРОМ</p>

            <p class="abs rr rr4">ОЧИЩАЮЩИЙ<br>ПЕНЯЩИЙСЯ ГЕЛЬ</p>
            <p class="abs rr rr5">МИКРООТШЕЛУШИВАЮЩИЙ<br>ОЧИЩАЮЩИЙ ГЕЛЬ</p>
            <p class="abs rr rr6">ультраконцентрированная<br>сыворотка</p>
            <p class="abs rr rr7">корректирующий<br>крем-гель</p>
            <p class="abs rr rr8">вЕЧЕРОМ</p>

            <!-- <p class="abs rr rr9">ОЧИЩАЮЩИЙ<br>ПЕНЯЩИЙСЯ ГЕЛЬ</p>
            <p class="abs rr rr10">МИКРООТШЕЛУШИВАЮЩИЙ<br>ОЧИЩАЮЩИЙ ГЕЛЬ</p>
            <p class="abs rr rr11">ультраконцентрированная<br>сыворотка</p> -->
            <!-- <p class="abs rr rr12">корректирующий<br>крем-гель</p>
            <p class="abs rr rr13">вЕЧЕРОМ</p> -->

            <p class="abs rr rr14">очищающий увлажняющий<br>успокаивающий<br>крем-гель</p>
            <p class="abs rr rr15">МИКРООТШЕЛУШИВАЮЩИЙ<br>ОЧИЩАЮЩИЙ ГЕЛЬ</p>
            <p class="abs rr rr16">ультра<br>концентрированная<br>сыворотка</p>
            <p class="abs rr rr17">корректирующий<br>крем-гель</p>
            <p class="abs rr rr18">мульти-<br>восстанавливающее<br>увлажняющее<br>успокаивающее средство</p>
            <p class="abs rr rr19">вЕЧЕРОМ</p>

            <p class="abs rr rr20">очищающий увлажняющий<br>успокаивающий крем-гель</p>
            <p class="abs rr rr21">мультивосстанавливающее увлажняющее<br>успокаивающее средство</p>
            <p class="abs footer-t">B Dreno, F poli, H Pawin, C Bevlot, M Faure глобальная шкала оценки степени тяжести акне (шкала GEA) для Франции и Европы , JEADV 2011; 25: 43-48</p>
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
