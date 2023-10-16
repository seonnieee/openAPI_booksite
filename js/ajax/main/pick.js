$(function(){
    $.ajax({
        url : "./json/main/pick.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                  $('.picks_img').eq(i).append("<img src='img/main/picks/" + data[i].url + "'>");
                  $('.picks_items_info').eq(i).append("<p class='picks_items_title'>"+ data[i].title +"</p>");
                  $('.picks_items_info').eq(i).append("<p class='picks_items_desc'>"+ data[i].desc_f + "<br>" + data[i].desc_s + "<br>" +  data[i].desc_t + "</p>");
                }
            }
        }
    });
});