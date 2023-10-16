$(function(){
    // 화제의 신상 '전체' 카테고리 메뉴
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"여행" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('new_items_wrap');

        for(var i = 0; i < boxs.length; i++){

            $('#new_content_inner1 > .new_items_wrap').eq(i).append("<div class='new_item_img'><img src='"+msg.documents[i].thumbnail+"'></div>");
            $('#new_content_inner1 > .new_items_wrap').eq(i).append("<div class='new_item_info'></div>");
            $('#new_content_inner1 > .new_items_wrap > .new_item_info').eq(i).append("<a href='sub.html' target='_self'><span class='new_item_title'>"+msg.documents[i].title+"</span></a>");
            $('#new_content_inner1 > .new_items_wrap > .new_item_info').eq(i).append("<span class='new_item_author'>"+msg.documents[i].authors[0]+"</span>");
        }
    })

    // 화제의 신상 '국내도서' 카테고리 메뉴
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"시인" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('new_items_wrap');

        for(var i = 0; i < boxs.length; i++){

            $('#new_content_inner2 > .new_items_wrap').eq(i).append("<div class='new_item_img'><img src='"+msg.documents[i].thumbnail+"'></div>");
            $('#new_content_inner2 > .new_items_wrap').eq(i).append("<div class='new_item_info'></div>");
            $('#new_content_inner2 > .new_items_wrap > .new_item_info').eq(i).append("<a href='sub.html' target='_self'><span class='new_item_title'>"+msg.documents[i].title+"</span></a>");
            $('#new_content_inner2 > .new_items_wrap > .new_item_info').eq(i).append("<span class='new_item_author'>"+msg.documents[i].authors[0]+"</span>");
        }
    })

    // 화제의 신상 '외국도서' 카테고리 메뉴
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"미라클" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('new_items_wrap');

        for(var i = 0; i < boxs.length; i++){

            $('#new_content_inner3 > .new_items_wrap').eq(i).append("<div class='new_item_img'><img src='"+msg.documents[i].thumbnail+"'></div>");
            $('#new_content_inner3 > .new_items_wrap').eq(i).append("<div class='new_item_info'></div>");
            $('#new_content_inner3 > .new_items_wrap > .new_item_info').eq(i).append("<a href='sub.html' target='_self'><span class='new_item_title'>"+msg.documents[i].title+"</span></a>");
            $('#new_content_inner3 > .new_items_wrap > .new_item_info').eq(i).append("<span class='new_item_author'>"+msg.documents[i].authors[0]+"</span>");
        }
    })

    // 화제의 신상 'eBook' 카테고리 메뉴
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"모닝" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('new_items_wrap');

        for(var i = 0; i < boxs.length; i++){

            $('#new_content_inner4 > .new_items_wrap').eq(i).append("<div class='new_item_img'><img src='"+msg.documents[i].thumbnail+"'></div>");
            $('#new_content_inner4 > .new_items_wrap').eq(i).append("<div class='new_item_info'></div>");
            $('#new_content_inner4 > .new_items_wrap > .new_item_info').eq(i).append("<a href='sub.html' target='_self'><span class='new_item_title'>"+msg.documents[i].title+"</span></a>");
            $('#new_content_inner4 > .new_items_wrap > .new_item_info').eq(i).append("<span class='new_item_author'>"+msg.documents[i].authors[0]+"</span>");
        }
    })

    // 화제의 신상 'eBook' 카테고리 메뉴
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"사랑" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('new_items_wrap');

        for(var i = 0; i < boxs.length; i++){

            $('#new_content_inner5 > .new_items_wrap').eq(i).append("<div class='new_item_img'><img src='"+msg.documents[i].thumbnail+"'></div>");
            $('#new_content_inner5 > .new_items_wrap').eq(i).append("<div class='new_item_info'></div>");
            $('#new_content_inner5 > .new_items_wrap > .new_item_info').eq(i).append("<a href='sub.html' target='_self'><span class='new_item_title'>"+msg.documents[i].title+"</span></a>");
            $('#new_content_inner5 > .new_items_wrap > .new_item_info').eq(i).append("<span class='new_item_author'>"+msg.documents[i].authors[0]+"</span>");
        }
    })
});

// 핫트랙스 & 교보ONLY는 별도 json파일로 처리
  // 핫트랙스
  $(function(){
    $.ajax({
        url : "./json/main/newHot.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('#new_content_inner6 > .new_items_wrap').eq(i).append("<div class='new_item_img'><img src='img/main/new/"+data[i].url+"'></div>");
                    $('#new_content_inner6 > .new_items_wrap').eq(i).append("<div class='new_item_info'></div>");
                    $('#new_content_inner6 > .new_items_wrap > .new_item_info').eq(i).append("<a href='sub.html' target='_self'><span class='new_item_title'>"+data[i].title+"</span></a>");
                    $('#new_content_inner6 > .new_items_wrap > .new_item_info').eq(i).append("<span class='new_item_author'>"+data[i].author+"</span>");
                }
            }
        }
    })
  });

  //교보ONLY
  $(function(){
    $.ajax({
        url : "./json/main/newOnly.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('#new_content_inner7 > .new_items_wrap').eq(i).append("<div class='new_item_img'><img src='img/main/new/"+data[i].url+"'></div>");
                    $('#new_content_inner7 > .new_items_wrap').eq(i).append("<div class='new_item_info'></div>");
                    $('#new_content_inner7 > .new_items_wrap > .new_item_info').eq(i).append("<a href='sub.html' target='_self'><span class='new_item_title'>"+data[i].title+"</span></a>");
                    $('#new_content_inner7 > .new_items_wrap > .new_item_info').eq(i).append("<span class='new_item_author'>"+data[i].author+"</span>");
                }
            }
        }
    })
  });