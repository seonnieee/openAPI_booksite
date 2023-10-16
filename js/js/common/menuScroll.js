// header 상단 search메뉴 스크롤 시 이벤트
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){

            $('#search_wrap').css({"position":"fixed","top":"0","borderBottom":"1px solid#eaeaea","z-index":"100"})

        }else{
            $('#search_wrap').css({"position":"relative","border":"none","z-index":"0"});

        }
    });
});

