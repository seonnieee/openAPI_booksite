$(function(){
    // 저자소개
    $.get("./json/sub/person_author.txt", function(data){
        $('#book_person_author').html(data);
    })

    // 번역자소개
    $.get("./json/sub/person_translator.txt", function(data){
        $('#book_person_translator').html(data);
    })
});