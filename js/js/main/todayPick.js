// section id:today_pick(오늘의 선택)
$(document).ready(function(){
    // 오늘의 선택 '전체' 섹션 버튼 js
    $('#prev2').click(function(){
        $('#todaySubWrap li:last').prependTo('#todaySubWrap');
        $('#todaySubWrap').css({marginLeft:-180});
        $('#todaySubWrap').stop().animate({marginLeft:0});
        $('#todayDetail li:last').prependTo('#todayDetail')
        $('#todayDetail').css({marginLeft:0})
    });

    $('#next2').click(function(){
        $('#todaySubWrap').stop().animate({marginLeft:-180},function(){
            $('#todaySubWrap li:first').appendTo('#todaySubWrap');
            $('#todaySubWrap').css({marginLeft:0});
            $('#todayDetail li:first').appendTo('#todayDetail');
            $('#todayDetail').css({marginLeft:0})
        });
    });
    
    // 오늘의 선택 '국내도서' 섹션 버튼 js
    $('#prev3').click(function(){
        $('#domicSubWrap li:last').prependTo('#domicSubWrap');
        $('#domicSubWrap').css({marginLeft:-180});
        $('#domicSubWrap').stop().animate({marginLeft:0});
        $('#domDetail li:last').prependTo('#domDetail')
        $('#domDetail').css({marginLeft:0})
    });

    $('#next3').click(function(){
        $('#domicSubWrap').stop().animate({marginLeft:-180},function(){
            $('#domicSubWrap li:first').appendTo('#domicSubWrap');
            $('#domicSubWrap').css({marginLeft:0});
            $('#domDetail li:first').appendTo('#domDetail');
            $('#domDetail').css({marginLeft:0})
        });
    });

    //오늘의 선택 '외국도서' 섹션 버튼 js
    $('#prev4').click(function(){
        $('#overSubWrap li:last').prependTo('#overSubWrap');
        $('#overSubWrap').css({marginLeft:-180});
        $('#overSubWrap').stop().animate({marginLeft:0});
        $('#overDetail li:last').prependTo('#overDetail')
        $('#overDetail').css({marginLeft:0})
    });

    $('#next4').click(function(){
        $('#overSubWrap').stop().animate({marginLeft:-180},function(){
            $('#overSubWrap li:first').appendTo('#overSubWrap');
            $('#overSubWrap').css({marginLeft:0});
            $('#overDetail li:first').appendTo('#overDetail');
            $('#overDetail').css({marginLeft:0})
        });
    });
    
    //오늘의 선택 'eBook' 섹션 버튼 js
    $('#prev5').click(function(){
        $('#eBookSubWrap li:last').prependTo('#eBookSubWrap');
        $('#eBookSubWrap').css({marginLeft:-180});
        $('#eBookSubWrap').stop().animate({marginLeft:0});
        $('#eBookDetail li:last').prependTo('#eBookDetail')
        $('#eBookDetail').css({marginLeft:0})
    });

    $('#next5').click(function(){
        $('#eBookSubWrap').stop().animate({marginLeft:-180},function(){
            $('#eBookSubWrap li:first').appendTo('#eBookSubWrap');
            $('#eBookSubWrap').css({marginLeft:0});
            $('#eBookDetail li:first').appendTo('#eBookDetail');
            $('#eBookDetail').css({marginLeft:0})
        });
    });

    //오늘의 선택 'sam' 섹션 버튼 js
    $('#prev6').click(function(){
        $('#samSubWrap li:last').prependTo('#samSubWrap');
        $('#samSubWrap').css({marginLeft:-180});
        $('#samSubWrap').stop().animate({marginLeft:0});
        $('#samDetail li:last').prependTo('#samDetail')
        $('#samDetail').css({marginLeft:0})
    });

    $('#next6').click(function(){
        $('#samSubWrap').stop().animate({marginLeft:-180},function(){
            $('#samSubWrap li:first').appendTo('#samSubWrap');
            $('#samSubWrap').css({marginLeft:0});
            $('#samDetail li:first').appendTo('#samDetail');
            $('#samDetail').css({marginLeft:0})
        });
    });

    //오늘의 선택 '핫트랙스' 섹션 버튼 js
    $('#prev7').click(function(){
        $('#hotSubWrap li:last').prependTo('#hotSubWrap');
        $('#hotSubWrap').css({marginLeft:-180});
        $('#hotSubWrap').stop().animate({marginLeft:0});
        $('#hotDetail li:last').prependTo('#hotDetail')
        $('#hotDetail').css({marginLeft:0})
    });

    $('#next7').click(function(){
        $('#hotSubWrap').stop().animate({marginLeft:-180},function(){
            $('#hotSubWrap li:first').appendTo('#hotSubWrap');
            $('#hotSubWrap').css({marginLeft:0});
            $('#hotDetail li:first').appendTo('#hotDetail');
            $('#hotDetail').css({marginLeft:0})
        });
    });

    //오늘의 선택 '교보ONLY' 섹션 버튼 js
    $('#prev8').click(function(){
        $('#onlySubWrap li:last').prependTo('#onlySubWrap');
        $('#onlySubWrap').css({marginLeft:-180});
        $('#onlySubWrap').stop().animate({marginLeft:0});
        $('#onlyDetail li:last').prependTo('#onlyDetail')
        $('#onlyDetail').css({marginLeft:0})
    });

    $('#next8').click(function(){
        $('#onlySubWrap').stop().animate({marginLeft:-180},function(){
            $('#onlySubWrap li:first').appendTo('#onlySubWrap');
            $('#onlySubWrap').css({marginLeft:0});
            $('#onlyDetail li:first').appendTo('#onlyDetail');
            $('#onlyDetail').css({marginLeft:0})
        });
    });
 

    // 오늘의 선택 상단카테고리 & 컨텐츠 변경
    $('#section_nav1 li').click(function(){

        var num = $(this).index();

        $(this).css({'color':'#474c98','fontWeight':'bold'});
        $(this).siblings().css({'color':'#767676','fontWeight':'lighter'});
    
        $('.today_content').eq(num).show();
        $('.today_content').eq(num).css({'display':'flex'});
        $('.today_content').eq(num).siblings().hide();
    });
});