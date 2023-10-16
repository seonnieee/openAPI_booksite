$(document).ready(function(){
    // 우측 flying메뉴 스크롤 시 이벤트-sub
    $(window).scroll(function(){
        if($(this).scrollTop() > 250){
            $('#flying_banner_wrap').css({"position":"fixed","top":"140px"})

        }else{
            $('#flying_banner_wrap').css({"position":"absolute","top":"380px"})

        }
    })

    // flying배너 광고 이미지 클릭 시, 이벤트
    var i = 0;

    $('#flying_prev').click(function(){
        i--;
        if(i < 0){
            i = $('.flying_img:last').index();
        }    
        $('.flying_img').eq(i).stop().show();
        $('.flying_img').eq(i-$('.flying_img:last').index()).stop().hide();

        updatePageNumber(i);
    });

    $('#flying_next').click(function(){
        i++;
        if(i > $('.flying_img:last').index()){
            i = 0;
        }
        $('.flying_img').eq(i).stop().show();
        $('.flying_img').eq(i-1).stop().hide();

        updatePageNumber(i);
    });

    function updatePageNumber(index){
        var pageNumberElement = $('#flying_page');
        pageNumberElement.text("0"+(index +1));
    }

});

