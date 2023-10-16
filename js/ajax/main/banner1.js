$(function(){
    $.ajax({
        url : "./json/main/banner1.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('.banner_box').eq(i).append("<a href='sub.html' target='_self'><img src='img/main/banner/" + data[i].url + "' alt ='배너'></a>");
                }
            }
        }
    })
});