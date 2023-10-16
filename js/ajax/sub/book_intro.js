// 책 소개
$(function(){
    $.get("./json/sub/book_intro.txt", function(data){
        $('#book_intro_content_wrap').html(data);
    })
});