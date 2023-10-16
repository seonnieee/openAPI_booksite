// 상단 상품 판매 정보 페이지
$(function(){
     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"가질 수 있고 될 수 있고 할 수 있다" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('book_sale_box');

        for(var i = 0; i < boxs.length; i++){

            $('#book_sale_title_area').prepend("<div id='book_sale_main_title'>"+msg.documents[i].title+"</div>");

            $('#book_author_info').prepend("<span>"+msg.documents[i].authors[0]+" 저자(글)"+"</span>");
            $('#book_author_info').append("<span>"+msg.documents[i].translators[0]+" 번역"+"</span>");
            
            $('#book_des_info').prepend("<span>"+msg.documents[i].publisher+"</span>");

            var price=msg.documents[i].price;
            var price2=price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var sale=msg.documents[i].sale_price;
            var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            var percent=(((price-sale)/price)*100)+"%"

            $('#book_sale_price_box').append("<span id='book_sale_percent'>"+percent+"</span>");
            $('#book_sale_price_box').append("<span id='book_sale_price'></span>");
            $('#book_sale_price').append("<span id='book_sale_val'>"+sale2+"</span>");
            $('#book_sale_price').append("<span id='book_sale_unit'>"+"원"+"</span>");
            
            $('#book_sale_price_box').append("<span id='book_price'><del>"+price2+"원"+"</del></span>");
        }   
    })
});