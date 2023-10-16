$(function(){
    $.ajax({
        url : "./json/main/artCulture.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('.art_item_img').eq(i).append("<img src='img/main/art/" +  data[i].url + "' alt='아트기획전'>");
                    $('.art_item_info').eq(i).append("<a href='sub.html' target='_self'></a>");
                    $('.art_item_info a').eq(i).append("<span class='art_item_cate'>" +  data[i].cate + "</span>");
                    $('.art_item_info a').eq(i).append("<span class='art_item_title'>" +  data[i].title + "</span>");
                    $('.art_item_info').eq(i).append("<span class='art_item_author'>" +  data[i].author + "</span>");                   
                }
            }
        }
    })
});