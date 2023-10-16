$(function(){
    $.ajax({
        url : "./json/main/castingSlider.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('.casting_banner_items').append("<li class='casting_item'><img src='img/main/casting/" +  data[i].banner + "' alt='배너이미지'></li>");
                    $('.casting_info_ul').append("<li class='casting_info_title'>" + data[i].title + "</li>");
                    $('.casting_book_imgbox').append("<li class='casting_book_img'></li>");
                    $('.casting_book_img').eq(i).append("<a href='sub.html' target='_self'><img src='img/main/casting/" + data[i].book + "'></a>");
                    $('.casting_book_img').eq(i).append("<a href='sub.html' target='_self' class='casting_name'><span>" + data[i].name + "</span></a>");
                    $('.casting_book_img').eq(i).append("<span class='casting_author'>" + data[i].author + "</span>");
                    $('.casting_thumb_imgbox').append("<li class='casting_thumb_img'><a href='sub.html' target='_self'><img src='img/main/casting/" + data[i].banner + "' alt='썸네일'></a></li>");
                }
            }
        }
    })
});