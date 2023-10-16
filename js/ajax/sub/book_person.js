// 작가정보섹션 > 번역자소개 > 연관도서
$(function(){
    $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data:{ query:"시크릿" },
       headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
   })
   .done(function(msg){

       var boxs = document.getElementsByClassName('book_person_item');

       for(var i = 0; i < boxs.length; i++){

           $('.book_person_items > .book_person_item').eq(i).append("<div class='book_person_imgbox'></div>");
           $('.book_person_items > .book_person_item > .book_person_imgbox').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책 표지' class='book_person_img'></a>");
           
           $('.book_person_items > .book_person_item').eq(i).append("<div class='book_person_info'></div>");
           $('.book_person_items > .book_person_item > .book_person_info').eq(i).append("<a href='index.html' target='_self'><span>"+msg.documents[i].title+"</span></a>");
        }   
      
   })
});