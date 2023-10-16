// 베스트 카테고리 API
$(function(){
    //베스트 '전체' 세부 카테고리 API
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"소설" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('best_content_item');
        
        for(i = 0; i < boxs.length; i++){
            $('#best_content_box1 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_img'><a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='베스트도서'></a></div>");
            $('#best_content_box1 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_info'></div>");
            $('#best_content_box1 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_title'><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
            $('#best_content_box1 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_author'>"+msg.documents[i].authors[0]+"</span>");

        }
    })

    //베스트 '국내도서' 세부 카테고리 API
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"에세이" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('best_content_item');
        
        for(i = 0; i < boxs.length; i++){
            $('#best_content_box2 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_img'><a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='베스트도서'></a></div>");
            $('#best_content_box2 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_info'></div>");
            $('#best_content_box2 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_title'><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
            $('#best_content_box2 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_author'>"+msg.documents[i].authors[0]+"</span>");

        }
    })

     //베스트 '외국도서' 세부 카테고리 API
     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"바다" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('best_content_item');
        
        for(i = 0; i < boxs.length; i++){
            $('#best_content_box3 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_img'><a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='베스트도서'></a></div>");
            $('#best_content_box3 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_info'></div>");
            $('#best_content_box3 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_title'><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
            $('#best_content_box3 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_author'>"+msg.documents[i].authors[0]+"</span>");

        }
    })

    //베스트 'eBook' 세부 카테고리 API
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"여행" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('best_content_item');
        
        for(i = 0; i < boxs.length; i++){
            $('#best_content_box4 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_img'><a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='베스트도서'></a></div>");
            $('#best_content_box4 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_info'></div>");
            $('#best_content_box4 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_title'><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
            $('#best_content_box4 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_author'>"+msg.documents[i].authors[0]+"</span>");

        }
    })

    //베스트 'sam' 세부 카테고리 API
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"요리" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('best_content_item');
        
        for(i = 0; i < boxs.length; i++){
            $('#best_content_box5 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_img'><a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='베스트도서'></a></div>");
            $('#best_content_box5 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_info'></div>");
            $('#best_content_box5 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_title'><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
            $('#best_content_box5 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_author'>"+msg.documents[i].authors[0]+"</span>");

        }
    })

    //베스트 '핫트랙스' 세부 카테고리 API
     $.ajax({
        url: "./json/main/bestHot.json",
        dataType:"json",
        success:function(data){
            if(data.length > 0){
                for(let i in data){
                    $('#best_content_box6 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_img'><a href='sub.html' target='_self'><img src='img/main/best/"+data[i].url+"' alt='베스트도서'></a></div>");
                    $('#best_content_box6 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_info'></div>");
                    $('#best_content_box6 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_title'><a href='sub.html' target='_self'>"+data[i].title+"</a></span>");
                    $('#best_content_box6 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_author'>"+data[i].author+"</span>");
                }
            }
        }
    })   

    //베스트 '교보ONLY' 세부 카테고리 API
    $.ajax({
        url: "./json/main/bestOnly.json",
        dataType:"json",
        success:function(data){
            if(data.length > 0){
                for(let i in data){
                    $('#best_content_box7 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_img'><a href='sub.html' target='_self'><img src='img/main/best/"+data[i].url+"' alt='베스트도서'></a></div>");
                    $('#best_content_box7 > .best_content_item > .best_product > .best_product_book').eq(i).append("<div class='best_product_info'></div>");
                    $('#best_content_box7 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_title'><a href='sub.html' target='_self'>"+data[i].title+"</a></span>");
                    $('#best_content_box7 > .best_content_item > .best_product > .best_product_book > .best_product_info').eq(i).append("<span class='best_product_author'>"+data[i].author+"</span>");
                }
            }
        }
    })   
});

// 스테디 카테고리 API
$(function(){
    //베스트 '국내도서' 세부 카테고리 API
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"꽃" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('steady_content_item');
        
        for(i = 0; i < boxs.length; i++){
            $('#steady_content_box1 > .steady_content_item > .steady_product > .steady_product_book').eq(i).append("<div class='steady_product_img'><a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='스테디도서'></a></div>");
            $('#steady_content_box1 > .steady_content_item > .steady_product > .steady_product_book').eq(i).append("<div class='steady_product_info'></div>");
            $('#steady_content_box1 > .steady_content_item > .steady_product > .steady_product_book > .steady_product_info').eq(i).append("<span class='steady_product_title'><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
            $('#steady_content_box1 > .steady_content_item > .steady_product > .steady_product_book > .steady_product_info').eq(i).append("<span class='steady_product_author'>"+msg.documents[i].authors[0]+"</span>");

        }
    })

    //베스트 '외국도서' 세부 카테고리 API
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"happy" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('steady_content_item');
        
        for(i = 0; i < boxs.length; i++){
            $('#steady_content_box2 > .steady_content_item > .steady_product > .steady_product_book').eq(i).append("<div class='steady_product_img'><a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='스테디도서'></a></div>");
            $('#steady_content_box2 > .steady_content_item > .steady_product > .steady_product_book').eq(i).append("<div class='steady_product_info'></div>");
            $('#steady_content_box2 > .steady_content_item > .steady_product > .steady_product_book > .steady_product_info').eq(i).append("<span class='steady_product_title'><a href='sub.html' target='_self'>"+msg.documents[i].title+"</a></span>");
            $('#steady_content_box2 > .steady_content_item > .steady_product > .steady_product_book > .steady_product_info').eq(i).append("<span class='steady_product_author'>"+msg.documents[i].authors[0]+"</span>");

        }
    })
});