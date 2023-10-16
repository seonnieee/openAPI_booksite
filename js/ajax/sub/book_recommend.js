// 추천사 소개
$(function(){
    $.get("./json/sub/book_recommend.txt", function(data){
        $('#book_recommend_overflow_inner').html(data);
    })
});