$(function($){
  // 倒计时
      function ShowCountDown(year,month,day,divname)
      {
          var now = new Date();
          var endDate = new Date(year, month, day);
          var leftTime=endDate.getTime()-now.getTime();
          var dd = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
          var hh = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
          var mm = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟数
          var ss = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
          dd = checkTime(dd);
          hh = checkTime(hh);
          mm = checkTime(mm);
          ss = checkTime(ss);//小于10的话加0

          $("#djs01").html(dd);
          $("#djs02").html(hh);
          $("#djs03").html(mm);
      }
      function checkTime(i)
      {
          if (i < 10) {
              i = "0" + i;
          }
          return i;
      }

      // 设置时间
        ShowCountDown(2017,11,30,'countdown');
// 参赛旋转
var zhuang=0;
setInterval(function(){
  zhuang++;
  $('.gundong').css({
    transform:'rotate('+ zhuang +'deg)'
  })
  if (zhuang == 360) {
    zhuang = 0
  }
},100)

// 列表页

var $tab_li = $('#tabb ul li');
				// var ulWidth = -$('#tabb .tab_menu').width()/2;
				// console.log(ulWidth);
				// $('#tabb .tab_menu').css({
				// 	"margin-left":ulWidth
				// })
				$tab_li.click(function(){
						$(this).addClass('selected').siblings().removeClass('selected');
						var index = $tab_li.index(this);
						$('div.tab_box > div').eq(index).show().siblings().hide();
					});

    $('.dianzan').click(function() {
      $(this).attr('src','imgs/zan.png');
    });


    // $('.fx_').on(" mouseover",function() {
    //     $('.fen_').show();
    //     console.log("11");
    // })
          $('.fen_').hover(
          function () {

            $(this).find('.bdsharebuttonbox').addClass("hover_");
          },
          function () {
            $(this).find('.bdsharebuttonbox ').removeClass("hover_");
          }
      );
    // $('.fx_').click(function() {
    //
    // });
    $(".ph_cont li:even").css({
      'backgroundColor':"#DCDDDD"
    })



    //锚点

      var ua = navigator.userAgent;

      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

      isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

      isAndroid = ua.match(/(Android)\s+([\d.]+)/),

      isMobile = isIphone || isAndroid;

      //判断

      if(isMobile){
        $("._cs").click(function(){
          $('html,body').animate({scrollTop: 615}, 500)
        })
      }else{
        $("._cs").click(function(){
          $('html,body').animate({scrollTop: 1715}, 500)
        })
      }
})
