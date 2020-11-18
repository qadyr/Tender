<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8"/>
    <title>Lab Vichy!</title>
    <link rel="stylesheet" href="css/stylev3.css" type="text/css" media="screen, projection"/><link href="../common/message.css" rel="stylesheet"/>
      <link href="css/main.060f.css" rel="stylesheet" />
	  <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
      <script type="text/javascript" src="js/preloader.js"></script>
<script type="text/javascript" src="../common/message.js"></script>
	  <script type="text/javascript">
	  $(document).ready(function() {
		$('form').on('submit', function() {
  		$('#please_wait').css("display", "block");
	});
	
	$('#report_button').click(function() {
  		$('#email_div').css("display", "block");
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
				  
				  <input type="hidden" name="MAX_FILE_SIZE" value="15728640" /> <!-- max size 15mb -->
    			<input name="image_file" type="file" id="image_file" accept="image/*" required />
				  
                
                <label for="image_file" class="btn btn-primary-outlined">Выбрать</label>
                <div id="filename" class="t2">Файл не выбран</div>
              </div>
				
	<input type="radio" id="bg1" name="bg" value="1">
	<label for="bg1" class="label_radio"><div class="abs q1 sel"></div></label>
	<input type="radio" id="bg2" name="bg" value="2">
	<label for="bg2" class="label_radio"><div class="abs q2"></div></label>
	<input type="radio" id="bg3" name="bg" value="3">
	<label for="bg3" class="label_radio"><div class="abs q3"></div></label>
	<input type="radio" id="bg4" name="bg" value="4">
	<label for="bg4" class="label_radio"><div class="abs q4"></div></label>
				
				
				<input name="submit" type="submit" value="Отправить" class="abs submitbtn btn btn-primary" />
             <!--<button class="abs submitbtn btn btn-primary">Отправить</button>-->
            </form>
			  <div class="abs camera"></div>
			  
			  
			 <!-- <div id="please_wait" style="display: none; position: absolute; top: 45%; left: 45%;  padding: 30px; background-color: #FFFFFF; border: 1px solid ;">Please wait...</div>-->

			  
			  
			  
	<!--<input type="radio" id="bg5" name="bg" value="5">
	<label for="bg5" class="label_radio"><img src="/php/5.jpg" class="img_radio"></label>-->
			  
            
           
           
            
            
          </div>
          <div class="sl2"></div>
          <div class="sl3"></div>
          <div class="sl4"></div>

          <div class="modal modal1">
            <div class="modal-inner">
              <div class="result-text">
                ПОЖАЛУЙСТА, ПОДОЖДИТЕ<br><br>
                скачайте фотографию,<br>чтобы узнать результат
              </div>
              <div class="btn-download" id="download">
                Скачать
              </div>
              <div class="share">
                Поделись своим фото<br>в СОЦИАЛЬНЫХ СЕТЯХ<br>с хештегом <b>#ACDCongress!</b>
              </div>
            </div>
            <div class="btn-dislike dislike">НЕ ПОНРАВИЛОСЬ ФОТО</div>
          </div>

			
			<?php
$report = $_GET['report'];
if(!empty($report)) {
	echo "Report sent to designer...";
}
	
$name = $_GET['name'];
$bg = $_GET['bg'];
$getMime = explode('.', $name);
$mime = end($getMime);
$img_src = "/php/" . $name;
	

//echo "<a href='/php/report.php?img=" . $name . "&bg=" . $bg . "' style='text-decoration: none;'><div id='report_button' style='width: 50px; padding: 20px; margin: 1px; background-color: #FF2B2E; color: #FFFFFF; font-family: Helvetica, Arial, sans-serif; cursor: pointer; display: inline-block;'>Report</div></a>";
?>
<div id="email_div" style="display: none; position: absolute; top: 45%; left: 45%;  padding: 30px; background-color: #FFFFFF; border: 1px solid ;">
<form action="php/report.php?img=<?php echo $name; ?>&bg=<?php echo $bg; ?>&mime=<?php echo $mime; ?>" method="POST">
<input type="email" name="email" placeholder="Email" required><br /><br />
<input type="submit" name="email_button" value="Report">
</form>
</div>
			
			
          <div class="modal modal2">
            <div class="modal-inner inner2">
				<?php
				if(!empty($name)) {
echo "<img src='$img_src' id='uploaded_photo' >";


}
		?>		
      
            </div>
            <div class="buttons">
				<?php
				if(!empty($name)) {
					echo "<div id='report_button' class='btn-dslk dislike'>НЕ ПОНРАВИЛОСЬ ФОТО</div>";
              		//<div class="btn-dslk dislike">НЕ ПОНРАВИЛОСЬ ФОТО</div>
				}
				echo "<a href='/php/download.php?img=" . $name . "' style='text-decoration: none;'><div class='btn-dwn'>Скачать</div></a>";
              //<div class="btn-dwn">Скачать</div>
				  ?>
            </div>
          </div>

          <div class="modal modal3">
            <div class="dislike-img"></div>
          <div class="form_upload ac">
            <div class="title">Вам не понравился снимок? </div>
            <div class="subtitle">Загрузите свое фото сюда еще раз<br>и мы обработаем его вручную</div>
            <form method="post" action="#" id="upload_cabin">
              <div class="t2">Выберите файл</div>
              <input name="image" id="image" type="file" accept="image/*">
              <label for="image" class="btn-reupload ">Выбрать</label>
              <input type="text" class="input" placeholder="email">
              <button class="btn-disabled">загрузить</button>
          </form>
          </div>
          <div class="abs uploaded">
            <div class="title t3">отправлено!</div>
            <div class="subtitle t4">Извините за испорченный кадр<br>МЫ ОТПРАВИМ ВАМ ЕГО В ТЕЧЕНИЕ<br>365 дней</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
