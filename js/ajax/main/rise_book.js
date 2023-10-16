$(function(){
    $.ajax({
        method : "GET",
        url : "https://dapi.kakao.com/v3/search/book?target=title",
        data : { query : "트렌드2024"},
        headers : {Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('rise_box');

        for(let i = 0; i < boxs.length; i++){

            $('.rise_box').eq(i).append("<a href='sub.html' target='_self'><img src='"+msg.documents[i].thumbnail+"'></a>");
            $('.rise_box').eq(i).append("<a href='sub.html' target='_self' class='rise_info'></a>");
            $('.rise_box > .rise_info').eq(i).append("<span class='rise_category'>"+msg.documents[i].publisher+"</span>");
            $('.rise_box > .rise_info').eq(i).append("<span class='rise_name'>"+msg.documents[i].title+"</span>");
            $('.rise_box').eq(i).append("<span class='rise_author'>"+msg.documents[i].authors[0]+"</span>");

        }
    })
});