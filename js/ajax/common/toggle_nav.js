$(function(){
    $.ajax({
        url : "./json/common/toggleNav.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('.bttom_icon').eq(i).append("<a href='#'><img src='img/common/header/" +data[i].url+ "' alt='아이콘' class='toggle_icon'><span class='toggle_icon_text'>" + data[i].text + "</span></a>");
                }
            }
        }
    })
});