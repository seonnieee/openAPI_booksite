// categoryNav 섹션 마우스 오버/아웃 시 서브 상세리스트 인/아웃 이벤트
$(document).ready(function(){
    $('.category_nav_list').mouseenter(function(){
      $(this).find('.category_sub_wrap').stop().fadeIn(200);
      $(this).find('.category_sub_wrap').css({"display":"flex"});
      $(this).find('.category_up').show();
      $(this).find('.category_down').hide();
    }).mouseleave(function(){
      $('.category_sub_wrap').stop().hide();
      $(this).find('.category_down').show();
      $(this).find('.category_up').hide();
    })
});
