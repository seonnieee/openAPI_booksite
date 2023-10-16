$(function(){
    $.ajax({
        url : "./json/main/marketNav.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('#market_nav li').eq(i).append("<a href='sub.html' target='_self'><img src='img/main/market/" + data[i].url + "' alt='아이콘'></a>");
                    $("#market_nav li").eq(i).append("<a href='sub.html' target='_self'><span>" + data[i].title + "</span></a>");
                }
            }
        }
    })
});