// 키워드 Pick 섹션
// '연설가' 키워드
$(function(){
     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"연설" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('book_keyword_content');

        for(var i = 0; i < boxs.length; i++){

            $('#book_keyword_content_box1 > .book_keyword_content').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");

        }   
       
    })
});

// '피해의식' 키워드
$(function(){
    $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data:{ query:"의식" },
       headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
   })
   .done(function(msg){

       var boxs = document.getElementsByClassName('book_keyword_content');

       for(var i = 0; i < boxs.length; i++){

           $('#book_keyword_content_box2 > .book_keyword_content').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");

       }   
      
   })
});

// '트레이시' 키워드
$(function(){
    $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data:{ query:"트레이시" },
       headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
   })
   .done(function(msg){

       var boxs = document.getElementsByClassName('book_keyword_content');

       for(var i = 0; i < boxs.length; i++){

           $('#book_keyword_content_box3 > .book_keyword_content').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");

       }   
      
   })
});

// '이케아' 키워드
$(function(){
    $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data:{ query:"이케아" },
       headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
   })
   .done(function(msg){

       var boxs = document.getElementsByClassName('book_keyword_content');

       for(var i = 0; i < boxs.length; i++){

           $('#book_keyword_content_box4 > .book_keyword_content').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");

       }   
      
   })
});

// '다이어' 키워드
$(function(){
    $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data:{ query:"다이어" },
       headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
   })
   .done(function(msg){

       var boxs = document.getElementsByClassName('book_keyword_content');

       for(var i = 0; i < boxs.length; i++){

           $('#book_keyword_content_box5 > .book_keyword_content').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");

       }   
      
   })
});

// '미국 최고' 키워드
$(function(){
    $.ajax({
       method: "GET",
       url: "https://dapi.kakao.com/v3/search/book?target=title",
       data:{ query:"미국 최고" },
       headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
   })
   .done(function(msg){

       var boxs = document.getElementsByClassName('book_keyword_content');

       for(var i = 0; i < boxs.length; i++){

           $('#book_keyword_content_box6 > .book_keyword_content').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");

       }   
      
   })
});