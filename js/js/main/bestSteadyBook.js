//best&steady book 섹션
$(document).ready(function(){
    // 베스트, 스테디 큰 카테고리 변경
    $('.best_title3').click(function(){
        $('#best_steady_wrap > #best_wrap').hide();
        $('#best_steady_wrap > #steady_wrap').show();
    })

    $('.steady_title1').click(function(){
        $('#best_steady_wrap > #best_wrap').show();
        $('#best_steady_wrap > #steady_wrap').hide();
    })


    // 베스트 세부 카테고리 변경
    $('#section_nav3 li').click(function(){

        var num = $(this).index();

        $(this).css({'color':'#474c98','fontWeight':'bold'});
        $(this).siblings().css({'color':'#767676','fontWeight':'lighter'});
    
        $('.best_content_box').eq(num).show();
        $('.best_content_box').eq(num).css({"display":"flex"});
        $('.best_content_box').eq(num).siblings().hide();
    });

    // 스테디 세부 카테고리 변경
    $('#section_nav4 li').click(function(){

        var num = $(this).index();

        $(this).css({'color':'#474c98','fontWeight':'bold'});
        $(this).siblings().css({'color':'#767676','fontWeight':'lighter'});
    
        $('.steady_content_box').eq(num).show();
        $('.steady_content_box').eq(num).css({"display":"flex"});
        $('.steady_content_box').eq(num).siblings().hide();
    });

});