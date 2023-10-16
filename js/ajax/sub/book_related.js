// 함께구매한 책 섹션
$(function(){
     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data:{ query:"성공" },
        headers:{Authorization: "KakaoAK 98289cafc9a59f713e9b04e12e674696"}
    })
    .done(function(msg){

        var boxs = document.getElementsByClassName('book_related_item');

        for(var i = 0; i < boxs.length; i++){

            $('.book_related_items > .book_related_item').eq(i).append("<div class='book_related_imgbox'></div>");
            $('.book_related_items > .book_related_item > .book_related_imgbox').eq(i).append("<a href='index.html' target='_self'><img src='"+msg.documents[i].thumbnail+"' alt='책 표지' class='book_related_img'></a>");
            
            $('.book_related_items > .book_related_item').eq(i).append("<div class='book_related_info'></div>");
            $('.book_related_items > .book_related_item > .book_related_info').eq(i).append("<a href='index.html' target='_self'><span>"+msg.documents[i].title+"</span></a>");
            $('.book_related_items > .book_related_item > .book_related_info').eq(i).append("<span>"+msg.documents[i].authors[0]+"</span>");
            $('.book_related_items > .book_related_item > .book_related_info').eq(i).append("<div class='book_related_price'></div>");

            var sale=msg.documents[i].sale_price;
            var sale2 = sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            $('.book_related_items > .book_related_item > .book_related_info > .book_related_price').eq(i).append("<span class='book_related_val'>"+sale2+"</span>");
            $('.book_related_items > .book_related_item > .book_related_info > .book_related_price').eq(i).append("<span class='book_related_unit'>"+"원"+"</span>");
        }   
       
    })
});