$(function(){
    $.ajax({
        url : "./json/main/hit.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('.hit_right_img').eq(i).append("<img src='img/main/hit/" +  data[i].url + "' alt='히트상품'>");
                    $('.hit_right_info').eq(i).prepend("<span class='hit_info_title'>" + data[i].title + "</span>");
                    $('.hit_info_price').eq(i).append("<span class='hit_info_percent'>" + data[i].percent + "</span>");
                    $('.hit_info_price').eq(i).append("<span class='hit_info_val'>" + data[i].val + "</span>");
                    $('.hit_info_price').eq(i).append("<span class='hit_info_unit'>" + data[i].unit + "</span>");
                }
            }
        }
    })
});