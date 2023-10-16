// 히트 상품 버튼 js
$(document).ready(function(){
    $('#prev18').click(function(){
        $('.hit_right_item:last').prependTo('#hit_right_inner');
        $('#hit_right_inner').css({marginLeft:-300});
        $('#hit_right_inner').stop().animate({marginLeft:0});
    });

    $('#next18').click(function(){
        $('#hit_right_inner').stop().animate({marginLeft:-300},function(){
            $('.hit_right_item:first').appendTo('#hit_right_inner');
            $('#hit_right_inner').css({marginLeft:0});
        });
    });
         
});


// 히트 상품 마우스 오버&아웃 이벤트
$(document).ready(function(){
    $('.hit_right_item').mouseover(function(){
        var num = $(this).index();
        $('.hit_right_box').eq(num).show();
    });

      $('.hit_right_item').mouseout(function(){
        var num = $(this).index();        
        $('.hit_right_box').eq(num).hide();
    });
});