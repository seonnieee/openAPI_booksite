// 키워드 별 책 표지내용 변경
$(document).ready(function(){
    $('#book_keyword_nav li').click(function(){

        var num = $(this).index();

        $(this).css({'color':'#fff','background':'#595959'});
        $(this).siblings().css({'color':'#595959','background':'#fff'});
    
        $('.book_keyword_content_box').eq(num).show();
        $('.book_keyword_content_box').eq(num).css({'display':'flex'});
        $('.book_keyword_content_box').eq(num).siblings().hide();
    });
});