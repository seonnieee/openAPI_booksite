$(function(){
    $.ajax({
        url : "./json/main/castingInterview.json",
        dataType : "json",
        success : function(data){
            if(data.length > 0){
                for(let i in data){
                    $('.interview_img').eq(i).append("<img src='img/main/interview/" +  data[i].url + "' alt='인터뷰인물'>");
                    $('.interview_box').eq(i).append("<div class='interview_info'><span class='interview_title'>" + data[i].title + "</span></div>");
                }
            }
        }
    })
});