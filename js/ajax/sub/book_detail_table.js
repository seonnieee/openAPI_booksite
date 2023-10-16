// 목차 소개
$(function(){
    $.get("./json/sub/book_detail_table.txt", function(data){
        $('#book_table_overflow_inner').html(data);
    })
});