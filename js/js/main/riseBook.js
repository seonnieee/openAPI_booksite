//  급상승 많이보는 상품 버튼js
$(document).ready(function(){
    $('#prev9').click(function(){
        $('.rise_box:last').prependTo('.rise_wrap');
        $('.rise_wrap').css({marginLeft:-300});
        $('.rise_wrap').stop().animate({marginLeft:0});
    });

    $('#next9').click(function(){
        $('.rise_wrap').stop().animate({marginLeft:-300},function(){
            $('.rise_box:first').appendTo('.rise_wrap');
            $('.rise_wrap').css({marginLeft:0});
        });
    });
});