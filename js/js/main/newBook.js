// 화제의 신상 상품 버튼 js
$(document).ready(function(){
    // 화제의 신상 '전체' 카테고리 버튼
    $('#prev11').click(function(){
        $('#new_content_inner1 li:last').prependTo('#new_content_inner1');
        $('#new_content_inner1').css({marginLeft:-240});
        $('#new_content_inner1').stop().animate({marginLeft:0});
    });

    $('#next11').click(function(){
        $('#new_content_inner1').stop().animate({marginLeft:-240},function(){
            $('#new_content_inner1 li:first').appendTo('#new_content_inner1');
            $('#new_content_inner1').css({marginLeft:0});
        });
    });
    
    // 화제의 신상 '국내도서' 카테고리 버튼
    $('#prev12').click(function(){
        $('#new_content_inner2 li:last').prependTo('#new_content_inner2');
        $('#new_content_inner2').css({marginLeft:-240});
        $('#new_content_inner2').stop().animate({marginLeft:0});
    });

    $('#next12').click(function(){
        $('#new_content_inner2').stop().animate({marginLeft:-240},function(){
            $('#new_content_inner2 li:first').appendTo('#new_content_inner2');
            $('#new_content_inner2').css({marginLeft:0});
        });
    });

    // 화제의 신상 '외국도서' 카테고리 버튼
    $('#prev13').click(function(){
        $('#new_content_inner3 li:last').prependTo('#new_content_inner3');
        $('#new_content_inner3').css({marginLeft:-240});
        $('#new_content_inner3').stop().animate({marginLeft:0});
    });

    $('#next13').click(function(){
        $('#new_content_inner3').stop().animate({marginLeft:-240},function(){
            $('#new_content_inner3 li:first').appendTo('#new_content_inner3');
            $('#new_content_inner3').css({marginLeft:0});
        });
    });

    // 화제의 신상 'eBook' 카테고리 버튼
    $('#prev14').click(function(){
        $('#new_content_inner4 li:last').prependTo('#new_content_inner4');
        $('#new_content_inner4').css({marginLeft:-240});
        $('#new_content_inner4').stop().animate({marginLeft:0});
    });

    $('#next14').click(function(){
        $('#new_content_inner4').stop().animate({marginLeft:-240},function(){
            $('#new_content_inner4 li:first').appendTo('#new_content_inner4');
            $('#new_content_inner4').css({marginLeft:0});
        });
    });

    // 화제의 신상 'sam' 카테고리 버튼
    $('#prev15').click(function(){
        $('#new_content_inner5 li:last').prependTo('#new_content_inner5');
        $('#new_content_inner5').css({marginLeft:-240});
        $('#new_content_inner5').stop().animate({marginLeft:0});
    });

    $('#next15').click(function(){
        $('#new_content_inner5').stop().animate({marginLeft:-240},function(){
            $('#new_content_inner5 li:first').appendTo('#new_content_inner5');
            $('#new_content_inner5').css({marginLeft:0});
        });
    });

    // 화제의 신상 '핫트랙스' 카테고리 버튼
    $('#prev16').click(function(){
        $('#new_content_inner6 li:last').prependTo('#new_content_inner6');
        $('#new_content_inner6').css({marginLeft:-240});
        $('#new_content_inner6').stop().animate({marginLeft:0});
    });

    $('#next16').click(function(){
        $('#new_content_inner6').stop().animate({marginLeft:-240},function(){
            $('#new_content_inner6 li:first').appendTo('#new_content_inner6');
            $('#new_content_inner6').css({marginLeft:0});
        });
    });

    // 화제의 신상 '교보ONLY' 카테고리 버튼
    $('#prev17').click(function(){
        $('#new_content_inner7 li:last').prependTo('#new_content_inner7');
        $('#new_content_inner7').css({marginLeft:-240});
        $('#new_content_inner7').stop().animate({marginLeft:0});
    });

    $('#next17').click(function(){
        $('#new_content_inner7').stop().animate({marginLeft:-240},function(){
            $('#new_content_inner7 li:first').appendTo('#new_content_inner7');
            $('#new_content_inner7').css({marginLeft:0});
        });
    });

    // 화제의 신상 상단카테고리 & 컨텐츠 변경
    $('#section_nav2 li').click(function(){

        var num = $(this).index();

        $(this).css({'color':'#474c98','fontWeight':'bold'});
        $(this).siblings().css({'color':'#767676','fontWeight':'lighter'});
    
        $('.new_content').eq(num).show();
        $('.new_content').eq(num).css({'display':'flex'});
        $('.new_content').eq(num).siblings().hide();
    });
});