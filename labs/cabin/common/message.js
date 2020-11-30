var liveInfo = new Map([
    [["1605953700000","1605948900000","https://pruffme.com/landing/u1416285/tmp1605256270"], "Аллергодерматозы"],
    [["1605950100000","1605957600000","https://pruffme.com/landing/u1416285/tmp1605269838"], "Акне и Розацеа"],
    [["1606032000000","1606035600000","https://pruffme.com/landing/u1416285/tmp1605270319"], "Трихология"],
    [["1606036200000","1606037700000","https://pruffme.com/landing/u1416285/tmp1605270610"], "Псориаз"],
    [["1606053600000","1606060800000","https://pruffme.com/landing/u1416285/tmp1605273889"], "Дерматоскопия"],
    [["1606140000000","1606150800000","https://pruffme.com/landing/u1416285/tmp1605274044"], "Косметология"],
    // ["помидор", 350],
    // ["лук", 50]
  ])


var currentTime = Date.now();
  for (let live of liveInfo ){
    var startTime = live[0][0];
    var endTime = live[0][1];
    var link = live[0][2];
    var name = live[1];

    // if (!startTime || !endTime) {
    //   return;
    // }

    if (currentTime <= endTime && currentTime >= startTime) {
      // if (true){
        var obj = document.createElement('div');
        obj.className = "message";
        obj.style.cssText = 'position: fixed;top: -60px;width: 500px;left: calc(50% - 250px);height: 66px; border: 1px solid rgb(221, 221, 221);transition: transform linear 1s;background: rgba(255, 255, 255, 0.86);border-radius:8px';

        document.querySelectorAll("body")[0].appendChild(obj);

        setTimeout(()=>{
           obj.style.cssText+='transform:translateY(70px)';
        }, 500)

        obj.innerHTML = 
                "<div class=\"live-container\">" +
                  "<div class='close-button'><img src='../common/white.svg'></div>" +
                  "<div class='text'>Сейчас в эфире секция: <span>" + name + "</span> </div> "+ 
                  "<a href=\"".concat(link, "\" target=\"_blank\" class=\"button\">LIVE</a>" +
                  "</div>");
    }

$('.close-button').click(function(){
    $('.message').hide();
  });
  }; 

 