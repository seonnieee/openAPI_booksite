// 오른쪽-이 분야의 베스트
$(function(){
     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"심리" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('book_area_new_content');

        for(var i = 0; i < boxs.length; i++){

            $('#book_area_new_box > .book_area_new_content > .book_area_new_imgbox').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"'></a>");
            $('#book_area_new_box > .book_area_new_content > .book_area_new_infobox').eq(i).append("<span class='book_area_new_title'><a href='index.html' target='_self'>"+msg.documents[i].title+"</a></span>");
            $('#book_area_new_box > .book_area_new_content > .book_area_new_infobox').eq(i).append("<span class='book_area_new_author'>"+msg.documents[i].authors[0]+"</span>");
            $('#book_area_new_box > .book_area_new_content > .book_area_new_infobox').eq(i).append("<div class='book_area_new_pricebox'></div>");
          

            var price=msg.documents[i].price;
            var sale=msg.documents[i].sale_price;
            var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var percent=(((price-sale)/price)*100)+"%"
            
            $('#book_area_new_box > .book_area_new_content > .book_area_new_infobox > .book_area_new_pricebox').eq(i).append("<span class='book_area_new_percent'>"+percent+"</span>")
            $('#book_area_new_box > .book_area_new_content > .book_area_new_infobox > .book_area_new_pricebox').eq(i).append("<span class='book_area_new_price'>"+sale2+"</span>")
            $('#book_area_new_box > .book_area_new_content > .book_area_new_infobox > .book_area_new_pricebox').eq(i).append("<span class='book_area_new_price'>"+"원"+"</span>")


        }   
       
    })
});