


//var slide={i:2};


$(function(){
        var focus = window.focus || {};
        var timer = 5000;
        var _w = 1300;
        var slideBox = $('.slideShow');
        var picList = $('.slideShow li[class^="pic"]');
        var picLength = picList.length/2;
        picList.each(function(i,o){
            $('.pic'+(i+1)).css({
                background : 'url('+focus['pic'+(i+1)] +')',
                float: 'left',
                height: '415px',
                margin: '0 50px',
                opacity: 1,
                width: '1200px'

            });
        });
        slideBox.css({
            left: -_w*picLength + 'px',
            width : _w*picLength*2 + 'px'
        });
       var make = function(){
       }
        var st1;
        var move = function(i){
            window.clearTimeout(st1);
            if(i > picLength) {
                i = 1;
            }
            var l = -_w*(i-1);
            $('.slide_unchose').removeClass('slide_on');
            $('.slide_unchose').eq(i-1).addClass('slide_on');
            $('.mask').stop(true).animate({opacity:0.3},100,function(){
                $('.slideShow').stop(true).animate({
                    left : -_w*(picLength-1 + i) + 'px'
                },function(){

                    if(i > picLength-1) {
                        $('.slideShow').css({
                            left: -_w*(i-1) + 'px'
                        });
                    }
                    $('.mask').stop(true).animate({opacity:0},500);
                    $('.slide_unchose').removeClass('slide_on');
                    $('.slide_unchose').eq(i-1).addClass('slide_on');
                });
            });
            var arg = arguments;
            st1 = window.setTimeout(function(){
                arg.callee(++i);
            },timer)

        }
        st1 = window.setTimeout(function(){
            move(2);
        },timer);
        $('.ap_out').delegate('li.slide_unchose','click',function(e){
            e.preventDefault();
            var index = $('.ap_out li.slide_unchose').index($(this)) + 1;
            move(index);
        });
	});
