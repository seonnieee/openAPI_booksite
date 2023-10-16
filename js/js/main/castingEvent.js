//CASTing 섹션 상단 슬라이드 컨텐츠 이벤트
$(document).ready(function(){
    var i = 0;
    $('#prev20').click(function(){
       i--;
       if(i < 0){
         i = $('.casting_item:last').index();
       }

       $('.casting_item').eq(i).stop().fadeIn('slow');
       $('.casting_item').eq(i-$('.casting_item:last').index()).stop().fadeOut();
       $('.casting_info_title').eq(i).stop().fadeIn('slow');
       $('.casting_info_title').eq(i-$('.casting_info_title:last').index()).stop().fadeOut();
       $('.casting_book_img').eq(i).stop().fadeIn('slow');
       $('.casting_book_img').eq(i-$('.casting_book_img:last').index()).stop().fadeOut();
       $('.casting_thumb_img').eq(i).stop().fadeIn('slow');
       $('.casting_thumb_img').eq(i-$('.casting_thumb_img:last').index()).stop().fadeOut();
      
    });

    $('#next20').click(function(){
        i++;
        if(i > $('.casting_item:last').index()){
          i = 0;
        }
 
        $('.casting_item').eq(i).stop().fadeIn('slow');
        $('.casting_item').eq(i-1).stop().fadeOut();
        $('.casting_info_title').eq(i).stop().fadeIn('slow');
        $('.casting_info_title').eq(i-1).stop().fadeOut();
        $('.casting_book_img').eq(i).stop().fadeIn('slow');
        $('.casting_book_img').eq(i-1).stop().fadeOut();
        $('.casting_thumb_img').eq(i).stop().fadeIn('slow');
        $('.casting_thumb_img').eq(i-1).stop().fadeOut();
 
       
     });
});


//CASTing 섹션 하단 원형 부분 버튼 이벤트
$(document).ready(function(){
    $('#prev21').click(function(){
        $('.interview_content:last').prependTo('#interview_content_box');
        $('#interview_content_box').css({marginLeft:-300});
        $('#interview_content_box').stop().animate({marginLeft:0});
    });

    $('#next21').click(function(){
        $('#interview_content_box').stop().animate({marginLeft:-300},function(){
            $('.interview_content:first').appendTo('#interview_content_box');
            $('#interview_content_box').css({marginLeft:0});
        });
    });
});

//CASTing 섹션 하단 원형 부분 마우스오버&아웃 이벤트
$(document).ready(function(){
    $('.interview_content').mouseover(function(){
        var num = $(this).index();
        $('.interview_box').eq(num).show();
    });

      $('.interview_content').mouseout(function(){
        var num = $(this).index();        
        $('.interview_box').eq(num).hide();
    });
});