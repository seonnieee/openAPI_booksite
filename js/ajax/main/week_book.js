$(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"역사" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('week_items_wrap');
        
        for(i = 0; i < boxs.length; i++){
            $('.week_content_item').eq(i).append("<div class='week_item_img'><img src='"+msg.documents[i].thumbnail+"' alt='금주추천도서'></div>");
            $('.week_content_item').eq(i).append("<div class='week_item_info'></div>");
            $('.week_item_info').eq(i).append("<a href='sub.html' target='_self'><span class='week_item_title'>"+msg.documents[i].title+"</span></a>");
            $('.week_item_info').eq(i).append("<span class='week_item_author'>"+msg.documents[i].authors[0]+"</span>");
            $('.week_item_info').eq(i).append("<div class='week_price'></div>");

            var sale=msg.documents[i].sale_price;
            var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            $('.week_price').eq(i).append("<span class='week_val'>"+sale2+"</span>");
            $('.week_price').eq(i).append("<span class='week_unit'>"+"원"+"</span>");
        }
    })
});