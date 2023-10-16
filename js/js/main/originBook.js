// 교보오리지널 버튼 js
$(document).ready(function(){
    $('#prev19').click(function(){
        $('.origin_box:last').prependTo('.origin_wrap');
        $('.origin_wrap').css({marginLeft:-300});
        $('.origin_wrap').stop().animate({marginLeft:0});
    });

    $('#next19').click(function(){
        $('.origin_wrap').stop().animate({marginLeft:-300},function(){
            $('.origin_box:first').appendTo('.origin_wrap');
            $('.origin_wrap').css({marginLeft:0});
        });
    });
         
});