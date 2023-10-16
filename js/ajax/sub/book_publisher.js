// 출판사 서평
$(function(){
    $.get("./json/sub/book_publisher.txt", function(data){
        $('#book_publisher_content_overflow').html(data);
    })
});