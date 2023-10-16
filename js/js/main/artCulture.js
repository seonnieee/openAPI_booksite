// ART&CULTURE 상품 버튼 js
$(document).ready(function(){
    $('#prev10').click(function(){
        $('.art_items_wrap:last').prependTo('#art_content_inner');
        $('#art_content_inner').css({marginLeft:-300});
        $('#art_content_inner').stop().animate({marginLeft:0});
    });

    $('#next10').click(function(){
        $('#art_content_inner').stop().animate({marginLeft:-300},function(){
            $('.art_items_wrap:first').appendTo('#art_content_inner');
            $('#art_content_inner').css({marginLeft:0});
        });
    });
});