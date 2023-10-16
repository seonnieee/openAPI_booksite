$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"계절" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('origin_box');
        
        for(i = 0; i < boxs.length; i++){
            $('.origin_box').eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책표지'></a>");
            $('.origin_box').eq(i).append("<a href='sub.html' target='_self' class='origin_info'></a>");
            $('.origin_info').eq(i).append("<span class='origin_category'>"+msg.documents[i].publisher+"</span></a>");
            $('.origin_info').eq(i).append("<span class='origin_name'>"+msg.documents[i].title+"</span>");
            $('.origin_box').eq(i).append("<span class='origin_author'>"+msg.documents[i].authors[0]+"</span>");
        }
    })
});