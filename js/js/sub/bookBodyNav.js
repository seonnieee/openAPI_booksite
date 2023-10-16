// header 상단 디테일 상세메뉴(상품정보, 리뷰, 교환규정) 스크롤 시 이벤트
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 10900){
            $('#book_body_nav_wrap').css({"position":"fixed","top":"0","left":"0","borderBottom":"1px solid#eaeaea","z-index":"100",})
            $('#book_body_nav > .book_body_nav_list').eq(2).css({"borderBottom":"2px solid#000","fontWeight":"bold"});
            $('#book_body_nav > .book_body_nav_list > a').eq(2).css({"color":"#000"})
            $('#book_body_nav > .book_body_nav_list').eq(1).css({"borderBottom":"none","fontWeight":"lighter"});
            $('#book_body_nav > .book_body_nav_list > a').eq(1).css({"color":"#767676"})
           
        }else if($(this).scrollTop() > 9400){
            $('#book_body_nav_wrap').css({"position":"fixed","top":"0","left":"0","borderBottom":"1px solid#eaeaea","z-index":"100",})
            $('#book_body_nav > .book_body_nav_list').eq(1).css({"borderBottom":"2px solid#000","fontWeight":"bold"});
            $('#book_body_nav > .book_body_nav_list > a').eq(1).css({"color":"#000"})
            $('#book_body_nav > .book_body_nav_list').eq(2).css({"borderBottom":"none","fontWeight":"lighter"});
            $('#book_body_nav > .book_body_nav_list > a').eq(2).css({"color":"#767676"})
        }else{
            $('#book_body_nav_wrap').css({"position":"relative","borderBottom":"1px solid#eaeaea","z-index":"0"});
            $('#book_body_nav > .book_body_nav_list').css({"borderBottom":"none","fontWeight":"lighter"});
            $('#book_body_nav > .book_body_nav_list > a').css({"color":"#767676"});
        }
    })
});